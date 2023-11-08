export const trimTrailingSlashes = (text: string) => {
  return text.replace(/\/+$/, '');
};
