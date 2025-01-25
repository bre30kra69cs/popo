export const guardBoolean = (value: unknown): value is boolean => {
  return typeof value === "boolean";
};
