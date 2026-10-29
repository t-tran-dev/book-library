import type { FavoriteBook } from "./favoritesTypes";
import { isFavoriteBook } from "./favoritesValidators";

const STORAGE_KEY = "book-library:favorites";

export const getStoredFavorites = (): FavoriteBook[] => {
  const stored = localStorage.getItem(STORAGE_KEY);

  if (!stored) return [];

  try {
    const parsed: unknown = JSON.parse(stored);

    if (!Array.isArray(parsed)) return [];

    return parsed.filter(isFavoriteBook);
  } catch {
    console.warn("Failed to parse stored favorites.");
    return [];
  }
};

export const saveFavorites = (favorites: FavoriteBook[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
};
