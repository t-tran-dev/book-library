import "./App.css";

function App() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="row">
            <div className="column">
              <p className="logo">Book.Library</p>
            </div>

            <div className="column">
              <nav className="mainnav">
                <a href="/" className="mainnav-link mainnav-link--active">
                  Books
                </a>
                <a href="/favorites" className="mainnav-link">
                  Favorites <span className="mainnav-number">0</span>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <main className="container">
        <h2>Book Library</h2>
      </main>
    </>
  );
}
export default App;
