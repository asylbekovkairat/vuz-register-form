import { routeConfig } from "Shared/config/routeConfig";
import { Spin } from "antd";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => (
  <Suspense
    fallback={
      <div className="w-full h-[100vh] flex items-center justify-center">
        <Spin />
      </div>
    }
  >
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => {
        return (
          <Route
            key={path}
            path={path}
            element={
              <Suspense
                fallback={
                  <div className="w-full h-[100vh] flex items-center justify-center">
                    <Spin />
                  </div>
                }
              >
                {element}
              </Suspense>
            }
          />
        );
      })}
    </Routes>
  </Suspense>
);

export default AppRouter;
