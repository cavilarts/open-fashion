import { FC } from "react";
import { BsChevronDown, BsTelephone } from "react-icons/bs";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Modal } from "../Modal/Modal";

interface HeaderModalProps {
  handleClose: () => void;
}

export const HeaderModal: FC<HeaderModalProps> = ({ handleClose }) => (
  <Modal handleClose={handleClose}>
    <div className="flex justify-between mt-6">
      <button className="uppercase leading-8">Women</button>
      <button className="uppercase text-gray-400 leading-8">Man</button>
      <button className="uppercase text-gray-400 leading-8">Kids</button>
    </div>
    <div className="relative my-2">
      <div className="bg-gray-400 h-px"></div>
      <div className="bg-orange-500 h-px w-[70px] absolute top-0 after:w-2 after:h-2 after:bg-orange-500 after:absolute after:top-0 after:left-1/2 after:rotate-45 after:-translate-x-1/2 after:-translate-y-1/2"></div>
    </div>
    <ul className="mt-5">
      <li className="flex justify-between w-full leading-9 mb-4 text-base">
        <Link to="/">New</Link>
        <button className="text-gray-400">
          <BsChevronDown title="Open Menu" />
        </button>
      </li>
      <li className="flex justify-between w-full leading-9 mb-4 text-base">
        <Link to="/">Apparel</Link>
        <button className="text-gray-400">
          <BsChevronDown title="Open Menu" />
        </button>
      </li>
      <li className="flex justify-between w-full leading-9 mb-4 text-base">
        <Link to="/">Bag</Link>
        <button className="text-gray-400">
          <BsChevronDown title="Open Menu" />
        </button>
      </li>
      <li className="flex justify-between w-full leading-9 mb-4 text-base">
        <Link to="">Shoes</Link>
        <button className="text-gray-400">
          <BsChevronDown title="Open Menu" />
        </button>
      </li>
      <li className="flex justify-between w-full leading-9 mb-4 text-base">
        <Link to="/">Beauty</Link>
        <button className="text-gray-400">
          <BsChevronDown title="Open Menu" />
        </button>
      </li>
      <li className="flex justify-between w-full leading-9">
        <Link to="/">Accessories</Link>
        <button className="text-gray-400">
          <BsChevronDown title="Open Menu" />
        </button>
      </li>
    </ul>
    <div className="mt-6">
      <button className="flex items-center mb-4">
        <BsTelephone title="Call Us" className="mr-4" />
        <span>(786) 713-8616</span>
      </button>
      <button className="flex items-center">
        <FiMapPin className="mr-4" />
        <span>Store locator</span>
      </button>
    </div>
    <div className="relative w-1/3 my-10 m-auto">
      <div className="bg-gray-400 h-px"></div>
      <div className="bg-gray-400 h-px absolute w-full top-0 after:w-2 after:h-2 after:bg-white after:border-gray-400 after:border after:absolute after:top-0 after:left-1/2 after:rotate-45 after:-translate-x-1/2 after:-translate-y-1/2"></div>
    </div>
    <div className="flex justify-center mt-8">
      <Link
        className="text-xl"
        to="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiOutlineTwitter title="Twitter" />
      </Link>
      <Link
        className="text-xl ml-4"
        to="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillYoutube title="Youtube" />
      </Link>
      <Link
        className="text-xl ml-4"
        to="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <AiFillInstagram title="Instagram" />
      </Link>
    </div>
  </Modal>
);
