import { ChangeEvent, FC, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoMdCloseCircleOutline } from "react-icons/io";

interface SearchProps {
  isOpen: boolean;
}

export const Search: FC<SearchProps> = ({ isOpen }) => {
  const [value, setValue] = useState("");

  const inputOnChange = (evt: ChangeEvent<HTMLInputElement>) =>
    setValue(evt.target.value);

  return (
    <div
      className={`transition-all duration-100 overflow-hidden ${
        !isOpen ? "h-0" : "h-12"
      }`}
    >
      <div className={`flex w-full relative pl-2 pt-5 pb-1 pr-4 `}>
        <input
          type="text"
          className="outline-none w-full border-b border-gray-400 pr-11"
          value={value}
          onChange={inputOnChange}
          autoFocus={isOpen}
        />
        <div className="absolute text-xl flex align-middle h-12 right-4">
          {!!value && (
            <button className="h-0 mr-2">
              <IoMdCloseCircleOutline />
            </button>
          )}
          <button className="h-0">
            <FiSearch />
          </button>
        </div>
      </div>
    </div>
  );
};
