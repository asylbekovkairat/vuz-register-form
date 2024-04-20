import { Flex } from "antd";
import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface IProps {
  vertical: boolean;
  cls?: string;
}

const Navigation: FC<IProps> = ({ vertical, cls = "" }) => {
  const { t } = useTranslation("Navigation");

  return (
    <Flex
      className={cls}
      vertical={vertical}
      justify="space-between"
      align="flex-start"
      gap={15}
    >
      <Link
        className="font-normal text-white leading-6 hover:text-white"
        to="/"
      >
        {t("mainPage")}
      </Link>
      <Link className="font-normal text-white leading-6 hover:text-white" to="">
        {t("univercitites")}
      </Link>
      <Link className="font-normal text-white leading-6 hover:text-white" to="">
        {t("openData")}
      </Link>
      <Link className="font-normal text-white leading-6 hover:text-white" to="">
        {t("QA")}
      </Link>
    </Flex>
  );
};

export default Navigation;
