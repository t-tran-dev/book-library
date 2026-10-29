import { useEffect, useState } from "react";
import { type Book, getBook } from "../api";

type UseFetchBookParams = {
  isbn: string;
};

export const useFetchBook = ({ isbn }: UseFetchBookParams) => {
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchBook = async () => {
      try {
        const bookData = await getBook({
          isbn,
          signal: controller.signal,
        });

        if (!controller.signal.aborted) {
          setBook(bookData);
        }
      } catch (error) {
        if (controller.signal.aborted) return;

        setError(
          error instanceof Error
            ? error
            : new Error("Das Buch konnte nicht geladen werden."),
        );
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    void fetchBook();

    return () => controller.abort();
  }, [isbn]);

  return { book, loading, error };
};