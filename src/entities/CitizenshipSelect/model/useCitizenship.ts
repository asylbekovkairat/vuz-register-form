import { useAtomValue } from "jotai";
import { citizenshipAtom } from "./atom";

export const useCitizenship = () => {
  return useAtomValue(citizenshipAtom);
};
