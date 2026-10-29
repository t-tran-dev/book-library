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

export type RequestOptions = {
  signal?: AbortSignal;
};

export type BooksQueryParams = {
  query?: string;
  publisher?: string;
};

export type BookQueryParams = {
  isbn: string;
};

export type GetBooksOptions = BooksQueryParams & RequestOptions;

export type GetBookOptions = BookQueryParams & RequestOptions;

export const QUERY_KEY = {
  query: "q",
  publisher: "publisher",
} satisfies Record<keyof BooksQueryParams, string>;
