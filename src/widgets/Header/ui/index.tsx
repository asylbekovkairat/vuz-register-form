import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, Flex, Grid } from "antd";
import { FC, ReactNode } from "react";
import { LangSwitcher } from "@/widgets/LangSwitcher";
import { BreadCrumbs } from "@/widgets/BreadCrumbs";
import { useSidebar } from "@/app/providers/SideBarProvider";
import { Navigation } from "@/shared/ui/Navigation";

interface HeaderProps {
  content: ReactNode;
}

const { useBreakpoint } = Grid;

const Header: FC<HeaderProps> = ({ content }) => {
  const { t } = useTranslation("Header");
  const screens = useBreakpoint();
  const { openSidebar } = useSidebar();

  return (
    <>
      <header className={`flex w-full bg-[#234182] min-w-full`}>
        <section className="wrapperContainer w-full flex justify-between gap-9 items-center">
          <Flex align="flex-start" gap={35}>
            <Link to="/">
              <img
                src="https://2020.edu.gov.kg/img/logo2.png"
                alt="logo"
                height={45}
                width={150}
              />
            </Link>
            <LangSwitcher />
          </Flex>

          <Flex
            align="center"
            gap={30}
            className={`${!screens.lg ? "hidden" : "flex"}`}
          >
            <Navigation vertical={false} />
            <Button
              className="flex items-center gap-1 bg-[#ef7f1a] border rounded-[4px] px-6 py-2 outline-none border-none hover:!bg-[#ef7f1a]"
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
                    fill="white"
                    d="M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"
                  ></path>
                </svg>
              </span>
              <span className="text-white text-[16px] hover:underline leading-6">
                {t("login")}
              </span>
            </Button>
          </Flex>
          <button
            className={`${
              !screens.lg ? "block" : "hidden"
            } outline-none border-none bg-transparent`}
            onClick={openSidebar}
          >
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="20" height="2" fill="#EF7F1A"></rect>
              <rect y="8" width="20" height="2" fill="white"></rect>
              <rect y="16" width="20" height="2" fill="#EF7F1A"></rect>
            </svg>
          </button>
        </section>
      </header>
      <main className="rounded-t-none rounded-b-[40px] w-full bg-[#234182] relative bottom-[1px]">
        <div className="wrapperContainer h-auto  rounded-xl flex flex-col ">
          <BreadCrumbs />
          {content}
        </div>
      </main>
    </>
  );
};

export default Header;
