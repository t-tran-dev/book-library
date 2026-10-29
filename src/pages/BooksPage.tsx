import { useState } from "react";
import { BooksTable, BooksTableToolbar } from "../components/booksTable";
import { useFetchBooks } from "../hooks";

export function BooksPage() {
  const [query, setQuery] = useState<string>("");
  const [publisher, setPublisher] = useState<string>("");
  const { error, loading, books } = useFetchBooks({ query, publisher });

  return (
    <main className="container">
      <h2>{books.length} Books displayed</h2>
      <BooksTableToolbar
        books={books}
        publisher={publisher}
        query={query}
        updatePublisher={setPublisher}
        updateQuery={setQuery}
      />
      <BooksTable books={books} loading={loading} error={error} />
    </main>
  );
}
