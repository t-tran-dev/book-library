export type Currency = "EUR" | "USD" | "GBP" | "CNY" | "RUB";

export type Book = {
  id: string;
  isbn: string;
  title: string;
  currency: Currency;
  createdAt: string;
  updatedAt: string;

  subtitle?: string;
  abstract?: string;
  author?: string;
  publisher?: string;
  price?: number;
  numPages?: number;
  cover?: string;
  userId?: number;
  publishedAt?: string | null;
  coAuthors?: string[];
  predecessorIsbn?: string | null;
  successorIsbn?: string | null;
};

export type BooksQueryParams = {
  query?: string;
};

export type GetBooksOptions = BooksQueryParams & {
  signal?: AbortSignal;
};

export const QUERY_KEY = {
  query: "q",
} satisfies Record<keyof BooksQueryParams, string>;