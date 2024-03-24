import { ReactNode } from "react";

type CloseModalFunction = () => void;

export interface ModalProps {
  closeModal: CloseModalFunction;
}

interface IBase {
  href: string;
}

export interface INavItem extends IBase {
  title: string;
}

export interface INavItemProps extends IBase {
  children: ReactNode;
}
