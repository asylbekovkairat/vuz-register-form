export const checkIsNumber = (value: string) => {
  const input = String(value?.trim());
  const arrInput = input.split("");

  if (arrInput.length === 0) {
    return "";
  }

  return input.replace(/[^0-9.]/g, "").replace(/(\..*?)\..*/g, "$1");
};
