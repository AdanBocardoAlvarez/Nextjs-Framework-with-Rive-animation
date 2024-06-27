import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLink } from "./Helper";
import { FacebookIcon, InstagramIcon, PinterestIcon } from "./Icons";

interface FooterLink {
  Title: string;
  href: string;
  Icon: any;
}

interface FooterInfo {
  text: string;
  Icon: any;
}

interface FooterDataAttributes {
  Logo: string;
  OtherLinks: FooterLink[];
  SocialLinks: FooterLink[];
  ComanyInfo: FooterInfo[];
  Copyright: string;
  Icon: any;
}

// interface FooterResponse {
//   data: {
//     data: {
//       attributes: FooterDataAttributes;
//     };
//   };
// }

const Footer: React.FC = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="w-full xl:max-h-[375px] bg-white -mt-1.5 sm:-mt-4 pt-5 relative overflow-hidden">
      <div className="max-w-[1600px] w-full mx-auto max-sm:pt-10 p-[117px_16px_0px] sm:p-[86px_55px_0px] 2xl:p-[117px_55px_0px] flex justify-center lg:justify-between">
        <div className="lg:relative w-full flex justify-center flex-col items-center">
          <Image
            className="lg:absolute left-0 max-lg:max-w-[200px] w-[379px] max-lg:mx-auto lg:h-[340px] bottom-[-30px] lg:translate-x-[-160px] "
            src="/img/Frame_e6ce8d1a04.svg"
            alt="logo"
            width={70}
            height={60}
          />
          <div className="lg:pl-[260px] w-full max-lg:mt-10  justify-between max-xl:flex-col mb-10 flex gap-4">
            <div className="flex flex-col gap-10 xl:gap-20 mb-10 xl:mb-20">
              <div className="flex max-lg:items-center max-lg:justify-center flex-wrap gap-6 ">
                {navLink.map((item, index) => (
                  <Link
                    href={`${item.link}`}
                    key={index}
                    className="text-[rgba(0,52,101,1)] text-base font-bold !leading-[14.89px] items-center "
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
              <span className="flex max-lg:hidden items-center max-lg:text-center max-lg:justify-center  text-sm font-normal lg:!leading-[13px] min-w-[140px]">
                © {date} Just Get Visible Ltd, Company Registered in England &
                Wales: 09882516
              </span>
            </div>
            <div className="flex flex-col max-w-[356px] sm:max-w-[222px] 2xl:max-w-[356px] w-full gap-10 xl:gap-20">
              <div className="flex gap-3  max-2xl:flex-col 2xl:items-center">
                <Link
                  href="mailto:info@justgetvisible.com"
                  className="flex items-center gap-[7px] text-sm font-normal !leading-[13.03px]"
                >
                  <Image
                    alt=""
                    src="/img/Icon_d2d626a8c9.svg"
                    width={16.46}
                    height={16.46}
                  />
                  info@justgetvisible.com
                </Link>
                <Link
                  href="tel:0208 058 88525"
                  className="flex items-center gap-[7px] text-sm font-normal !leading-[13.03px]"
                >
                  <Image
                    alt=""
                    src="/img/Icon_fb6ee10f2a.svg"
                    width={16.46}
                    height={16.46}
                  />
                  0208 058 88525
                </Link>
              </div>
              <div className="flex max-lg:justify-center items-center gap-5">
                <div className="text-[rgba(0,52,101,1)]  text-base font-bold  !leading-[14.89px]">
                  Follow Us{" "}
                </div>
                <Link
                  href="#"
                  className="group transition duration-300 ease-in-out"
                >
                  <PinterestIcon />
                </Link>
                <Link
                  href="#"
                  className="group transition duration-300 ease-in-out"
                >
                  <FacebookIcon />
                </Link>
                <Link
                  href="#"
                  className="group transition duration-300 ease-in-out"
                >
                  <InstagramIcon />
                </Link>
              </div>
              <span className="flex lg:hidden items-center max-lg:text-center max-lg:justify-center  text-sm font-normal lg:!leading-[13px] min-w-[140px]">
                © {date} Just Get Visible Ltd, Company Registered in England &
                Wales: 09882516
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
