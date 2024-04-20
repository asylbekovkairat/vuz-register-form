type TErrorMessage = { incorrectPhone: string; requiredPhone: string };

export type TValidatePhone = (
  value: string,
  errorMessages: TErrorMessage
) => Promise<string | void>;
