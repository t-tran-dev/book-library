import type { Currency } from "../api";

export const formatPrice = (
  price: number,
  currency: Currency,
  locale = "en-US",
): string => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(price);
};
