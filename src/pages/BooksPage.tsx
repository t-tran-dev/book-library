import { generatePath, Link } from "react-router-dom";
import { paths } from "../routes/paths";

export function BooksPage() {
  return (
    <main className="container">
      <h2>2 Books displayed</h2>

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
              <tr>
                <td>
                  <button
                    type="button"
                    className="button button-clear fav-btn"
                    aria-label="Remove Harry Potter from favorites"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="fav"
                      aria-hidden="true"
                    >
                      <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                    </svg>
                  </button>
                </td>
                <td>Harry Potter and the Philosopher’s Stone</td>
                <td>9780747532699</td>
                <td>J. K. Rowling</td>
                <td>Bloomsbury</td>
                <td>
                  <Link
                    to={generatePath(paths.bookDetail, {
                      isbn: "9780747532699",
                    })}
                    className="button"
                  >
                    Detail
                  </Link>
                </td>
              </tr>

              <tr>
                <td>
                  <button
                    type="button"
                    className="button button-clear fav-btn"
                    aria-label="Add Dune to favorites"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="fav"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  </button>
                </td>
                <td>Dune</td>
                <td>9780441172719</td>
                <td>Frank Herbert</td>
                <td>Ace Books</td>
                <td>
                  <Link
                    to={generatePath(paths.bookDetail, {
                      isbn: "9780441172719",
                    })}
                    className="button"
                  >
                    Detail
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
