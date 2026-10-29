import { Link } from "react-router-dom";
import { useFetchBook } from "../hooks";
import { paths } from "../routes";

type BookDetailsProps = {
  isbn: string;
};

export const BookDetails = ({ isbn }: BookDetailsProps) => {
  const { book, loading, error } = useFetchBook({ isbn });

  if (loading) return <div>Loading book...</div>;
  if (error) return <div>{error.message}</div>;
  if (!book) return <div>Book not found.</div>;

  return (
    <>
      <h1>
        {book.title}
        {book.subtitle && (
          <>
            <br />
            <small>{book.subtitle}</small>
          </>
        )}
      </h1>

      <section className="row">
        <div className="column column-67">
          <h3>Abstract</h3>
          <p>{book.abstract ?? "No abstract available."}</p>

          <h4>Details</h4>
          <ul>
            <li>
              <strong>Author:</strong> {book.author ?? "—"}
            </li>
            <li>
              <strong>Publisher:</strong> {book.publisher ?? "—"}
            </li>
            <li>
              <strong>Pages:</strong> {book.numPages ?? "—"}
            </li>
          </ul>

          <Link to={paths.books} className="button button-outline">
            Back
          </Link>
        </div>

        <div className="column column-33">
          {book.cover && (
            <img src={book.cover} alt={`Cover of ${book.title}`} />
          )}
        </div>
      </section>
    </>
  );
};
