import { checkIsNumber, checkPins } from "@/shared/lib/utils/validate";

export const checkPin = (
  _: unknown,
  value: string,
  handleChange: (correctValue: string) => void,
  errorMessage: string
) => {
  const number = checkIsNumber(value);
  const correctValue = checkPins(number);

  handleChange(correctValue);
  if (!correctValue || correctValue.length < 14) {
    return Promise.reject(errorMessage);
  }

  return Promise.resolve();
};
