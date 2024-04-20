import { FC, ReactNode, useState } from "react";
import { SidebarContext } from "../context/sidebar";

interface IProps {
  children: ReactNode;
}

export const SidebarProvider: FC<IProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);

  const sidebarOption = {
    isOpen,
    openSidebar,
    closeSidebar,
  };
  return (
    <SidebarContext.Provider value={sidebarOption}>
      {children}
    </SidebarContext.Provider>
  );
};
