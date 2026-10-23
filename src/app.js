/**
 * Hotel Souvenir Shop (売店 - Baiten) Staff Application Logic
 * Single-file compatible vanilla JS controller with Page Navigation & Price Customization
 */

// Application State
const appState = {
  currentView: 'catalog', // 'catalog' | 'flashcards' | 'hotel_guide'
  currentCategory: 'all',
  currentPage: 'all', // 'all' | 1 | 2 ... | 20
  flashcardPage: 'all', // 'all' | 1 | 2 ... | 20
  searchQuery: '',
  sortOrder: 'default',
  selectedAllergens: new Set(),
  theme: localStorage.getItem('baiten_theme') || 'light',
  lang: localStorage.getItem('baiten_lang') || 'ja',
  furigana: localStorage.getItem('baiten_furigana') !== 'false', // default true
  speechRate: parseFloat(localStorage.getItem('baiten_speech_rate') || '0.9'),
  flashcardFilter: 'all', // 'all' | 'review' | 'mastered'
  flashcardIndex: 0,
  isCardFlipped: false,
  masteredIds: new Set(JSON.parse(localStorage.getItem('baiten_mastered') || '[]')),
  bookmarkedIds: new Set(JSON.parse(localStorage.getItem('baiten_bookmarks') || '[]')),
  customPrices: JSON.parse(localStorage.getItem('hotel_baiten_custom_prices') || '{}'),
  activeModalId: null,
  activePriceEditItem: null,
};

let currentModalItem = null;

// ================= INITIALIZATION =================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initFurigana();
  initLanguage();
  initSpeechRate();
  renderCategoryPills();
  renderPagePills();
  renderDrawerCategories();
  renderDrawerPageList();
  renderAllergenFilterOptions();
  renderCatalog();
  updateStudyStats();
  updateCustomPricesDrawerCount();
  initSearchInput();
  initKeyboardShortcuts();

  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

// ================= AUDIO ENGINE (NATIVE WEB SPEECH API) =================
function speakJapanese(text, customRate = null) {
  if (!('speechSynthesis' in window)) {
    showToast('音声機能はお使いのブラウザでサポートされていません');
    return;
  }

  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  // Strip ruby or HTML tags if present to speak clean text
  const cleanText = text.replace(/<rt>.*?<\/rt>/gi, '').replace(/<[^>]+>/g, '').trim();
  if (!cleanText) return;

  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = 'ja-JP';
  utterance.rate = customRate || appState.speechRate;
  utterance.pitch = 1.0;

  // Try to find a native Japanese voice if available
  const voices = window.speechSynthesis.getVoices();
  const jaVoice = voices.find((v) => v.lang === 'ja-JP' || v.lang.startsWith('ja'));
  if (jaVoice) {
    utterance.voice = jaVoice;
  }

  window.speechSynthesis.speak(utterance);
}

// Voice test greeting
document.getElementById('btn-quick-audio-test')?.addEventListener('click', () => {
  speakJapanese('いらっしゃいませ。白浜古賀の井リゾート＆スパの売店へようこそ！');
  showToast('音声テスト:「いらっしゃいませ」');
});

function setSpeechRate(val) {
  appState.speechRate = parseFloat(val);
  localStorage.setItem('baiten_speech_rate', appState.speechRate);
  const label = document.getElementById('speech-rate-label');
  if (label) label.textContent = `${appState.speechRate.toFixed(1)}x`;
  speakJapanese('ありがとうございます', appState.speechRate);
}

function initSpeechRate() {
  const slider = document.getElementById('speech-rate-slider');
  const label = document.getElementById('speech-rate-label');
  if (slider) slider.value = appState.speechRate;
  if (label) label.textContent = `${appState.speechRate.toFixed(1)}x`;
}

// ================= FURIGANA TOGGLE ENGINE =================
function toggleFurigana() {
  appState.furigana = !appState.furigana;
  localStorage.setItem('baiten_furigana', appState.furigana);
  applyFuriganaState();
}

function applyFuriganaState() {
  document.body.classList.toggle('hide-furigana', !appState.furigana);

  // Update top bar button
  const topBtn = document.getElementById('btn-furigana-toggle');
  const topStatus = document.getElementById('top-furigana-status');
  if (topBtn && topStatus) {
    if (appState.furigana) {
      topBtn.classList.remove('bg-stone-200', 'text-slate-500', 'dark:bg-slate-800');
      topBtn.classList.add('bg-amber-600', 'text-white');
      topStatus.textContent = 'ON';
    } else {
      topBtn.classList.remove('bg-amber-600', 'text-white');
      topBtn.classList.add('bg-stone-200', 'text-slate-600', 'dark:bg-slate-800', 'dark:text-slate-300');
      topStatus.textContent = 'OFF';
    }
  }

  // Update drawer toggle
  const drawerToggle = document.getElementById('drawer-furigana-toggle');
  const drawerSlider = document.getElementById('drawer-furigana-slider');
  if (drawerToggle && drawerSlider) {
    drawerToggle.setAttribute('aria-checked', String(appState.furigana));
    if (appState.furigana) {
      drawerToggle.classList.remove('bg-stone-300', 'dark:bg-slate-700');
      drawerToggle.classList.add('bg-amber-600');
      drawerSlider.classList.remove('translate-x-0');
      drawerSlider.classList.add('translate-x-5');
    } else {
      drawerToggle.classList.remove('bg-amber-600');
      drawerToggle.classList.add('bg-stone-300', 'dark:bg-slate-700');
      drawerSlider.classList.remove('translate-x-5');
      drawerSlider.classList.add('translate-x-0');
    }
  }

  showToast(`ふりがな表示: ${appState.furigana ? 'ON (表示)' : 'OFF (非表示)'}`);
}

function initFurigana() {
  applyFuriganaState();
}

// ================= THEME ENGINE (DARK / LIGHT) =================
function toggleTheme() {
  appState.theme = appState.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('baiten_theme', appState.theme);
  applyThemeState();
}

function applyThemeState() {
  const root = document.documentElement;
  if (appState.theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }

  // Update drawer slider
  const drawerSlider = document.getElementById('drawer-theme-slider');
  const drawerToggle = document.getElementById('drawer-theme-toggle');
  if (drawerSlider && drawerToggle) {
    drawerToggle.setAttribute('aria-checked', String(appState.theme === 'dark'));
    if (appState.theme === 'dark') {
      drawerSlider.classList.remove('translate-x-0');
      drawerSlider.classList.add('translate-x-5');
    } else {
      drawerSlider.classList.remove('translate-x-5');
      drawerSlider.classList.add('translate-x-0');
    }
  }
}

function initTheme() {
  applyThemeState();
}

