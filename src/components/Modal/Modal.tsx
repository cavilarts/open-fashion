import { FC, ReactNode } from "react";
import { GrClose } from "react-icons/gr";

interface ModalProps {
  children: ReactNode;
  handleClose: () => void;
}

export const Modal: FC<ModalProps> = ({ children, handleClose }) => (
  <div
    className={`absolute w-full h-full left-0 top-0 bg-white pt-4 pl-5 pr-10 transition-opacity`}
  >
    <button onClick={handleClose}>
      <GrClose title="close" />
    </button>
    {children}
  </div>
);
