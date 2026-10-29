import { Link, generatePath } from "react-router-dom";
import { paths } from "../routes/paths";
import type { Book } from "../types";

type BookTableProps = {
  books: Book[];
  loading: boolean;
  error: Error | null;
};

export const BooksTable: React.FC<BookTableProps> = ({
  books,
  loading,
  error,
}) => {
  if (loading) return <div>Loading Books...</div>;
  if (error) return <div>{error.message}</div>;
  if (books.length === 0) return <div>No books found.</div>;

  const renderedBooks = books.map((book) => (
    <tr key={book.id}>
      <td>{/* Favorite button goes here */}</td>
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
