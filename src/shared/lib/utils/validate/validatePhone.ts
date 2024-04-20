import { TValidatePhone } from "./types";

export const validatePhone: TValidatePhone = (
  value: string,
  errorMessages: { incorrectPhone: string; requiredPhone: string }
) => {
  let isValid = false;
  let operatorCode = "";
  const codes: number[] = [
    500, 501, 502, 504, 505, 507, 508, 509, 700, 701, 702, 703, 704, 705, 706,
    707, 708, 709, 550, 551, 552, 553, 554, 555, 556, 557, 559, 770, 771, 772,
    773, 774, 776, 777, 778, 779, 220, 221, 222, 223, 224, 225, 226, 227, 228,
  ];
  if (value) {
    operatorCode = value.slice(5, 8);
  }

  if (operatorCode.length === 3) {
    isValid = codes.includes(+operatorCode);
  } else {
    return Promise.resolve();
  }
  if (!isValid) {
    return Promise.reject(errorMessages.incorrectPhone);
  }

  if (value && isValid) {
    return Promise.resolve();
  } else if (!isValid && value) {
    return Promise.reject(errorMessages.incorrectPhone);
  }
  return Promise.reject(errorMessages.requiredPhone);
};
