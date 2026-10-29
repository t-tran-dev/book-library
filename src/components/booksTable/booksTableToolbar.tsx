import type { Book } from "../../api";

const isNonEmptyPublisher = (
  publisher: string | undefined,
): publisher is string => publisher !== undefined && publisher.trim() !== "";

type BooksTableToolbarProps = {
  books: Book[];
  publisher: string;
  query: string;
  updatePublisher: (publisher: string) => void;
  updateQuery: (query: string) => void;
};

export const BooksTableToolbar: React.FC<BooksTableToolbarProps> = ({
  books,
  publisher,
  query,
  updatePublisher,
  updateQuery,
}) => {
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
    <section className="row filter-search">
      <div className="column">
        <label htmlFor="search">Search by Title</label>
        <input
          type="search"
          id="search"
          value={query}
          onChange={(event) => updateQuery(event.target.value)}
        />
      </div>

      <div className="column column-33">
        <label htmlFor="by-publisher">Filter by Publisher</label>
        <select
          id="by-publisher"
          value={publisher}
          onChange={(event) => updatePublisher(event.target.value)}
        >
          {publisherOptions}
        </select>
      </div>
    </section>
  );
};
