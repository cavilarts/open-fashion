import { FC } from "react";

import { Modal } from "../Modal/Modal";

interface CartProps {
  handleClose: () => void;
}

export const Cart: FC<CartProps> = ({ handleClose }) => (
  <Modal handleClose={handleClose}>
    <p className="uppercase mt-4">Cart</p>
    <div className="flex justify-center items-center h-5/6">
      <p className="text-sm text-gray-500">
        You have no items in your Shopping Bag.
      </p>
    </div>
  </Modal>
);
