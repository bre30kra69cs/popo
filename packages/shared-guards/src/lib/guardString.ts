export const guardString = (value: unknown): value is string => {
  return typeof value === "string";
};
