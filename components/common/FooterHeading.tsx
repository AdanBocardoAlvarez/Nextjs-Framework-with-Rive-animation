import React from "react";
import Image from "next/image";
const FooterHeading: React.FC = () => {
  return (
    <div className="2xl:h-[430px] xl:h-[300px] md:h-[250px] sm:h-[200px] h-[130px]">
      <Image
        width={1000}
        height={127}
        src="img/Frame433.svg"
        className="absolute left-0 bottom-0 h-auto w-full"
        alt="decoration
      "
      />
      <Image
        width={3201.16}
        height={431}
        alt="decorationText"
        className="absolute bottom-[-1px] right-0"
        src="img/Group-img.svg"
      />
    </div>
  );
};
export default FooterHeading;
