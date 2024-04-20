import { Select } from "antd";
import { useCitizenship } from "../model";
import { useTranslation } from "react-i18next";
import { FC } from "react";

interface IProps {
  onCitizenshipChange: (value: boolean) => void;
}

export const CitizenshipSelect: FC<IProps> = ({ onCitizenshipChange }) => {
  const utilsTranslate = useTranslation("utils");

  const citizenships = useCitizenship();

  const options = citizenships.map(({ label, value }) => ({
    value,
    label: (
      <span>
        {label === "anotherCountry" ? utilsTranslate.t(label) : label}
      </span>
    ),
  }));

  return (
    <Select
      className="h-[40px]"
      labelInValue
      options={options}
      onChange={({ value }: { value: boolean }) => onCitizenshipChange(value)}
      placeholder="Кыргызстан"
    />
  );
};
