export const validationUrlPath = (value: string): boolean => {
  return /^\/\d+$/.test(value);
};