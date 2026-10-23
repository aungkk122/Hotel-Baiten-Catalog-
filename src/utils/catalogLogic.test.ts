import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterProducts,
  calculateLearningStats,
  extractPlainTextFromRuby,
  formatPriceJPY,
  hasAllergen,
  getEffectivePrice,
  isCustomPrice,
  setCustomPrice,
  removeCustomPrice,
  resetAllCustomPrices,
  countCustomPrices,
} from './catalogLogic.ts';
import type { ProductItem } from './catalogLogic.ts';

const mockProducts: ProductItem[] = [
  {
    id: 'kagerou_fukushido',
    name: '銘菓 かげろう',
    furigana: 'めいか かげろう',
    name_my: 'ခိရှူး နာမည်ကြီး Kagero မုန့်',
    name_en: 'Kagerou Confectionery by Fukushido',
    category: '和菓子・スイーツ',
    page: 8,
    price: 1080,
    description_ja: '白浜を代表する銘菓。サクッとしたブッセ生地にバタークリーム。',
    description_my: 'ရှီရာဟာမမြို့၏ အထင်ကရ အကျော်ကြားဆုံး မုန့်ဖြစ်ပြီး နူးညံ့သောအလွှာကြား ထောပတ်မလိုင်ခံထားသည်။',
    description_en: 'Shirahama flagship sweet with crisp sponge and creamy butter filling.',
    allergens: ['小麦', '卵', '乳'],
    shelf_life_storage: '製造日より40日 / 常温保存',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '銘菓', hiragana: 'めいか', myanmar: 'နာမည်ကြီး ရိုးရာမုန့်', english: 'Famous confection' },
      { kanji: '代表', hiragana: 'だいひょう', myanmar: 'ကိုယ်စားပြု/အထင်ကရ', english: 'Representative' },
    ],
    service_pitch: {
      ja: '当館のお茶菓子としても大好評でございます。',
      furigana: 'とうかんのおちゃがしとしてもだいこうひょうでございます。',
      my: 'ကျွန်တော်တို့ ဟိုတယ်ဧည့်ကြိုလက်ဖက်ရည်မုန့်အဖြစ်လည်း အထူးလူကြိုက်များလှပါတယ်။',
      en: 'It is highly popular as our hotel welcome room confection.',
    },
  },
  {
    id: 'kumano_beef_miso',
    name: '熊野牛肉味噌',
    furigana: 'くまのぎゅう にくみそ',
    name_my: 'အမဲသားရောစပ်ထားသော ဟင်းခတ် Miso အနှစ်ဘူး',
    name_en: 'Kumano Beef Meat Miso',
    category: '調味料・特産品',
    page: 2,
    price: 850,
    description_ja: '高級熊野牛の旨味をぎゅっと凝縮したおかず味噌。ご飯にぴったり。',
    description_my: 'နာမည်ကြီး Kumano အမဲသားအရသာ ထည့်သွင်းထားသော ဟင်းခတ်ဆော့စ်အနှစ်။',
    description_en: 'Savory condiment miso packed with the rich umami of premium Kumano beef.',
    allergens: ['小麦', '大豆', '牛肉'],
    shelf_life_storage: '180日 / 常温（開封後要冷蔵）',
    storage_type: 'ambient',
    vocabulary_table: [
      { kanji: '旨味', hiragana: 'うまみ', myanmar: 'အရသာ အဆီအနှစ်', english: 'Umami / Savory flavor' },
      { kanji: '凝縮', hiragana: 'ぎょうしゅく', myanmar: 'စုစည်းသိပ်သည်းထားသော', english: 'Condensed / Concentrated' },
    ],
    service_pitch: {
      ja: '温かいご飯にのせるだけで絶品でございます。',
      furigana: 'あたたかいごはんにのせるだけでぜっぴんでございます。',
      my: 'ထမင်းပူပူပေါ်မှာ တင်စားရုံနဲ့ အလွန်အရသာရှိပါတယ်။',
      en: 'It is exquisite simply served atop hot steaming rice.',
    },
  },
];

test('filterProducts filters by page number correctly', () => {
  const page8Results = filterProducts(mockProducts, '', 'all', 8);
  assert.equal(page8Results.length, 1);
  assert.equal(page8Results[0].id, 'kagerou_fukushido');

  const page2Results = filterProducts(mockProducts, '', 'all', 2);
  assert.equal(page2Results.length, 1);
  assert.equal(page2Results[0].id, 'kumano_beef_miso');

  const page1Results = filterProducts(mockProducts, '', 'all', 1);
  assert.equal(page1Results.length, 0);

  const allPageResults = filterProducts(mockProducts, '', 'all', 'all');
  assert.equal(allPageResults.length, 2);
});

test('custom price getters and setters work as expected', () => {
  const defaultPrice = getEffectivePrice(mockProducts[0], {});
  assert.equal(defaultPrice, 1080);
  assert.equal(isCustomPrice(mockProducts[0].id, {}), false);

  const updatedPrices = setCustomPrice(mockProducts[0].id, 1200, {});
  assert.equal(getEffectivePrice(mockProducts[0], updatedPrices), 1200);
  assert.equal(isCustomPrice(mockProducts[0].id, updatedPrices), true);

  const revertedPrices = removeCustomPrice(mockProducts[0].id, updatedPrices);
  assert.equal(getEffectivePrice(mockProducts[0], revertedPrices), 1080);
  assert.equal(isCustomPrice(mockProducts[0].id, revertedPrices), false);
});

test('filterProducts matches Japanese kanji and hiragana', () => {
  const resultJa = filterProducts(mockProducts, 'かげろう', 'all');
  assert.equal(resultJa.length, 1);
  assert.equal(resultJa[0].id, 'kagerou_fukushido');

  const resultFurigana = filterProducts(mockProducts, 'くまのぎゅう', 'all');
  assert.equal(resultFurigana.length, 1);
  assert.equal(resultFurigana[0].id, 'kumano_beef_miso');
});

test('calculateLearningStats calculates accurate totals and percentages', () => {
  const statsEmpty = calculateLearningStats(10, []);
  assert.deepEqual(statsEmpty, { total: 10, mastered: 0, reviewNeeded: 10, percent: 0 });

  const statsHalf = calculateLearningStats(10, ['id1', 'id2', 'id3', 'id4', 'id5']);
  assert.deepEqual(statsHalf, { total: 10, mastered: 5, reviewNeeded: 5, percent: 50 });
});

test('formatPriceJPY formats price in Japanese Yen format', () => {
  assert.equal(formatPriceJPY(1080), '¥1,080');
  assert.equal(formatPriceJPY(350), '¥350');
});

test('countCustomPrices and resetAllCustomPrices manage price state', () => {
  assert.equal(countCustomPrices({}), 0);
  const updated = setCustomPrice('item1', 500, {});
  const updated2 = setCustomPrice('item2', 800, updated);
  assert.equal(countCustomPrices(updated2), 2);
  const reset = resetAllCustomPrices();
  assert.equal(countCustomPrices(reset), 0);
});

test('filterProducts supports combined search query and page filter', () => {
  // Page 8 has kagerou
  const matchPage8 = filterProducts(mockProducts, 'kagerou', 'all', 8);
  assert.equal(matchPage8.length, 1);
  assert.equal(matchPage8[0].id, 'kagerou_fukushido');

  // Page 2 does NOT have kagerou even though query matches
  const mismatchPage2 = filterProducts(mockProducts, 'kagerou', 'all', 2);
  assert.equal(mismatchPage2.length, 0);
});
