import { Link } from "react-router-dom";
import { Header } from "../../../widgets/Header";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation("pages");

  return (
    <>
      <Header content={<Link to={"/register"}>{t("register")}</Link>} />
    </>
  );
};

export default MainPage;