// ================= UI LANGUAGE =================
function setLanguage(lang) {
  appState.lang = lang;
  localStorage.setItem('baiten_lang', lang);

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    if (btn.dataset.lang === lang) {
      btn.className = 'lang-btn py-1.5 text-xs font-bold rounded-md bg-amber-600 text-white shadow-2xs transition text-center';
    } else {
      btn.className = 'lang-btn py-1.5 text-xs font-medium rounded-md text-slate-600 dark:text-slate-300 hover:bg-stone-200 dark:hover:bg-slate-700 transition text-center';
    }
  });

  const langNames = { ja: '日本語 (Japanese)', my: 'မြန်မာဘာသာ (Myanmar)', en: 'English' };
  showToast(`UI表示言語: ${langNames[lang]}`);
}

function initLanguage() {
  setLanguage(appState.lang);
}

// ================= NAVIGATION & VIEWS =================
function switchView(viewName) {
  appState.currentView = viewName;

  // Toggle sections
  document.getElementById('view-catalog').classList.toggle('hidden', viewName !== 'catalog');
  document.getElementById('view-flashcards').classList.toggle('hidden', viewName !== 'flashcards');
  document.getElementById('view-hotel_guide').classList.toggle('hidden', viewName !== 'hotel_guide');

  // Category and Page bars only relevant for catalog view
  const catBar = document.getElementById('category-bar-container');
  const pageBar = document.getElementById('page-bar-container');
  if (catBar) catBar.classList.toggle('hidden', viewName !== 'catalog');
  if (pageBar) pageBar.classList.toggle('hidden', viewName !== 'catalog');

  // Update tabs
  document.querySelectorAll('.nav-tab').forEach((tab) => {
    const isActive = tab.dataset.view === viewName;
    if (isActive) {
      tab.className = 'nav-tab active flex items-center gap-1.5 py-1.5 px-3 rounded-md bg-amber-600 text-white font-semibold transition-colors';
    } else {
      tab.className = 'nav-tab flex items-center gap-1.5 py-1.5 px-3 rounded-md text-slate-600 dark:text-slate-300 hover:bg-stone-200 dark:hover:bg-slate-800 transition-colors';
    }
  });

  // Update top bar quick toggle label
  const topLabel = document.getElementById('top-view-label');
  if (topLabel) {
    topLabel.textContent = viewName === 'catalog' ? 'Flashcards' : 'Catalog';
  }

  if (viewName === 'flashcards') {
    renderFlashcard();
  }

  closeDrawer();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ================= DRAWER CONTROLS =================
const drawerOverlay = document.getElementById('drawer-overlay');
const sideDrawer = document.getElementById('side-drawer');
const btnOpenDrawer = document.getElementById('btn-open-drawer');

btnOpenDrawer?.addEventListener('click', openDrawer);

function openDrawer() {
  if (sideDrawer && drawerOverlay) {
    drawerOverlay.classList.remove('pointer-events-none', 'opacity-0');
    drawerOverlay.classList.add('opacity-100');
    sideDrawer.classList.remove('translate-x-full');
    sideDrawer.classList.add('translate-x-0');
  }
}

function closeDrawer() {
  if (sideDrawer && drawerOverlay) {
    drawerOverlay.classList.remove('opacity-100');
    drawerOverlay.classList.add('opacity-0', 'pointer-events-none');
    sideDrawer.classList.remove('translate-x-0');
    sideDrawer.classList.add('translate-x-full');
  }
}

// ================= PRICING HELPERS =================
function getEffectiveProductPrice(product) {
  if (appState.customPrices && typeof appState.customPrices[product.id] === 'number') {
    return appState.customPrices[product.id];
  }
  return product.price;
}

function isProductPriceCustom(productId) {
  return appState.customPrices != null && typeof appState.customPrices[productId] === 'number';
}

function updateCustomPricesDrawerCount() {
  const countBadge = document.getElementById('drawer-custom-prices-count');
  if (countBadge) {
    const count = Object.keys(appState.customPrices || {}).length;
    countBadge.textContent = `${count} 件変更中`;
  }
}

// ================= CATEGORY PILLS =================
function renderCategoryPills() {
  const container = document.getElementById('category-pills');
  if (!container || !window.BAITEN_CATEGORIES) return;

  const categories = window.BAITEN_CATEGORIES;
  const products = window.BAITEN_PRODUCTS || [];

  container.innerHTML = categories
    .map((cat) => {
      const count =
        cat.id === 'all'
          ? products.length
          : products.filter((p) => p.category === cat.id).length;

      const isActive = appState.currentCategory === cat.id;

      return `
        <button
          onclick="setCategory('${cat.id}')"
          class="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all shadow-2xs ${
            isActive
              ? 'bg-amber-600 text-white shadow-xs'
              : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-stone-200 dark:border-slate-700 hover:bg-stone-50 dark:hover:bg-slate-700'
          }"
        >
          <span>${cat.name_ja}</span>
          <span class="text-[10px] font-normal opacity-85">(${count})</span>
        </button>
      `;
    })
    .join('');
}

function renderDrawerCategories() {
  const list = document.getElementById('drawer-category-list');
  if (!list || !window.BAITEN_CATEGORIES) return;

  const products = window.BAITEN_PRODUCTS || [];

  list.innerHTML = window.BAITEN_CATEGORIES.map((cat) => {
    const count =
      cat.id === 'all'
        ? products.length
        : products.filter((p) => p.category === cat.id).length;

    return `
      <button
        onclick="setCategory('${cat.id}'); switchView('catalog'); closeDrawer();"
        class="w-full flex items-center justify-between p-2 rounded-lg hover:bg-stone-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 transition"
      >
        <span class="font-medium truncate text-left">${cat.name_ja}</span>
        <span class="text-xs px-2 py-0.5 rounded-full bg-stone-200 dark:bg-slate-700 font-mono text-[10px]">${count}</span>
      </button>
    `;
  }).join('');
}

function setCategory(catId) {
  appState.currentCategory = catId;
  renderCategoryPills();
  renderCatalog();
}

// ================= PDF PAGE NAVIGATION CONTROLLER =================
function setPage(pageNum) {
  appState.currentPage = pageNum === 'all' ? 'all' : Number(pageNum);
  renderPagePills();
  renderCatalog();
}

function renderPagePills() {
  const container = document.getElementById('page-pills');
  const dropdown = document.getElementById('page-select-dropdown');
  const products = window.BAITEN_PRODUCTS || [];

  // Group item count per page (1 to 20)
  const pageCounts = {};
  for (let i = 1; i <= 20; i++) pageCounts[i] = 0;
  products.forEach((p) => {
    if (p.page >= 1 && p.page <= 20) {
      pageCounts[p.page] = (pageCounts[p.page] || 0) + 1;
    }
  });

  if (container) {
    const isAll = appState.currentPage === 'all';
    let html = `
      <button
        onclick="setPage('all')"
        class="shrink-0 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all shadow-2xs ${
          isAll
            ? 'bg-indigo-600 text-white shadow-xs'
            : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-stone-200 dark:border-slate-700 hover:bg-stone-50 dark:hover:bg-slate-700'
        }"
      >
        <span>すべて (All Pages)</span>
        <span class="text-[10px] font-normal opacity-85">(${products.length})</span>
      </button>
    `;

    for (let p = 1; p <= 20; p++) {
      const count = pageCounts[p] || 0;
      const isActive = appState.currentPage === p;
      html += `
        <button
          onclick="setPage(${p})"
          class="shrink-0 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold font-mono transition-all shadow-2xs ${
            isActive
              ? 'bg-indigo-600 text-white shadow-xs'
              : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-stone-200 dark:border-slate-700 hover:bg-stone-50 dark:hover:bg-slate-700'
          }"
          title="PDF Page ${p}"
        >
          <span>P.${p}</span>
          <span class="text-[10px] font-sans font-normal opacity-85">(${count})</span>
        </button>
      `;
    }
    container.innerHTML = html;
  }

  if (dropdown) {
    dropdown.value = String(appState.currentPage);
  }

  renderDrawerPageList();
}

function renderDrawerPageList() {
  const container = document.getElementById('drawer-page-list');
  if (!container) return;

  const products = window.BAITEN_PRODUCTS || [];
  const pageCounts = {};
  for (let i = 1; i <= 20; i++) pageCounts[i] = 0;
  products.forEach((p) => {
    if (p.page >= 1 && p.page <= 20) pageCounts[p.page] = (pageCounts[p.page] || 0) + 1;
  });

  let html = `
    <button
      onclick="setPage('all'); switchView('catalog'); closeDrawer();"
      class="col-span-4 flex items-center justify-between p-2 rounded-lg text-xs font-semibold transition ${
        appState.currentPage === 'all'
          ? 'bg-indigo-600 text-white'
          : 'bg-stone-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-stone-200'
      }"
    >
      <span>全20ページ一覧 (All 20 Pages)</span>
      <span class="font-mono text-[10px] px-1.5 py-0.5 rounded ${appState.currentPage === 'all' ? 'bg-indigo-700' : 'bg-stone-200 dark:bg-slate-700'}">${products.length}品</span>
    </button>
  `;

  for (let p = 1; p <= 20; p++) {
    const isActive = appState.currentPage === p;
    const count = pageCounts[p] || 0;
    html += `
      <button
        onclick="setPage(${p}); switchView('catalog'); closeDrawer();"
        class="flex flex-col items-center justify-center p-2 rounded-lg text-xs font-bold transition ${
          isActive
            ? 'bg-indigo-600 text-white'
            : 'bg-stone-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-stone-200'
        }"
      >
        <span>P.${p}</span>
        <span class="text-[9px] font-sans font-normal opacity-80">${count}品</span>
      </button>
    `;
  }
  container.innerHTML = html;
}

// ================= ALLERGEN OPTIONS =================
const ALLERGEN_LIST = ['小麦', '卵', '乳', 'そば', '落花生', 'えび', 'かに', '大豆', '牛肉', '豚肉'];

function renderAllergenFilterOptions() {
  const container = document.getElementById('allergen-checkboxes');
  if (!container) return;

  container.innerHTML = ALLERGEN_LIST.map((alg) => {
    const isSelected = appState.selectedAllergens.has(alg);
    return `
      <button
        onclick="toggleAllergen('${alg}')"
        class="px-2.5 py-1 rounded-lg border text-xs font-medium transition ${
          isSelected
            ? 'bg-red-500 text-white border-red-600'
            : 'bg-stone-50 dark:bg-slate-800 border-stone-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-stone-100'
        }"
      >
        ${alg}
      </button>
    `;
  }).join('');
}

function toggleAllergenMenu() {
  const menu = document.getElementById('allergen-menu');
  if (menu) menu.classList.toggle('hidden');
}

function toggleAllergen(alg) {
  if (appState.selectedAllergens.has(alg)) {
    appState.selectedAllergens.delete(alg);
  } else {
    appState.selectedAllergens.add(alg);
  }
  renderAllergenFilterOptions();
  renderCatalog();
}

function clearAllergenFilter() {
  appState.selectedAllergens.clear();
  renderAllergenFilterOptions();
  renderCatalog();
}

// ================= SEARCH INPUT =================
function initSearchInput() {
  const desktopInput = document.getElementById('search-input');
  const desktopClear = document.getElementById('btn-clear-search');
  const mobileInput = document.getElementById('search-input-mobile');
  const mobileClear = document.getElementById('btn-clear-search-mobile');

  function handleSearch(query) {
    appState.searchQuery = query.trim();
    if (desktopInput && desktopInput.value !== query) desktopInput.value = query;
    if (mobileInput && mobileInput.value !== query) mobileInput.value = query;

    if (desktopClear) desktopClear.classList.toggle('hidden', !appState.searchQuery);
    if (mobileClear) mobileClear.classList.toggle('hidden', !appState.searchQuery);

    renderCatalog();
  }

  desktopInput?.addEventListener('input', (e) => handleSearch(e.target.value));
  mobileInput?.addEventListener('input', (e) => handleSearch(e.target.value));

  function clearSearch() {
    handleSearch('');
  }

  desktopClear?.addEventListener('click', clearSearch);
  mobileClear?.addEventListener('click', clearSearch);
}

function resetAllFilters() {
  appState.currentCategory = 'all';
  appState.currentPage = 'all';
  appState.searchQuery = '';
  appState.sortOrder = 'default';
  appState.selectedAllergens.clear();

  const desktopInput = document.getElementById('search-input');
  if (desktopInput) desktopInput.value = '';
  const mobileInput = document.getElementById('search-input-mobile');
  if (mobileInput) mobileInput.value = '';

  const desktopClear = document.getElementById('btn-clear-search');
  if (desktopClear) desktopClear.classList.add('hidden');
  const mobileClear = document.getElementById('btn-clear-search-mobile');
  if (mobileClear) mobileClear.classList.add('hidden');

  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) sortSelect.value = 'default';

  renderCategoryPills();
  renderPagePills();
  renderAllergenFilterOptions();
  renderCatalog();
}

