import { useState } from "react";
import { BooksTable } from "../components/booksTable";
import { useFetchBooks } from "../hooks";

export function BooksPage() {
  const [query, setQuery] = useState<string>("");
  const { error, loading, books } = useFetchBooks(query);

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
          <select id="by-publisher">
            <option value="-">-</option>
            <option value="Bloomsbury">Bloomsbury</option>
            <option value="Ace Books">Ace Books</option>
          </select>
        </div>
      </section>

      <BooksTable books={books} loading={loading} error={error} />
    </main>
  );
}
