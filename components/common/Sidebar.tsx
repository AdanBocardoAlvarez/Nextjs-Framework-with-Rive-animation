import React from "react";
import { navLink } from "./Helper";
import NavLinks from "./NavLinks";
import Link from "next/link";
import { StartProjectBtnIcon } from "./Icons";

interface SidebarProps {
  setMenuStatus: (status: boolean) => void;
  menuStatus: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ setMenuStatus, menuStatus }) => {
  return (
    <div
      className={`${
        menuStatus ? "right-0  duration-700" : "-right-[105%]  duration-700"
      } sm:max-w-[250px] max-w-full w-full  duration-700   bg-[#003465] p-5 pt-10 z-20 lg:hidden h-screen fixed top-0 `}
    >
      <ul className="flex max-w-[150px] flex-col gap-8 ">
        {navLink.map((item, index) => (
          <NavLinks setMenuStatus={setMenuStatus} item={item} key={index} />
        ))}
      </ul>
      <Link
        href="/new-project"
        className="flex mt-8 items-center transition duration-300 ease-in-out hover:text-[#f9dd00] group hover:bg-transparent border border-[#f9dd00] gap-3 text-[#003465] max-w-[190px] xl:max-w-[215px] w-full font-bold  justify-center rounded-xl h-[50px] text-base !leading-[14px] bg-[#f9dd00] "
      >
        <StartProjectBtnIcon />
        Start Project
      </Link>
    </div>
  );
};

export default Sidebar;
