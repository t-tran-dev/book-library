import { useParams } from "react-router-dom";
import { BookDetails } from "../components/bookDetails";

export const BookDetailPage = () => {
  const { isbn } = useParams<{ isbn: string }>();

  if (!isbn) {
    return <div>No ISBN provided.</div>;
  }

  return (
    <main className="container">
      <BookDetails key={isbn} isbn={isbn} />
    </main>
  );
};
