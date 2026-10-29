import type { Book, Currency } from "./types";
import {
  isRecord,
  isString,
  isOptionalString,
  isOptionalNullableString,
  isOptionalNumber,
  isOptionalNonNegativeNumber,
  isOptionalNonNegativeInteger,
  isOptionalStringArray,
} from "../../utils";

export const isCurrency = (value: unknown): value is Currency =>
  value === "EUR" ||
  value === "USD" ||
  value === "GBP" ||
  value === "CNY" ||
  value === "RUB";

export const isBook = (value: unknown): value is Book => {
  if (!isRecord(value)) {
    return false;
  }

  const hasRequiredProperties =
    isString(value.id) &&
    isString(value.isbn) &&
    isString(value.title) &&
    isCurrency(value.currency) &&
    isString(value.createdAt) &&
    isString(value.updatedAt);

  const hasOptionalProperties =
    isOptionalString(value.subtitle) &&
    isOptionalString(value.abstract) &&
    isOptionalString(value.author) &&
    isOptionalString(value.publisher) &&
    isOptionalNonNegativeNumber(value.price) &&
    isOptionalNonNegativeInteger(value.numPages) &&
    isOptionalString(value.cover) &&
    isOptionalNumber(value.userId) &&
    isOptionalNullableString(value.publishedAt) &&
    isOptionalStringArray(value.coAuthors) &&
    isOptionalNullableString(value.predecessorIsbn) &&
    isOptionalNullableString(value.successorIsbn);

  return hasRequiredProperties && hasOptionalProperties;
};
