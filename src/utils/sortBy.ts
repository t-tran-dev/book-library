type SortDirection = "asc" | "desc";

export const sortBy = <T, K extends keyof T>(
  items: T[],
  key: K,
  direction: SortDirection = "asc",
): T[] => {
  return items.toSorted((a, b) => {
    const valueA = a[key];
    const valueB = b[key];

    // Always keep null and undefined at the bottom
    if (valueA == null && valueB == null) return 0;
    if (valueA == null) return 1;
    if (valueB == null) return -1;

    let comparison = 0;

    if (typeof valueA === "string" && typeof valueB === "string") {
      comparison = valueA.localeCompare(valueB);
    } else if (
      typeof valueA === "number" &&
      typeof valueB === "number"
    ) {
      comparison = valueA - valueB;
    }

    return direction === "asc" ? comparison : -comparison;
  });
};