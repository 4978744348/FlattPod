export const isValidUrlPath = (value: string): boolean => {
  return !/[^a-zA-Z0-9\\/]/.test(value);
};

export const isValidPostBody = (...body: string[]): boolean => {
  for(let i = 0; i < body.length; i ++) {
    if (body[i] === undefined || /[^a-zA-Z0-9@.]/.test(body[i])) {
      return false;
    }
  }
  return true;
};