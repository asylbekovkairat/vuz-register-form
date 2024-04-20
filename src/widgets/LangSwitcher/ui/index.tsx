import { useTranslation } from "react-i18next";

const languages: Record<string, string> = {
  kg: "Русс",
  ru: "Кырг",
};

const LangSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "kg" : "ru");
  };
  return (
    <button
      className="text-white bg-[#4267b7] border rounded-[4px] px-4 py-2 hover:underline"
      onClick={toggleLanguage}
    >
      {languages[i18n.language]}
    </button>
  );
};

export default LangSwitcher;
