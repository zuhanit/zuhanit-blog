import React, {
  ReactElement,
  ReactNode,
  RefObject,
  useEffect,
  useRef,
  useState,
} from "react";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";

interface DrawerProps {
  setDrawer: (t: any) => void;
  isOpen: boolean;
  children: React.ReactNode[] | React.ReactNode;
}

const Drawer = ({ children = [], setDrawer, isOpen }: DrawerProps) => {
  return <div></div>;
};

export default Drawer;
