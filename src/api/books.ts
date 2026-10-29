import type { Book } from "../types";

const BASE_URL = "http://localhost:4730";

export const getBooks = async (
  signal?: AbortSignal,
): Promise<Book[]> => {
  const res = await fetch(`${BASE_URL}/books`, { signal });

  if (!res.ok) {
    throw new Error("Es konnten keine Bücher geladen werden.");
  }

  return res.json();
};