"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLink } from "./Helper";
import { LogoIcon, StartProjectBtnIcon } from "./Icons";
import NavLinks from "./NavLinks";
import Sidebar from "./Sidebar";

interface NavbarProps {
  color?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ color }) => {
  const path = usePathname();
  const [menuStatus, setMenuStatus] = useState(false);
  const [scrollAtTop, setScrollAtTop] = useState(true);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (currentScrollY <= 5) {
            setScrollAtTop(true);
            setScrollDirection("up");
          } else {
            setScrollAtTop(false);

            if (currentScrollY > lastScrollY) {
              setScrollDirection("down");
            } else {
              setScrollDirection("up");
            }
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (menuStatus) {
      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");
    }
    return () => {
      document.body.classList.remove("sidebar-open");
    };
  }, [menuStatus]);

  return (
    <header
      className={`z-50 w-full h-[63px] sm:h-[112px] scroll_navbar fixed top-0 transition-[0.5s] ${
        scrollDirection === "down" && !scrollAtTop
          ? "scrolling-down"
          : "scrolling-up"
      } ${scrollAtTop ? "bg-[rgba(0,52,101,0)]" : "bg-[rgba(0,52,101,1)]"}`}
    >
      <div className="max-w-[1437px] 2xl:max-w-[1615px] gap-10 w-full mx-auto  px-4 sm:px-7  xl:px-[55px] flex justify-between items-start">
        <span>
          {path === "/" ? (
            <>
              <Link className="sm:hidden" href="/">
                <LogoIcon />
              </Link>
              <span className="max-sm:hidden">
                {scrollAtTop ? (
                  ""
                ) : (
                  <Link href="/">
                    <LogoIcon />
                  </Link>
                )}
              </span>
            </>
          ) : (
            <Link href="/">
              <LogoIcon />
            </Link>
          )}
        </span>
        <div className="flex max-sm:hidden h-[90px] sm:h-[112px] items-center max-w-[870px]  xl:max-w-[1065px] gap-4 justify-between lg:w-full">
          <ul className="max-w-[680px] xl:max-w-[798px] max-lg:hidden flex gap-3 justify-between items-center w-full">
            {navLink.map((item, index) => (
              <NavLinks setMenuStatus={setMenuStatus} item={item} key={index} />
            ))}
          </ul>
          <Link
            href="/new-project"
            className="flex items-center max-lg:hidden transition duration-300 ease-in-out hover:text-[#f9dd00] group hover:bg-transparent border border-[#f9dd00] gap-3 text-[#003465] w-[190px] xl:w-[215px] font-bold justify-center rounded-xl h-[50px] text-base !leading-[14px] bg-[#f9dd00]"
          >
            <StartProjectBtnIcon />
            Start Project
          </Link>
        </div>
        <span
          className={`lg:hidden relative z-30`}
          onClick={() => setMenuStatus(!menuStatus)}
        >
          <span className="w-8 float-right cursor-pointer sm:mr-4 mt-6">
            <i
              className={`float-left w-full h-1 transition duration-700 ease-in-out bg-[#FADF00] rounded-[3px] ${
                menuStatus
                  ? "translate-y-2 -rotate-45"
                  : "rotate-0 -translate-y-2.5"
              }`}
            ></i>
            <i
              className={`float-left w-full h-1 transition duration-700 ease-in-out bg-[#FADF00] rounded-[3px] ${
                menuStatus ? "hidden" : ""
              }`}
            ></i>
            <i
              className={`float-left w-full h-1 transition duration-700 ease-in-out bg-[#FADF00] rounded-[3px] ${
                menuStatus
                  ? "translate-y-1 rotate-45"
                  : "rotate-0 translate-y-2.5"
              }`}
            ></i>
          </span>
        </span>
      </div>
      <Sidebar menuStatus={menuStatus} setMenuStatus={setMenuStatus} />
      {menuStatus && (
        <div
          onClick={() => setMenuStatus(false)}
          className={`bg-black/50 top-0 lg:hidden fixed z-10 left-0 bottom-0 right-0 w-screen h-screen`}
        ></div>
      )}
    </header>
  );
};

export default Navbar;
