type TErrorMessages = {
  requiredPIN: string;
  genderError: string;
  dayOfBirthError: string;
  monthOfBirthError: string;
  yearOfBirthError: string;
};

export type TValidatePIN = (
  value: string,
  errorMessages: TErrorMessages
) => Promise<string | void> | undefined;
