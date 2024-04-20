import { AxiosError } from "axios";
import { TRegister } from "./auth.types";
import { vuzAPI } from "@/shared/api";
import { IAbiturient } from "../../types/types";

export const register: TRegister = async (abiturient: IAbiturient) => {
  try {
    const response = await vuzAPI
      .post("/register/abiturient", {
        ...abiturient,
      })
      .then((data) => data);
    console.log("response", response);

    return response;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      throw new Error(String(error));
    }
  }
};
