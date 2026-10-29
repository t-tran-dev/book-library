import { useEffect, useState, type ReactNode } from "react";
import { FavoritesContext } from "./FavoritesContext";
import { getStoredFavorites, saveFavorites } from "./favoritesStorage";
import type { FavoriteBook } from "./favoritesTypes";

type FavoritesProviderProps = {
  children: ReactNode;
};

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setFavorites] =
    useState<FavoriteBook[]>(getStoredFavorites);

  const isFavorite = (isbn: FavoriteBook["isbn"]) => {
    return favorites.some((favorite) => favorite.isbn === isbn);
  };

  const toggleFavorite = (book: FavoriteBook): void => {
    setFavorites((prev) => {
      if (prev.some((entry) => entry.isbn === book.isbn)) {
        return prev.filter((entry) => entry.isbn !== book.isbn);
      }

      const { isbn, title, author, publisher } = book;

      return [...prev, { isbn, title, author, publisher }];
    });
  };

  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        isFavorite,
        toggleFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
