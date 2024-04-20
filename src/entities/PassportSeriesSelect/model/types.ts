export enum EPassportSeries {
  KGZ = "KGZ",
  AN = "AN",
  KPX = "KP-X",
  ID = "ID",
}

export type TPassportSeries = {
  value: EPassportSeries;
  label: EPassportSeries;
};
