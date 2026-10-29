import { useFetchBooks } from "../hooks";
import { BooksTable } from "../components/booksTable";

export function BooksPage() {
  const { error, loading, books } = useFetchBooks();

  return (
    <main className="container">
      <h2>{books.length} Books displayed</h2>

      <section className="row filter-search">
        <form className="column" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="search">Search by Title</label>
          <input type="text" id="search" />
        </form>

        <form
          className="column column-33"
          onSubmit={(event) => event.preventDefault()}
        >
          <label htmlFor="by-publisher">Filter by Publisher</label>
          <select id="by-publisher">
            <option value="-">-</option>
            <option value="Bloomsbury">Bloomsbury</option>
            <option value="Ace Books">Ace Books</option>
          </select>
        </form>
      </section>

      <BooksTable books={books} loading={loading} error={error} />
    </main>
  );
}
