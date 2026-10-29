import { useEffect, useState } from "react";
import { type Book, getBooks } from "../api";
import type { BooksQueryParams } from "../api";

const DEBOUNCE_DELAY = 300;

export const useFetchBooks = ({ query, publisher }: BooksQueryParams) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchBooks = async () => {
      setLoading(true);
      setError(null);

      try {
        const booksData = await getBooks({
          query,
          publisher,
          signal: controller.signal,
        });

        if (!controller.signal.aborted) {
          setBooks(booksData);
        }
      } catch (error) {
        if (controller.signal.aborted) return;

        setError(
          error instanceof Error
            ? error
            : new Error("Die Bücher konnten nicht geladen werden."),
        );
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };
    const debounceTimer = setTimeout(fetchBooks, DEBOUNCE_DELAY);
    return () => {
      clearTimeout(debounceTimer);
      controller.abort();
    };
  }, [query, publisher]);

  return { error, loading, books };
};
