import { FC, useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { BsBag } from "react-icons/bs";

import { ReactComponent as Logo } from "../../assets/icons/logo/Logo.svg";
import { HeaderModal } from "./HeaderModal";

export const Header: FC = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header className="z-10">
      <nav className="flex justify-between pl-2 pt-5 pb-1 pr-4">
        <button className="text-2xl" onClick={handleToggleMenu}>
          <HiOutlineMenuAlt1 title="menu" />
        </button>
        <Logo title="Open Fashion" />
        <div>
          <button className="text-2xl pr-2">
            <FiSearch title="search" />
          </button>
          <button className="text-2xl">
            <BsBag title="shopping cart" />
          </button>
        </div>
      </nav>
      {openMenu && <HeaderModal handleClose={handleToggleMenu} />}
    </header>
  );
};
