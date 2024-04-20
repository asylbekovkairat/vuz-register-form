import { useAtomValue } from "jotai";
import { passportSeriesAtom } from "./atom";

export const usePassportSeries = () => {
  return useAtomValue(passportSeriesAtom);
};
