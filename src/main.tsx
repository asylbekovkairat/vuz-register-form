import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./app/styles/index.css";
import "./shared/config/i18n";
import { ConfigProvider } from "antd";
import ru_RU from "antd/lib/locale/ru_RU";
import { SidebarProvider } from "./app/providers/SideBarProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ConfigProvider locale={ru_RU}>
    <BrowserRouter>
      <SidebarProvider>
        <App />
      </SidebarProvider>
    </BrowserRouter>
  </ConfigProvider>
);
