import React from "react";
import Image from "next/image";

const Seobg: React.FC = () => {
  return (
    <div className="bg-[url(/img/seo-bg.svg)]  w-full absolute h-[60vw] top-0">
      {/* <Image
        alt=""
        src="/img/seo-bg.svg"
        width={2753}
        height={1300}
        className="absolute h-[700px] top-0 "
        loading="lazy"
      /> */}
    </div>
  );
};

export default Seobg;
