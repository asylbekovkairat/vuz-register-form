import { Breadcrumb } from "antd";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

const Separator = () => <span className="text-[#4267b7]">/</span>;

const BreadCrumbs = () => {
  const location = useLocation();
  const { t } = useTranslation("pages");
  const { pathname } = location;
  const pathnames = pathname.split("/").filter((item) => item);

  const renderBreadcrumbs = useMemo(
    () =>
      pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;
        return isLast ? (
          <Breadcrumb.Item key={index} className="text-[#4267b7]">
            {t(name)}
          </Breadcrumb.Item>
        ) : (
          <Breadcrumb.Item key={index}>
            <Link to={`${routeTo}`}>{t(name)}</Link>
          </Breadcrumb.Item>
        );
      }),
    [pathnames]
  );

  return (
    <>
      <div>
        <Breadcrumb separator={<Separator />}>
          {pathnames.length > 0 && (
            <Breadcrumb.Item>
              <Link
                className="!text-[#ef7f1a] underline transition-all duration-200 ease-in-out hover:!bg-transparent hover:!text-white hover:underline"
                to={"/"}
              >
                {t("mainPage")}
              </Link>
            </Breadcrumb.Item>
          )}
          {renderBreadcrumbs}
        </Breadcrumb>
      </div>
    </>
  );
};

export default BreadCrumbs;
