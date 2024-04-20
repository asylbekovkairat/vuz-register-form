import { Button, Flex } from "antd";
import styles from "./sider.module.css";
import { useSidebar } from "@/app/providers/SideBarProvider";
import { useTranslation } from "react-i18next";
import { Navigation } from "@/shared/ui/Navigation";

const Sidebar = () => {
  const { isOpen, closeSidebar } = useSidebar();
  const { t } = useTranslation("Header");

  return (
    <aside
      className={`${styles.sidebar} ${isOpen ? styles.active : ""}`}
      onClick={closeSidebar}
    >
      <section
        className={`${styles.content} ${isOpen ? styles.active : ""}`}
        onClick={(event) => event.stopPropagation()}
      >
        <Flex vertical justify="flex-start">
          <Flex justify="space-between">
            <img
              src="https://2020.edu.gov.kg/img/logo2.png"
              alt="logo"
              height={45}
              width={100}
            />

            <button
              className="outline-none border-none bg-transparent"
              onClick={closeSidebar}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="#234182"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 18.1818L18.1818 0L20 1.81818L1.81818 20L0 18.1818Z"
                  fill="#234182"
                ></path>
                <path
                  d="M0 1.81818L1.81818 0L20 18.1818L18.1818 20L0 1.81818Z"
                  fill="#234182"
                ></path>
              </svg>
            </button>
          </Flex>

          <Navigation cls="my-6" vertical />
          <Button
            className="flex items-center gap-1 w-full h-auto bg-white border rounded-[4px] px-6 py-2 outline-none border-none hover:!bg-white"
            type="default"
          >
            <span>
              <svg
                className="svg-inline--fa fa-sign-in-alt fa-w-16 w-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fa"
                data-icon="sign-in-alt"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                data-fa-i2svg=""
              >
                <path
                  fill="#ef7f1a"
                  d="M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"
                ></path>
              </svg>
            </span>
            <span className="text-[#ef7f1a] text-[16px] hover:underline leading-6">
              {t("login")}
            </span>
          </Button>
        </Flex>
      </section>
    </aside>
  );
};

export default Sidebar;
