import React from "react";
import Image from "next/image";
interface text {
  translate: string;
}
const FooterTextDecoration: React.FC<text> = ({ translate }) => {
  return (
    <div className="sm:h-[330px] bg-[#003465] relative  max-sm:h-[10px]  px-10 lg:px-0  ml-[-750px] mx-auto">
      <Image
        width={1000}
        height={127}
        src={"/img/Frame 43364.svg"}
        className="w-[100vw] absolute bottom-0 z-10 h-auto right-0 "
        alt="decoration
      "
      />
      <Image
        width={3201}
        height={631}
        alt="decorationText"
        className={`min-w-[160vw] ${translate}  max-sm:hidden  absolute -bottom-20 left-0`}
        src={"/img/Group.svg"}
      />
    </div>
  );
};
export default FooterTextDecoration;
