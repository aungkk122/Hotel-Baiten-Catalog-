/**
 * Pure business logic for the Hotel Baiten Catalog & Staff Learning Hub.
 * Decoupled from UI to allow fast-feedback unit testing.
 */

export interface ProductItem {
  id: string;
  name: string;
  furigana: string;
  name_my: string;
  name_en: string;
  category: string;
  page: number; // PDF page number (1-20)
  price: number;
  description_ja: string;
  description_my: string;
  description_en: string;
  imageIcon?: string;
  icon?: string;
  badge?: string;
  allergens: string[];
  shelf_life_storage: string;
  storage_type: 'ambient' | 'chilled' | 'frozen';
  vocabulary_table: {
    kanji: string;
    hiragana: string;
    myanmar: string;
    english: string;
  }[];
  service_pitch: {
    ja: string;
    furigana: string;
    my: string;
    en: string;
  };
}

export interface FlashcardProgress {
  masteredIds: string[];
  bookmarkedIds: string[];
}

/**
 * Filter products by trilingual query, category, and PDF page number.
 */
export function filterProducts(
  products: ProductItem[],
  query: string,
  categoryFilter: string,
  pageFilter: string | number = 'all'
): ProductItem[] {
  const cleanQuery = query.trim().toLowerCase();
  
  return products.filter((item) => {
    // Page filter match
    if (pageFilter !== 'all') {
      const targetPage = Number(pageFilter);
      if (!isNaN(targetPage) && item.page !== targetPage) {
        return false;
      }
    }

    // Category match
    if (categoryFilter && categoryFilter !== 'all' && item.category !== categoryFilter) {
      return false;
    }

    if (!cleanQuery) return true;

    // Trilingual text match
    const jaMatch =
      item.name.toLowerCase().includes(cleanQuery) ||
      item.furigana.toLowerCase().includes(cleanQuery) ||
      item.description_ja.toLowerCase().includes(cleanQuery);

    const enMatch =
      item.name_en.toLowerCase().includes(cleanQuery) ||
      item.description_en.toLowerCase().includes(cleanQuery);

    const myMatch =
      item.name_my.toLowerCase().includes(cleanQuery) ||
      item.description_my.toLowerCase().includes(cleanQuery);

    const vocabMatch = item.vocabulary_table.some(
      (v) =>
        v.kanji.toLowerCase().includes(cleanQuery) ||
        v.hiragana.toLowerCase().includes(cleanQuery) ||
        v.english.toLowerCase().includes(cleanQuery) ||
        v.myanmar.toLowerCase().includes(cleanQuery)
    );

    return jaMatch || enMatch || myMatch || vocabMatch;
  });
}

/**
 * Get effective price (custom price if set, otherwise default catalog price).
 */
export function getEffectivePrice(
  product: ProductItem,
  customPrices: Record<string, number> = {}
): number {
  if (customPrices && typeof customPrices[product.id] === 'number' && customPrices[product.id] >= 0) {
    return customPrices[product.id];
  }
  return product.price;
}

/**
 * Check if the product's price has been customized.
 */
export function isCustomPrice(
  productId: string,
  customPrices: Record<string, number> = {}
): boolean {
  return customPrices != null && typeof customPrices[productId] === 'number';
}

/**
 * Set custom price in custom price dictionary.
 */
export function setCustomPrice(
  productId: string,
  newPrice: number,
  customPrices: Record<string, number> = {}
): Record<string, number> {
  const updated = { ...customPrices };
  if (newPrice >= 0) {
    updated[productId] = Math.round(newPrice);
  }
  return updated;
}

/**
 * Remove custom price (revert to catalog default).
 */
export function removeCustomPrice(
  productId: string,
  customPrices: Record<string, number> = {}
): Record<string, number> {
  const updated = { ...customPrices };
  delete updated[productId];
  return updated;
}

/**
 * Reset all custom prices back to empty dictionary.
 */
export function resetAllCustomPrices(): Record<string, number> {
  return {};
}

/**
 * Count the total number of customized prices.
 */
export function countCustomPrices(customPrices: Record<string, number> = {}): number {
  return Object.keys(customPrices).length;
}

/**
 * Calculate staff learning progress statistics.
 */
export function calculateLearningStats(
  totalCount: number,
  masteredIds: string[]
): { total: number; mastered: number; reviewNeeded: number; percent: number } {
  const total = Math.max(0, totalCount);
  const mastered = Math.min(total, masteredIds.length);
  const reviewNeeded = Math.max(0, total - mastered);
  const percent = total === 0 ? 0 : Math.round((mastered / total) * 100);

  return { total, mastered, reviewNeeded, percent };
}

/**
 * Clean furigana annotations into plain reading text for TTS.
 */
export function extractPlainTextFromRuby(rubyText: string): string {
  return rubyText.replace(/<rt>.*?<\/rt>/gi, '').replace(/<[^>]+>/g, '').trim();
}

/**
 * Format price in JPY format.
 */
export function formatPriceJPY(price: number): string {
  return `¥${price.toLocaleString('ja-JP')}`;
}

/**
 * Check whether product contains specified major allergen.
 */
export function hasAllergen(product: ProductItem, allergen: string): boolean {
  return product.allergens.some((a) => a.includes(allergen));
}
