import { useState } from "react";
import { BooksTable } from "../components/booksTable";
import { useFetchBooks } from "../hooks";

const isNonEmptyPublisher = (
  publisher: string | undefined,
): publisher is string => publisher !== undefined && publisher.trim() !== "";

export function BooksPage() {
  const [query, setQuery] = useState<string>("");
  const [publisher, setPublisher] = useState("");
  const { error, loading, books } = useFetchBooks({ query, publisher });

  const publishers = [
    ...new Set(books.map((book) => book.publisher).filter(isNonEmptyPublisher)),
  ].sort((a, b) => a.localeCompare(b));

  const allOption = (
    <option key="" value="">
      All publishers
    </option>
  );

  const publisherOptions = [allOption].concat(
    publishers.map((publisher) => (
      <option key={publisher} value={publisher}>
        {publisher}
      </option>
    )),
  );

  return (
    <main className="container">
      <h2>{books.length} Books displayed</h2>

      <section className="row filter-search">
        <div className="column">
          <label htmlFor="search">Search by Title</label>
          <input
            type="search"
            id="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>

        <div className="column column-33">
          <label htmlFor="by-publisher">Filter by Publisher</label>
          <select
            id="by-publisher"
            value={publisher}
            onChange={(event) => setPublisher(event.target.value)}
          >
            {publisherOptions}
          </select>
        </div>
      </section>

      <BooksTable books={books} loading={loading} error={error} />
    </main>
  );
}
