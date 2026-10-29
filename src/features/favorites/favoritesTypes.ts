import type { Book } from "../../api";

export type FavoriteBook = Pick<
  Book,
  "isbn" | "title" | "author" | "publisher"
>;
