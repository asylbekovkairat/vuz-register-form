import { FC, useEffect, useState } from "react";

type TKyrgyzLetter = "ө" | "ү" | "ң" | "Ө" | "Ү" | "Ң" | "";

interface IProps {
  onChange: (value: string) => void;
  value: string | undefined;
}

const KyrgyzLetters: FC<IProps> = ({ onChange, value }) => {
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [clickedLetter, setClickedLetter] = useState<TKyrgyzLetter>("");

  const handleUppercase = () => setIsUpperCase((prev) => !prev);
  const handleClick = (letter: TKyrgyzLetter): void => {
    setClickedLetter(letter);
    onChange(`${value + letter}`);

    setTimeout(() => setClickedLetter(""), 100);
  };

  useEffect(() => {
    if (!value) {
      setIsUpperCase(true);
    } else {
      setIsUpperCase(false);
    }
  }, [value]);

  return (
    <div className="flex justify-between px-2 items-center gap-2 rounded-r-md rounded-l-none border-[#d9d9d9] border h-[40px] select-none">
      <span
        className={`text-lg font-bold cursor-pointer ${
          isUpperCase ? "uppercase" : "lowercase"
        } ${clickedLetter === "ө" || clickedLetter === "Ө" ? "mt-1" : "mt-0"}`}
        onClick={() => handleClick(isUpperCase ? "Ө" : "ө")}
      >
        ө
      </span>
      <span
        className={`text-lg font-bold cursor-pointer ${
          isUpperCase ? "uppercase" : "lowercase"
        } ${clickedLetter === "ү" || clickedLetter === "Ү" ? "mt-1" : "mt-0"}`}
        onClick={() => handleClick(isUpperCase ? "Ү" : "ү")}
      >
        ү
      </span>
      <span
        className={`text-lg font-bold cursor-pointer ${
          isUpperCase ? "uppercase" : "lowercase"
        } ${clickedLetter === "ң" || clickedLetter === "Ң" ? "mt-1" : "mt-0"}`}
        onClick={() => handleClick(isUpperCase ? "Ң" : "ң")}
      >
        ң
      </span>
      <span className="w-[15px]" onClick={handleUppercase}>
        <img
          src="https://2020.edu.gov.kg/spuz/register/assets/arrow.svg"
          alt=""
        />
      </span>
    </div>
  );
};

export default KyrgyzLetters;
