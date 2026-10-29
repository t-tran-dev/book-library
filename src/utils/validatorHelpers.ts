export type Validator<T> = (value: unknown) => value is T;

export const isRecord = (
  value: unknown,
): value is Record<string, unknown> =>
  typeof value === "object" &&
  value !== null &&
  !Array.isArray(value);

export const isString = (value: unknown): value is string =>
  typeof value === "string";

export const isNumber = (value: unknown): value is number =>
  typeof value === "number" && Number.isFinite(value);

export const isNonNegativeNumber = (value: unknown): value is number =>
  isNumber(value) && value >= 0;

export const isNonNegativeInteger = (value: unknown): value is number =>
  isNonNegativeNumber(value) && Number.isSafeInteger(value);

export const isStringArray = (value: unknown): value is string[] =>
  Array.isArray(value) && value.every(isString);

export const optional =
  <T>(validator: Validator<T>) =>
  (value: unknown): value is T | undefined =>
    value === undefined || validator(value);

export const nullable =
  <T>(validator: Validator<T>) =>
  (value: unknown): value is T | null =>
    value === null || validator(value);

export const isOptionalString = optional(isString);
export const isOptionalNullableString = optional(nullable(isString));
export const isOptionalNumber = optional(isNumber);
export const isOptionalNonNegativeNumber = optional(isNonNegativeNumber);
export const isOptionalNonNegativeInteger = optional(isNonNegativeInteger);
export const isOptionalStringArray = optional(isStringArray);