function setSortOrder(order) {
  appState.sortOrder = order;
  renderCatalog();
}

// ================= CATALOG RENDERING =================
function getFilteredProducts() {
  let products = window.BAITEN_PRODUCTS || [];

  // 1. PDF Page Filter
  if (appState.currentPage !== 'all') {
    const targetPage = Number(appState.currentPage);
    if (!isNaN(targetPage)) {
      products = products.filter((p) => p.page === targetPage);
    }
  }

  // 2. Category Filter
  if (appState.currentCategory && appState.currentCategory !== 'all') {
    products = products.filter((p) => p.category === appState.currentCategory);
  }

  // 3. Search Query (Kanji, Kana, English, Myanmar, Vocabulary)
  if (appState.searchQuery) {
    const q = appState.searchQuery.toLowerCase();
    products = products.filter((p) => {
      const jaMatch =
        p.name.toLowerCase().includes(q) ||
        p.furigana.toLowerCase().includes(q) ||
        p.description_ja.toLowerCase().includes(q);

      const enMatch =
        p.name_en.toLowerCase().includes(q) ||
        p.description_en.toLowerCase().includes(q);

      const myMatch =
        p.name_my.toLowerCase().includes(q) ||
        p.description_my.toLowerCase().includes(q);

      const vocabMatch = p.vocabulary_table.some(
        (v) =>
          v.kanji.toLowerCase().includes(q) ||
          v.hiragana.toLowerCase().includes(q) ||
          v.myanmar.toLowerCase().includes(q) ||
          v.english.toLowerCase().includes(q)
      );

      return jaMatch || enMatch || myMatch || vocabMatch;
    });
  }

  // 4. Allergen Filter
  if (appState.selectedAllergens.size > 0) {
    products = products.filter((p) =>
      Array.from(appState.selectedAllergens).some((alg) =>
        p.allergens.some((a) => a.includes(alg))
      )
    );
  }

  // 5. Sorting
  if (appState.sortOrder === 'price-asc') {
    products.sort((a, b) => getEffectiveProductPrice(a) - getEffectiveProductPrice(b));
  } else if (appState.sortOrder === 'price-desc') {
    products.sort((a, b) => getEffectiveProductPrice(b) - getEffectiveProductPrice(a));
  } else if (appState.sortOrder === 'name-ja') {
    products.sort((a, b) => a.furigana.localeCompare(b.furigana, 'ja'));
  }

  return products;
}

