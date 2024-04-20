import { Select } from "antd";
import { usePassportSeries } from "../model";
import { EPassportSeries } from "../model/types";
import styles from "./passport-series.module.scss";
import { FC } from "react";

interface IProps {
  onPassportSeriesChange: (value: EPassportSeries) => void;
}

const PassportSeriesSelect: FC<IProps> = ({ onPassportSeriesChange }) => {
  const passportSeries = usePassportSeries();

  return (
    <Select
      className={`h-[40px] !w-1/4 ${styles.select}`}
      labelInValue
      options={passportSeries}
      onChange={({ value }: { value: EPassportSeries }) =>
        onPassportSeriesChange(value)
      }
      placeholder="ID"
      defaultValue={{ value: EPassportSeries.AN }}
    />
  );
};

export default PassportSeriesSelect;
