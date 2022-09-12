import React from "react";

interface DrawerProps {
  isOpen: boolean;
  children: React.ReactNode[] | React.ReactNode;
}

const Drawer = ({ children }: DrawerProps) => {
  return <div>{children}</div>;
};

export default Drawer;
