import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

interface NavLinkProps {
  item: {
    title: string;
    link: string;
  };
  setMenuStatus: (status: boolean) => void;
}

const NavLinks: React.FC<NavLinkProps> = ({ item, setMenuStatus }) => {
  const router = usePathname();

  return (
    <Link href={item.link} onClick={() => setMenuStatus(false)}>
      <li
        className={` text-sm lg:text-[12px] xl:text-sm border_bottom after:hover:bg-white after:inline-block after:content-[''] after:absolute hover:after:w-full after:w-0 after:bottom-[-5px] after:left-0 after:h-[2px] after:bg-transparent 2xl:text-base relative leading-[1.3em] transition duration-300 ease-in-out font-bold   ${
          router === item.link
            ? "text-[#f9dd00] after:!bg-[#f9dd00] after:w-full"
            : "text-white"
        }`}
      >
        {item.title}
      </li>
    </Link>
  );
};

export default NavLinks;
