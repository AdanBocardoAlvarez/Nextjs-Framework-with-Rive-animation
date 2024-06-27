import React from "react";
import Link from "next/link";
import Image from "next/image";
interface OurWorkInfoProps {
  data: {
    Title: string;
    PresentationText: string;
    Img: any;
    link: any;
  };
}

const OurWorkComponent: React.FC<OurWorkInfoProps> = ({ data }) => {
  return (
    <Link
      data-aos-duration="10"
      data-aos="zoom-in"
      href={`${data.link}`}
      className=" relative   w-full  mr-0 "
    >
      <div className=" max-w-[723px] aspect-[723/528] portflio_img rounded-[12px] lg:rounded-[36px] mb-3 sm:mb-[37px] hover:scale-95 duration-300">
        <Image
          className="rounded-[12px] lg:rounded-[36px]"
          src={data.Img}
          alt="related images"
          width={725}
          height={528}
        />
      </div>

      <>
        <p
          data-aos="fade-up"
          data-aos-duration="10"
          className="sm:leading-[37.23px] uppercase leading-5 text-[20px] font-bold sm:text-[28px] md:text-[40px] sm:font-black text-white"
        >
          {data.Title}
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="10"
          className="md:text-[20px] text-sm sm:text-[18px] mt-2 sm:font-bold text-white leading-5 line-clamp-6 md:leading-[32px]"
        >
          {data.PresentationText}
        </p>
      </>
    </Link>
  );
};

export default OurWorkComponent;
