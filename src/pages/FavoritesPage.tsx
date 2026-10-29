const sampleFavorites = [
  {
    isbn: "9780747532699",
    title: "Harry Potter and the Philosopher’s Stone",
    author: "J. K. Rowling",
    publisher: "Bloomsbury",
  },
  {
    isbn: "9780441172719",
    title: "Dune",
    author: "Frank Herbert",
    publisher: "Ace Books",
  },
];

export const FavoritesPage = () => {
  return (
    <main className="container">
      <h2>{sampleFavorites.length} Favorites on your list</h2>

      <section className="row filter-search">
        <div className="column">
          <label htmlFor="search">Search</label>
          <input type="text" id="search" />
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

            <tbody>
              {sampleFavorites.map((book) => (
                <tr key={book.isbn}>
                  <td>
                    <button
                      type="button"
                      className="button button-clear fav-btn"
                      aria-label={`Remove ${book.title} from favorites`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="fav"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </td>
                  <td>{book.title}</td>
                  <td>{book.isbn}</td>
                  <td>{book.author}</td>
                  <td>{book.publisher}</td>
                  <td>
                    <a href={`/books/${book.isbn}`} className="button">
                      Detail
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};
