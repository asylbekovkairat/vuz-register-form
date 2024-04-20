import { AxiosResponse } from "axios";
import { IAbiturient } from "../../types/types";

export type TRegister = (
  abiturient: IAbiturient
) => Promise<AxiosResponse<IAbiturient, unknown> | undefined>;
