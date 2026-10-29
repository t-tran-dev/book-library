import { Route, Routes } from "react-router-dom";
import { BookDetailPage, BooksPage, FavoritesPage } from "../pages";
import { paths } from "./paths";

export const AppRoutes = () => {
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
};
