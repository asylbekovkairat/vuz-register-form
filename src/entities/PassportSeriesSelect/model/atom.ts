import { atom } from "jotai";
import { TPassportSeries } from "./types";
import { defaultPassportSeries } from "./consts";

export const passportSeriesAtom = atom<TPassportSeries[]>(
  defaultPassportSeries
);
