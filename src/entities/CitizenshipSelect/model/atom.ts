import { defaultCitizenship } from "./consts";
import { TCitizenship } from "./types";
import { atom } from "jotai";

export const citizenshipAtom = atom<TCitizenship[]>(defaultCitizenship);
