import { createContext } from "react";
import type { FavoriteBook } from "./favoritesTypes";

export type FavoritesContextValue = {
  favorites: FavoriteBook[];
  isFavorite: (isbn: string) => boolean;
  toggleFavorite: (book: FavoriteBook) => void;
};

export const FavoritesContext = createContext<
  FavoritesContextValue | undefined
>(undefined);
