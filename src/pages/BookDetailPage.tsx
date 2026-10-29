import { Link } from "react-router-dom";
import { paths } from "../routes/paths";

export const BookDetailPage = () => {
  return (
    <main className="container">
      <h1>
        Sapiens
        <br />
        <small>A Brief History of Humankind</small>
      </h1>

      <section className="row">
        <div className="column column-67">
          <h3>Abstract</h3>
          <p>
            One hundred thousand years ago, at least six human species inhabited
            the earth. Today there is just one. Us. Sapiens explores how an
            unremarkable ape became the ruler of planet Earth ...
          </p>

          <h4>Details</h4>
          <ul>
            <li>
              <strong>Author:</strong> Yuval Noah Harari
            </li>
            <li>
              <strong>Publisher:</strong> Harper
            </li>
            <li>
              <strong>Pages:</strong> 443
            </li>
          </ul>

          <Link to={paths.books} className="button button-outline">
            Back
          </Link>
        </div>

        <div className="column column-33">
          <img
            src="http://localhost:4730/covers/9780062316097.png"
            alt="Cover of Sapiens"
          />
        </div>
      </section>
    </main>
  );
};
