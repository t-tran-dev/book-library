import { useState } from "react";
import { Link, generatePath } from "react-router-dom";
import { type FavoriteBook, FavoriteButton } from "../../features/favorites";
import { paths } from "../../routes";
import { sortBy } from "../../utils/sortBy";

type BooksTableProps = {
  books: FavoriteBook[];
  loading?: boolean;
  error?: Error | null;
  variant?: "books" | "favorites";
};

type BookTableColumnHeaders = keyof FavoriteBook;
type SortDirection = "asc" | "desc";

const sortableColumns: {
  key: BookTableColumnHeaders;
  label: string;
}[] = [
  { key: "title", label: "Title" },
  { key: "isbn", label: "ISBN" },
  { key: "author", label: "Author" },
  { key: "publisher", label: "Publisher" },
];

export const BooksTable = ({
  books,
  loading,
  error,
  variant = "books",
}: BooksTableProps) => {
  const [sortByKey, setSortByKey] = useState<BookTableColumnHeaders | null>(
    null,
  );

  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");

  const handleSort = (key: BookTableColumnHeaders) => {
    if (sortByKey === key) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortByKey(key);
      setSortDirection("asc");
    }
  };

  const displayedBooks = sortByKey
    ? sortBy(books, sortByKey, sortDirection)
    : books;

  if (loading) return <div>Lädt Bücher...</div>;
  if (error) return <div>{error.message}</div>;

  if (books.length === 0) {
    return (
      <div>
        {variant === "favorites"
          ? "Keine Favoriten vorhanden."
          : "Keine Bücher gefunden."}
      </div>
    );
  }

  const renderedBooks = displayedBooks.map((book) => (
    <tr key={book.isbn}>
      <td>
        <FavoriteButton
          book={book}
          variant={variant === "favorites" ? "remove" : "toggle"}
        />
      </td>
      <td>{book.title}</td>
      <td>{book.isbn}</td>
      <td>{book.author ?? "—"}</td>
      <td>{book.publisher ?? "—"}</td>
      <td>
        <Link
          to={generatePath(paths.bookDetail, { isbn: book.isbn })}
          className="button"
        >
          Detail
        </Link>
      </td>
    </tr>
  ));

  return (
    <section className="row">
      <div className="column">
        <table>
          <thead>
            <tr>
              <th className="first-col">&nbsp;</th>
              {sortableColumns.map(({ key, label }) => (
                <th
                  key={key}
                  aria-sort={
                    sortByKey === key
                      ? sortDirection === "asc"
                        ? "ascending"
                        : "descending"
                      : undefined
                  }
                >
                  <button
                    type="button"
                    className="sort-button"
                    onClick={() => handleSort(key)}
                  >
                    <span>{label}</span>

                    {sortByKey === key && (
                      <span className="sort-indicator" aria-hidden="true">
                        {sortDirection === "asc" ? "↑" : "↓"}
                      </span>
                    )}
                  </button>
                </th>
              ))}
              <th>&nbsp;</th>
            </tr>
          </thead>

          <tbody>{renderedBooks}</tbody>
        </table>
      </div>
    </section>
  );
};