function renderCatalog() {
  const container = document.getElementById('product-grid');
  const emptyState = document.getElementById('empty-state');
  const totalLabel = document.getElementById('item-total-count');
  const categoryTag = document.getElementById('active-category-tag');
  const pageTag = document.getElementById('active-page-tag');
  const queryTag = document.getElementById('search-query-tag');
  const queryValue = document.getElementById('search-query-value');

  const products = getFilteredProducts();

  if (totalLabel) totalLabel.textContent = products.length;

  // Active Category Tag
  if (categoryTag) {
    if (appState.currentCategory !== 'all') {
      categoryTag.innerHTML = `<span>${appState.currentCategory}</span> <button onclick="setCategory('all')" class="ml-1 hover:text-red-500 font-bold" title="解除">×</button>`;
      categoryTag.classList.remove('hidden');
    } else {
      categoryTag.classList.add('hidden');
    }
  }

  // Active Page Tag
  if (pageTag) {
    if (appState.currentPage !== 'all') {
      pageTag.innerHTML = `<span>📄 P.${appState.currentPage}</span> <button onclick="setPage('all')" class="ml-1 hover:text-red-500 font-bold" title="解除">×</button>`;
      pageTag.classList.remove('hidden');
    } else {
      pageTag.classList.add('hidden');
    }
  }

  // Search Query Tag
  if (queryTag && queryValue) {
    if (appState.searchQuery) {
      queryValue.textContent = appState.searchQuery;
      queryTag.classList.remove('hidden');
    } else {
      queryTag.classList.add('hidden');
    }
  }

  if (products.length === 0) {
    if (container) container.innerHTML = '';
    if (emptyState) {
      emptyState.classList.remove('hidden');
      // Smart search across pages hint
      const crossPageHint = document.getElementById('cross-page-search-hint');
      if (crossPageHint) {
        if (appState.currentPage !== 'all' && appState.searchQuery) {
          const allMatches = (window.BAITEN_PRODUCTS || []).filter((p) => {
            const q = appState.searchQuery.toLowerCase();
            return (
              p.name.toLowerCase().includes(q) ||
              p.furigana.toLowerCase().includes(q) ||
              p.name_en.toLowerCase().includes(q) ||
              p.name_my.toLowerCase().includes(q)
            );
          });
          if (allMatches.length > 0) {
            crossPageHint.innerHTML = `
              <div class="mt-3 p-3 bg-indigo-50 dark:bg-indigo-950/60 rounded-xl border border-indigo-200 dark:border-indigo-900 text-xs text-indigo-900 dark:text-indigo-200 flex flex-col sm:flex-row items-center justify-between gap-2">
                <span>P.${appState.currentPage} には見つかりませんでしたが、他のページに <strong>${allMatches.length}</strong> 件見つかりました。</span>
                <button onclick="setPage('all')" class="px-3 py-1 rounded-lg bg-indigo-600 text-white font-bold hover:bg-indigo-700 transition">
                  全ページで検索する
                </button>
              </div>
            `;
            crossPageHint.classList.remove('hidden');
          } else {
            crossPageHint.classList.add('hidden');
          }
        } else {
          crossPageHint.classList.add('hidden');
        }
      }
    }
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');

  container.innerHTML = products
    .map((item) => {
      const isMastered = appState.masteredIds.has(item.id);
      const isBookmarked = appState.bookmarkedIds.has(item.id);
      const isCustom = isProductPriceCustom(item.id);
      const effectivePrice = getEffectiveProductPrice(item);

      const storageBadgeClass =
        item.storage_type === 'frozen'
          ? 'bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300'
          : item.storage_type === 'chilled'
          ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
          : 'bg-stone-100 text-stone-700 dark:bg-slate-800 dark:text-slate-300';

      const allergenBadges = item.allergens
        .filter((a) => a !== 'なし')
        .slice(0, 3)
        .map(
          (a) =>
            `<span class="px-1.5 py-0.2 rounded-xs text-[10px] bg-red-50 text-red-700 dark:bg-red-950/70 dark:text-red-300 border border-red-200 dark:border-red-900/40">${a}</span>`
        )
        .join('');

      return `
        <article
          onclick="openModal('${item.id}')"
          class="group bg-white dark:bg-slate-900 rounded-2xl border border-stone-200/90 dark:border-slate-800 shadow-2xs hover:shadow-md hover:border-amber-400 dark:hover:border-amber-700 transition-all duration-200 cursor-pointer flex flex-col justify-between overflow-hidden relative"
        >
          <!-- Card Top Bar & Badges -->
          <div class="p-3.5 sm:p-4 space-y-2.5">
            
            <div class="flex items-start justify-between gap-1 flex-wrap">
              <div class="flex items-center gap-1.5 flex-wrap">
                <!-- PDF Page Badge -->
                <span class="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-md text-[10px] font-bold bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/80 font-mono shadow-2xs">
                  📄 P.${item.page}
                </span>
                <!-- Category Badge -->
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950 text-amber-800 dark:text-amber-200 border border-amber-200 dark:border-amber-800 truncate max-w-[145px]">
                  ${item.category}
                </span>
              </div>

              <div class="flex items-center gap-1 shrink-0">
                <span class="text-[10px] px-1.5 py-0.5 rounded-md font-medium ${storageBadgeClass}">
                  ${item.shelf_life_storage.split('/')[1] ? item.shelf_life_storage.split('/')[1].trim() : '常温'}
                </span>
                <button
                  onclick="event.stopPropagation(); toggleBookmark('${item.id}');"
                  class="p-1 rounded-md text-slate-300 hover:text-amber-500 transition ${isBookmarked ? 'text-amber-500 fill-amber-500' : ''}"
                  title="Bookmark"
                >
                  <i data-lucide="bookmark" class="w-4 h-4 ${isBookmarked ? 'fill-current' : ''}"></i>
                </button>
              </div>
            </div>

            <!-- Product Title with Ruby -->
            <div>
              <div class="flex items-start justify-between gap-1.5">
                <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors leading-snug">
                  ${item.ruby_name}
                </h3>
                <button
                  onclick="event.stopPropagation(); speakJapanese('${item.name}');"
                  class="p-1.5 shrink-0 rounded-full text-slate-400 hover:text-amber-600 hover:bg-amber-50 dark:hover:bg-slate-800 transition"
                  title="Pronounce Japanese"
                  aria-label="Speak ${item.name}"
                >
                  <i data-lucide="volume-2" class="w-4 h-4"></i>
                </button>
              </div>
              <p class="text-xs font-semibold text-amber-700 dark:text-amber-400 font-my mt-0.5 line-clamp-1">
                ${item.name_my}
              </p>
              <p class="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">
                ${item.name_en}
              </p>
            </div>

            <!-- Short description preview -->
            <p class="text-xs text-slate-600 dark:text-slate-300 font-jp line-clamp-2 leading-relaxed">
              ${item.description_ja}
            </p>

            <!-- Allergens -->
            ${
              allergenBadges
                ? `<div class="flex items-center gap-1 flex-wrap pt-1">${allergenBadges}</div>`
                : ''
            }

          </div>

          <!-- Card Bottom Price & Action Footer -->
          <div class="px-3.5 sm:px-4 py-2.5 bg-stone-50/80 dark:bg-slate-800/40 border-t border-stone-100 dark:border-slate-800 flex items-center justify-between text-xs">
            <div class="flex items-center gap-1.5 flex-wrap">
              <span class="text-base font-extrabold font-mono text-slate-900 dark:text-white">
                ¥${effectivePrice.toLocaleString('ja-JP')}
              </span>
              <span class="text-[10px] text-slate-400">(税込)</span>
              ${
                isCustom
                  ? `<span class="px-1.5 py-0.2 rounded-xs text-[10px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border border-amber-300 dark:border-amber-700" title="店舗カスタム価格 (Original: ¥${item.price.toLocaleString()})">変更済</span>`
                  : ''
              }
              <button
                onclick="event.stopPropagation(); openPriceEditModal('${item.id}');"
                class="p-1 rounded-md text-slate-400 hover:text-amber-600 hover:bg-amber-100 dark:hover:bg-slate-700 transition"
                title="価格を編集 (Edit Price)"
                aria-label="Edit price for ${item.name}"
              >
                <i data-lucide="pencil" class="w-3.5 h-3.5"></i>
              </button>
            </div>

            <div class="flex items-center gap-1.5">
              ${
                isMastered
                  ? `<span class="inline-flex items-center gap-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full"><i data-lucide="check" class="w-3 h-3"></i> 覚えた</span>`
                  : `<span class="text-[10px] text-slate-400 group-hover:text-amber-600 transition flex items-center gap-0.5">詳細を見る <i data-lucide="chevron-right" class="w-3 h-3"></i></span>`
              }
            </div>
          </div>
        </article>
      `;
    })
    .join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// ================= PRODUCT DETAIL MODAL =================
function openModal(productId) {
  const products = window.BAITEN_PRODUCTS || [];
  const item = products.find((p) => p.id === productId);
  if (!item) return;

  currentModalItem = item;
  appState.activeModalId = productId;

  const isCustom = isProductPriceCustom(item.id);
  const effectivePrice = getEffectiveProductPrice(item);

  // Fill modal elements
  document.getElementById('modal-category').textContent = item.category;
  
  // Modal Page Badge
  const modalPageBadge = document.getElementById('modal-page-badge');
  if (modalPageBadge) {
    modalPageBadge.textContent = `📄 PDF P.${item.page}`;
  }

  document.getElementById('modal-storage').textContent = item.shelf_life_storage;
  document.getElementById('modal-name-ja').innerHTML = item.ruby_name;
  document.getElementById('modal-name-my').textContent = item.name_my;
  document.getElementById('modal-name-en').textContent = item.name_en;

  // Price & Custom Pricing Info
  document.getElementById('modal-price').textContent = `¥${effectivePrice.toLocaleString('ja-JP')}`;
  
  const priceEditedBadge = document.getElementById('modal-price-edited-badge');
  if (priceEditedBadge) {
    priceEditedBadge.classList.toggle('hidden', !isCustom);
  }

  const originalPriceNote = document.getElementById('modal-original-price-note');
  if (originalPriceNote) {
    if (isCustom) {
      originalPriceNote.textContent = `(カタログ定価: ¥${item.price.toLocaleString('ja-JP')})`;
      originalPriceNote.classList.remove('hidden');
    } else {
      originalPriceNote.classList.add('hidden');
    }
  }

  document.getElementById('modal-shelf-life').textContent = item.shelf_life_storage;

  // Allergens
  const allergenContainer = document.getElementById('modal-allergens');
  if (allergenContainer) {
    if (item.allergens.length === 1 && item.allergens[0] === 'なし') {
      allergenContainer.innerHTML = `<span class="text-emerald-600 font-medium text-xs">アレルギー特定品目なし (None)</span>`;
    } else {
      allergenContainer.innerHTML = item.allergens
        .map(
          (a) =>
            `<span class="px-2 py-0.5 rounded-md bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300 font-bold text-xs">${a}</span>`
        )
        .join('');
    }
  }

  // Descriptions
  document.getElementById('modal-desc-ja').textContent = item.description_ja;
  document.getElementById('modal-desc-my').textContent = item.description_my;
  document.getElementById('modal-desc-en').textContent = item.description_en;

  // Vocabulary Table
  const vocabTable = document.getElementById('modal-vocab-table');
  if (vocabTable) {
    vocabTable.innerHTML = item.vocabulary_table
      .map(
        (v) => `
        <tr class="hover:bg-stone-50 dark:hover:bg-slate-800/40 transition">
          <td class="py-2 px-3 font-bold text-slate-900 dark:text-white font-jp">${v.kanji}</td>
          <td class="py-2 px-3 text-amber-700 dark:text-amber-400 font-jp font-semibold text-xs">${v.hiragana}</td>
          <td class="py-2 px-3 text-slate-700 dark:text-slate-300 font-my">${v.myanmar}</td>
          <td class="py-2 px-3 text-slate-500 dark:text-slate-400">${v.english}</td>
          <td class="py-2 px-2 text-center">
            <button onclick="speakJapanese('${v.kanji}')" class="p-1 rounded-md text-amber-600 hover:bg-amber-100 dark:hover:bg-slate-700" title="Listen">
              <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
            </button>
          </td>
        </tr>
      `
      )
      .join('');
  }

  // Keigo Pitch
  document.getElementById('modal-pitch-ja').innerHTML = `「${item.service_pitch.ja}」`;
  document.getElementById('modal-pitch-my').textContent = item.service_pitch.my;
  document.getElementById('modal-pitch-en').textContent = item.service_pitch.en;

  // Bookmark icon status
  updateModalBookmarkButton(item.id);

  // Show modal
  const modal = document.getElementById('modal-container');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function closeModal() {
  const modal = document.getElementById('modal-container');
  if (modal) {
    modal.classList.add('hidden');
    if (!appState.activePriceEditItem) {
      document.body.classList.remove('overflow-hidden');
    }
  }
  appState.activeModalId = null;
  currentModalItem = null;
}

function playModalAudio() {
  if (currentModalItem) {
    speakJapanese(currentModalItem.name);
  }
}

function playModalPitchAudio() {
  if (currentModalItem) {
    speakJapanese(currentModalItem.service_pitch.ja);
  }
}

function toggleModalBookmark() {
  if (currentModalItem) {
    toggleBookmark(currentModalItem.id);
    updateModalBookmarkButton(currentModalItem.id);
  }
}

function updateModalBookmarkButton(productId) {
  const btn = document.getElementById('modal-btn-bookmark');
  if (!btn) return;
  const isBookmarked = appState.bookmarkedIds.has(productId);
  if (isBookmarked) {
    btn.className = 'p-2 rounded-full text-amber-500 bg-amber-50 dark:bg-amber-950 transition';
    btn.innerHTML = `<i data-lucide="bookmark" class="w-5 h-5 fill-current"></i>`;
  } else {
    btn.className = 'p-2 rounded-full text-slate-400 hover:text-amber-500 hover:bg-stone-100 dark:hover:bg-slate-800 transition';
    btn.innerHTML = `<i data-lucide="bookmark" class="w-5 h-5"></i>`;
  }
  if (window.lucide) window.lucide.createIcons();
}

function toggleModalMastered() {
  if (currentModalItem) {
    toggleMastered(currentModalItem.id);
  }
}

// ================= PRICE EDIT MODAL ACTIONS =================
function openPriceEditModal(productId) {
  const products = window.BAITEN_PRODUCTS || [];
  const item = products.find((p) => p.id === productId);
  if (!item) return;

  appState.activePriceEditItem = item;
  const isCustom = isProductPriceCustom(item.id);
  const effectivePrice = getEffectiveProductPrice(item);

  // Set modal text
  document.getElementById('price-edit-category').textContent = item.category;
  document.getElementById('price-edit-page-badge').textContent = `📄 P.${item.page}`;
  document.getElementById('price-edit-product-name').textContent = item.name;
  document.getElementById('price-edit-product-name-my').textContent = item.name_my;
  document.getElementById('price-edit-product-name-en').textContent = item.name_en;
  document.getElementById('price-edit-original').textContent = `¥${item.price.toLocaleString('ja-JP')}`;
  document.getElementById('price-edit-current-active').textContent = `¥${effectivePrice.toLocaleString('ja-JP')}`;

  const statusBadge = document.getElementById('price-edit-status-badge');
  if (statusBadge) {
    if (isCustom) {
      statusBadge.textContent = '変更済み (Edited)';
      statusBadge.className = 'text-[10px] text-amber-600 dark:text-amber-400 font-bold block mt-0.5';
    } else {
      statusBadge.textContent = '初期定価 (Original)';
      statusBadge.className = 'text-[10px] text-slate-400 block mt-0.5';
    }
  }

  // Pre-fill input
  const input = document.getElementById('input-custom-price');
  if (input) {
    input.value = effectivePrice;
    setTimeout(() => {
      input.focus();
      input.select();
    }, 100);
  }

  // Reset button state
  const btnReset = document.getElementById('btn-price-reset-original');
  if (btnReset) {
    btnReset.disabled = !isCustom;
    btnReset.classList.toggle('opacity-50', !isCustom);
    btnReset.classList.toggle('cursor-not-allowed', !isCustom);
  }

  // Open modal
  const modal = document.getElementById('price-edit-modal-container');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function closePriceEditModal() {
  const modal = document.getElementById('price-edit-modal-container');
  if (modal) {
    modal.classList.add('hidden');
    if (!appState.activeModalId) {
      document.body.classList.remove('overflow-hidden');
    }
  }
  appState.activePriceEditItem = null;
}

function adjustPriceInput(delta) {
  const input = document.getElementById('input-custom-price');
  if (!input) return;
  const currentVal = parseInt(input.value, 10) || 0;
  const newVal = Math.max(0, currentVal + delta);
  input.value = newVal;
}

function saveCustomPriceAction() {
  if (!appState.activePriceEditItem) return;
  const item = appState.activePriceEditItem;
  const input = document.getElementById('input-custom-price');
  if (!input) return;

  const enteredPrice = parseInt(input.value, 10);
  if (isNaN(enteredPrice) || enteredPrice < 0) {
    showToast('有効な価格（0以上の半角数字）を入力してください');
    return;
  }

  if (enteredPrice === item.price) {
    // Reverted to original catalog price
    delete appState.customPrices[item.id];
  } else {
    appState.customPrices[item.id] = enteredPrice;
  }

  localStorage.setItem('hotel_baiten_custom_prices', JSON.stringify(appState.customPrices));
  updateCustomPricesDrawerCount();
  closePriceEditModal();
  renderCatalog();

  // If detail modal is open for this item, refresh modal content
  if (appState.activeModalId === item.id) {
    openModal(item.id);
  }

  showToast(`「${item.name}」の価格を ¥${enteredPrice.toLocaleString()} に保存しました`);
}

function resetSinglePriceAction() {
  if (!appState.activePriceEditItem) return;
  const item = appState.activePriceEditItem;

  delete appState.customPrices[item.id];
  localStorage.setItem('hotel_baiten_custom_prices', JSON.stringify(appState.customPrices));
  updateCustomPricesDrawerCount();
  closePriceEditModal();
  renderCatalog();

  if (appState.activeModalId === item.id) {
    openModal(item.id);
  }

  showToast(`「${item.name}」の価格をカタログ初期値（¥${item.price.toLocaleString()}）に戻しました`);
}

function confirmResetAllPrices() {
  const count = Object.keys(appState.customPrices || {}).length;
  if (count === 0) {
    showToast('変更された価格はありません（すべて初期定価です）');
    return;
  }

  const ok = window.confirm(`現在変更されている ${count} 件の価格をすべてカタログ初期定価に戻しますか？\n（この操作は元に戻せません）`);
  if (!ok) return;

  appState.customPrices = {};
  localStorage.removeItem('hotel_baiten_custom_prices');
  updateCustomPricesDrawerCount();
  renderCatalog();

  if (appState.activeModalId) {
    openModal(appState.activeModalId);
  }

  showToast('すべての価格を初期設定に戻しました');
}

// ================= BOOKMARKS & MASTERED TRACKING =================
function toggleBookmark(productId) {
  if (appState.bookmarkedIds.has(productId)) {
    appState.bookmarkedIds.delete(productId);
    showToast('ブックマークから削除しました');
  } else {
    appState.bookmarkedIds.add(productId);
    showToast('ブックマークに追加しました ⭐');
  }

  localStorage.setItem('baiten_bookmarks', JSON.stringify(Array.from(appState.bookmarkedIds)));
  renderCatalog();
}

function toggleMastered(productId) {
  if (appState.masteredIds.has(productId)) {
    appState.masteredIds.delete(productId);
    showToast('要復習リストに戻しました');
  } else {
    appState.masteredIds.add(productId);
    showToast('マスター済みに登録しました！ 🎉');
  }

  localStorage.setItem('baiten_mastered', JSON.stringify(Array.from(appState.masteredIds)));
  updateStudyStats();
  renderCatalog();
  if (appState.currentView === 'flashcards') {
    renderFlashcard();
  }
}

function updateStudyStats() {
  const total = (window.BAITEN_PRODUCTS || []).length;
  const mastered = appState.masteredIds.size;
  const review = Math.max(0, total - mastered);
  const percent = total > 0 ? Math.round((mastered / total) * 100) : 0;

  // Update Drawer Stats
  const drawerPercent = document.getElementById('drawer-progress-percent');
  const drawerBar = document.getElementById('drawer-progress-bar');
  const drawerMastered = document.getElementById('drawer-mastered-count');
  const drawerReview = document.getElementById('drawer-review-count');

  if (drawerPercent) drawerPercent.textContent = `${percent}%`;
  if (drawerBar) drawerBar.style.width = `${percent}%`;
  if (drawerMastered) drawerMastered.textContent = mastered;
  if (drawerReview) drawerReview.textContent = review;

  // Update Flashcard badge count in nav
  const badge = document.getElementById('flashcard-badge-count');
  if (badge) badge.textContent = review;

  // Update Flashcard view filter counts
  const fcCountAll = document.getElementById('fc-count-all');
  const fcCountReview = document.getElementById('fc-count-review');
  const fcCountMastered = document.getElementById('fc-count-mastered');

  if (fcCountAll) fcCountAll.textContent = total;
  if (fcCountReview) fcCountReview.textContent = review;
  if (fcCountMastered) fcCountMastered.textContent = mastered;
}

function resetProgress() {
  if (confirm('学習進捗をすべてリセットしますか？ (Reset study progress?)')) {
    appState.masteredIds.clear();
    localStorage.removeItem('baiten_mastered');
    updateStudyStats();
    renderCatalog();
    renderFlashcard();
    showToast('進捗をリセットしました');
  }
}

// ================= FLASHCARD LEARNING ENGINE =================
function getFlashcardList() {
  let products = window.BAITEN_PRODUCTS || [];

  // Filter by Flashcard Page if set
  if (appState.flashcardPage && appState.flashcardPage !== 'all') {
    const targetPage = Number(appState.flashcardPage);
    if (!isNaN(targetPage)) {
      products = products.filter((p) => p.page === targetPage);
    }
  }

  if (appState.flashcardFilter === 'mastered') {
    return products.filter((p) => appState.masteredIds.has(p.id));
  } else if (appState.flashcardFilter === 'review') {
    return products.filter((p) => !appState.masteredIds.has(p.id));
  }
  return products;
}

function setFlashcardFilter(filter) {
  appState.flashcardFilter = filter;
  appState.flashcardIndex = 0;
  appState.isCardFlipped = false;

  document.querySelectorAll('.fc-filter').forEach((btn) => {
    if (btn.dataset.filter === filter) {
      btn.className = 'fc-filter active px-2.5 py-1 text-xs rounded-lg font-bold bg-amber-600 text-white transition';
    } else {
      btn.className = 'fc-filter px-2.5 py-1 text-xs rounded-lg font-medium text-slate-600 dark:text-slate-300 hover:bg-stone-100 dark:hover:bg-slate-800 transition';
    }
  });

  renderFlashcard();
}

function setFlashcardPage(pageNum) {
  appState.flashcardPage = pageNum === 'all' ? 'all' : Number(pageNum);
  appState.flashcardIndex = 0;
  appState.isCardFlipped = false;
  renderFlashcard();
}

function renderFlashcard() {
  const cards = getFlashcardList();
  const inner = document.getElementById('flashcard-inner');
  if (inner) inner.classList.toggle('flipped', appState.isCardFlipped);

  if (cards.length === 0) {
    document.getElementById('fc-front-name').textContent = '該当するカードがありません';
    document.getElementById('fc-front-sub').textContent = 'フィルターまたはページを変更してください';
    document.getElementById('fc-counter-display').textContent = '0 / 0';
    return;
  }

  if (appState.flashcardIndex >= cards.length) {
    appState.flashcardIndex = 0;
  }

  const current = cards[appState.flashcardIndex];
  const isMastered = appState.masteredIds.has(current.id);
  const effectivePrice = getEffectiveProductPrice(current);

  // Counter & Progress Bar
  const counter = document.getElementById('fc-counter-display');
  if (counter) counter.textContent = `Card ${appState.flashcardIndex + 1} / ${cards.length}`;
  const bar = document.getElementById('fc-progress-bar');
  if (bar) bar.style.width = `${Math.round(((appState.flashcardIndex + 1) / cards.length) * 100)}%`;

  // Front Elements
  document.getElementById('fc-front-category').textContent = current.category;
  
  const fcFrontPage = document.getElementById('fc-front-page');
  if (fcFrontPage) {
    fcFrontPage.textContent = `📄 P.${current.page}`;
  }

  document.getElementById('fc-front-price').textContent = `¥${effectivePrice.toLocaleString('ja-JP')}`;
  document.getElementById('fc-front-name').innerHTML = current.ruby_name;
  document.getElementById('fc-front-sub').textContent = current.description_ja;
  document.getElementById('fc-front-icon').textContent = current.icon || '🛍️';
  document.getElementById('fc-front-storage').textContent = current.shelf_life_storage;

  // Back Elements
  document.getElementById('fc-back-name-my').textContent = current.name_my;
  document.getElementById('fc-back-name-en').textContent = current.name_en;
  document.getElementById('fc-back-desc-my').textContent = current.description_my;

  // Vocabulary list on back
  const vocabList = document.getElementById('fc-back-vocab-list');
  if (vocabList) {
    vocabList.innerHTML = current.vocabulary_table
      .slice(0, 3)
      .map(
        (v) => `
        <div class="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-slate-800/80 border border-stone-200 dark:border-slate-700/60 text-xs">
          <div>
            <span class="font-bold text-slate-900 dark:text-white mr-1.5 font-jp">${v.kanji}</span>
            <span class="text-amber-700 dark:text-amber-400 font-jp font-semibold text-xs mr-2">${v.hiragana}</span>
            <span class="text-slate-600 dark:text-slate-300 font-my">${v.myanmar}</span>
          </div>
          <button onclick="event.stopPropagation(); speakJapanese('${v.kanji}');" class="p-1 text-slate-400 hover:text-amber-600">
            <i data-lucide="volume-2" class="w-3 h-3"></i>
          </button>
        </div>
      `
      )
      .join('');
  }

  // Pitch on back
  document.getElementById('fc-back-pitch-ja').textContent = `「${current.service_pitch.ja}」`;
  document.getElementById('fc-back-pitch-my').textContent = current.service_pitch.my;
  document.getElementById('fc-back-allergens').textContent = `アレルゲン: ${current.allergens.join(', ')}`;

  // Mastered button text & style
  const masteredBtn = document.getElementById('fc-btn-toggle-mastered');
  const masteredText = document.getElementById('fc-mastered-text');
  if (masteredBtn && masteredText) {
    if (isMastered) {
      masteredBtn.className =
        'flex items-center gap-1.5 py-2.5 px-5 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold hover:bg-slate-300 transition active:scale-95 shadow-xs';
      masteredText.textContent = '復習に戻す (Unmaster)';
    } else {
      masteredBtn.className =
        'flex items-center gap-1.5 py-2.5 px-5 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition active:scale-95 shadow-xs';
      masteredText.textContent = '覚えた (Mastered)';
    }
  }

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function toggleCardFlip() {
  appState.isCardFlipped = !appState.isCardFlipped;
  const inner = document.getElementById('flashcard-inner');
  if (inner) inner.classList.toggle('flipped', appState.isCardFlipped);
}

function nextCard() {
  const cards = getFlashcardList();
  if (cards.length === 0) return;
  appState.isCardFlipped = false;
  appState.flashcardIndex = (appState.flashcardIndex + 1) % cards.length;
  renderFlashcard();
}

function prevCard() {
  const cards = getFlashcardList();
  if (cards.length === 0) return;
  appState.isCardFlipped = false;
  appState.flashcardIndex = (appState.flashcardIndex - 1 + cards.length) % cards.length;
  renderFlashcard();
}

function toggleCurrentCardMastered() {
  const cards = getFlashcardList();
  if (cards.length === 0) return;
  const current = cards[appState.flashcardIndex];
  toggleMastered(current.id);
}

function playCurrentCardAudio() {
  const cards = getFlashcardList();
  if (cards.length === 0) return;
  speakJapanese(cards[appState.flashcardIndex].name);
}

function playCurrentCardPitch() {
  const cards = getFlashcardList();
  if (cards.length === 0) return;
  speakJapanese(cards[appState.flashcardIndex].service_pitch.ja);
}

// ================= KEYBOARD & GESTURES =================
function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Escape closes modal or drawer
    if (e.key === 'Escape') {
      if (appState.activePriceEditItem) {
        closePriceEditModal();
      } else if (appState.activeModalId) {
        closeModal();
      } else {
        closeDrawer();
      }
      return;
    }

    // Flashcard shortcuts when on flashcard view and not inside input
    if (appState.currentView === 'flashcards' && document.activeElement.tagName !== 'INPUT') {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        toggleCardFlip();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextCard();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevCard();
      }
    }
  });
}

// ================= TOAST NOTIFICATION =================
let toastTimeout = null;
function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toast-text');
  if (!toast || !toastText) return;

  toastText.textContent = msg;
  toast.classList.remove('translate-y-16', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-16', 'opacity-0');
  }, 2200);
}

