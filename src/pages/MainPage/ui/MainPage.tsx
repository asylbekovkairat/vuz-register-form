import { Link } from "react-router-dom";
import { Header } from "../../../widgets/Header";

const MainPage = () => {
  return (
    <>
      <Header content={<Link to={"/register"}>Регистрация</Link>} />
    </>
  );
};

export default MainPage;
