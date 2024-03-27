type CloseModalFunction = () => void;

export interface ModalProps {
  closeModal: CloseModalFunction;
}

export interface Icon {
  icon: string;
  alt: string;
  className: string;
}
