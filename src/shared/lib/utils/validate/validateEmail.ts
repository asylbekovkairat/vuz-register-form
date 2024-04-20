export const isEmail = (input: string): boolean => {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(input);
};
