import React from "react";
import Image from "next/image";

const BackImageDecoration: React.FC = () => {
  return (
    <Image
      alt=""
      src="/img/1.svg"
      width={2753}
      height={655}
      className="absolute top-0 w-full max-sm:h-[250px] max-sm:object-cover right-0"
      loading="lazy"
    />
  );
};

export default BackImageDecoration;
