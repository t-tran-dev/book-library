import type { FavoriteBook } from "./favoritesTypes";
import {
  isRecord,
  isString,
  isOptionalString,
} from "../../utils/validatorHelpers";

export const isFavoriteBook = (value: unknown): value is FavoriteBook => {
  if (!isRecord(value)) {
    return false;
  }

  return (
    isString(value.isbn) &&
    isString(value.title) &&
    isOptionalString(value.author) &&
    isOptionalString(value.publisher)
  );
};
