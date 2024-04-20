import { Header } from "@/widgets/Header";
import { Register } from "@/widgets/Register";
import { useTranslation } from "react-i18next";

const RegisterPage = () => {
  const { t } = useTranslation("RegisterPage");
  return (
    <>
      <Header
        content={
          <h2 className="text-[28px] font-bold text-white leading-10 mb-2">
            {t("title")}
          </h2>
        }
      />
      <section className="wrapperContainer">
        <Register />
      </section>
    </>
  );
};

export default RegisterPage;
