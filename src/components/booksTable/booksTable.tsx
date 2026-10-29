import { Link, generatePath } from "react-router-dom";
import { type FavoriteBook, FavoriteButton } from "../../features/favorites";
import { paths } from "../../routes";

type BooksTableProps = {
  books: FavoriteBook[];
  loading?: boolean;
  error?: Error | null;
  variant?: "books" | "favorites";
};

export const BooksTable: React.FC<BooksTableProps> = ({
  books,
  loading,
  error,
  variant = "books",
}) => {
  if (loading) return <div>Lädt Bücher</div>;
  if (error) return <div>{error.message}</div>;
  if (books.length === 0) return <div>Keine Búcher gefunden.</div>;

  const renderedBooks = books.map((book) => (
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
              <th>Title</th>
              <th>ISBN</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>&nbsp;</th>
            </tr>
          </thead>

          <tbody>{renderedBooks}</tbody>
        </table>
      </div>
    </section>
  );
};
