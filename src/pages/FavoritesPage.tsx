import { BooksTable } from "../components/booksTable";
import { useFavorites } from "../features/favorites";

export const FavoritesPage = () => {
  const { favorites } = useFavorites();

  return (
    <main className="container">
      <h2>{favorites.length} Favorites on your list</h2>
      <BooksTable books={favorites} variant="favorites" />
    </main>
  );
};