// Export for global access in inline event handlers
window.appState = appState;
window.switchView = switchView;
window.setCategory = setCategory;
window.setPage = setPage;
window.setFlashcardPage = setFlashcardPage;
window.openModal = openModal;
window.closeModal = closeModal;
window.openPriceEditModal = openPriceEditModal;
window.closePriceEditModal = closePriceEditModal;
window.adjustPriceInput = adjustPriceInput;
window.saveCustomPriceAction = saveCustomPriceAction;
window.resetSinglePriceAction = resetSinglePriceAction;
window.confirmResetAllPrices = confirmResetAllPrices;
window.toggleBookmark = toggleBookmark;
window.toggleMastered = toggleMastered;
window.toggleModalBookmark = toggleModalBookmark;
window.toggleModalMastered = toggleModalMastered;
window.playModalAudio = playModalAudio;
window.playModalPitchAudio = playModalPitchAudio;
window.toggleFurigana = toggleFurigana;
window.toggleTheme = toggleTheme;
window.setLanguage = setLanguage;
window.setSpeechRate = setSpeechRate;
window.setSortOrder = setSortOrder;
window.toggleAllergenMenu = toggleAllergenMenu;
window.toggleAllergen = toggleAllergen;
window.clearAllergenFilter = clearAllergenFilter;
window.resetAllFilters = resetAllFilters;
window.resetProgress = resetProgress;
window.speakJapanese = speakJapanese;
window.openDrawer = openDrawer;
window.closeDrawer = closeDrawer;
window.toggleCardFlip = toggleCardFlip;
window.nextCard = nextCard;
window.prevCard = prevCard;
window.toggleCurrentCardMastered = toggleCurrentCardMastered;
window.playCurrentCardAudio = playCurrentCardAudio;
window.playCurrentCardPitch = playCurrentCardPitch;
window.setFlashcardFilter = setFlashcardFilter;
