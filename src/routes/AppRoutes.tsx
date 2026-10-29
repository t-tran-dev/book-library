import { Route, Routes } from "react-router-dom";
import { BooksPage } from "../pages/BooksPage";
import { FavoritesPage } from "../pages/FavoritesPage";
import { BookDetailPage } from "../pages/BookDetailPage";
import { paths } from "./paths";

export function AppRoutes() {
  return (
    <Routes>
      <Route path={paths.books} element={<BooksPage />} />
      <Route path={paths.favorites} element={<FavoritesPage />} />
      <Route path={paths.bookDetail} element={<BookDetailPage />} />
      <Route
        path="*"
        element={
          <main className="container">
            <h2>Page not found</h2>
          </main>
        }
      />
    </Routes>
  );
}
