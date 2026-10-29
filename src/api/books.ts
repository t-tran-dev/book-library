import {
  isBook,
  QUERY_KEY,
  type Book,
  type BooksQueryParams,
  type GetBooksOptions,
} from "./types";

const BASE_URL = "http://localhost:4730";

export const getBooks = async ({
  signal,
  ...queryProps
}: GetBooksOptions = {}): Promise<Book[]> => {
  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(queryProps)) {
    const normalizedValue = value?.trim();

    if (normalizedValue) {
      searchParams.set(
        QUERY_KEY[key as keyof BooksQueryParams],
        normalizedValue,
      );
    }
  }

  const queryString = searchParams.toString();
  const params = queryString ? `?${queryString}` : "";

  const res = await fetch(`${BASE_URL}/books${params}`, { signal });

  if (!res.ok) {
    console.error(
      `[getBooks] GET /books failed: ${res.status} ${res.statusText}`,
    );

    throw new Error(
      "Die Bücher konnten nicht geladen werden. Bitte versuche es erneut.",
    );
  }

  const data: unknown = await res.json();

  if (!Array.isArray(data)) {
    console.error("[getBooks] Invalid response: expected an array.");

    throw new Error("Der Server hat eine ungültige Bücherliste zurückgegeben.");
  }

  const books = data.filter(isBook);
  const invalidCount = data.length - books.length;

  if (invalidCount > 0) {
    console.warn(`[getBooks] Skipped ${invalidCount} invalid book entries.`);
  }

  return books;
};
