import React from "react";
import { TSidebarOption } from "../types/types";

export const SidebarContext = React.createContext<TSidebarOption>({
  isOpen: false,
  openSidebar: () => {},
  closeSidebar: () => {},
});
