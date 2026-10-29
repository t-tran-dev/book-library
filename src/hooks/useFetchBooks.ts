import { useEffect, useState } from "react";
import type { Book } from "../types";
import { getBooks } from "../api/books";

export const useFetchBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const fetchBooks = async () => {
      setLoading(true);
      setError(null);

      try {
        const booksData = await getBooks(controller.signal);

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

    fetchBooks();
    return () => {
      controller.abort();
    };
  }, []);

  return { error, loading, books };
};
