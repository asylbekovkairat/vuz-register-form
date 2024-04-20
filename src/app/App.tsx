import { Suspense } from "react";
import { Sider } from "@/widgets/SIdebar";
import { Spin } from "antd";
import { App as AntdApp } from "antd";
import { AppRouter } from "Providers/router";

function App() {
  return (
    <Suspense
      fallback={
        <div className="w-full h-full">
          <Spin />
        </div>
      }
    >
      <div className="flex flex-col items-center m-auto h-[100vh]">
        <Sider />
        <AntdApp>
          <AppRouter />
        </AntdApp>
      </div>
    </Suspense>
  );
}

export default App;
