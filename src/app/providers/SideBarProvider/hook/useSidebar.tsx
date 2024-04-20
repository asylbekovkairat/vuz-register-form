import { useContext } from "react";
import { SidebarContext } from "../context/sidebar";

export const useSidebar = () => {
  return useContext(SidebarContext);
};
