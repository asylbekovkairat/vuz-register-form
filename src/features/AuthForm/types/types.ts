import { Dayjs } from "dayjs";

export interface IAbiturient {
  surname: string;
  name: string;
  patronymic: string;
  pin: string;
  citizenship: number;
  genderId: number;
  serialPas: string;
  numberPas: string;
  dateGivenPas: Dayjs;
  sertificate: string;
  phoneNumber: string;
  email: string;
  code: string;
  password: string;
  confirmPassword: string;
}
