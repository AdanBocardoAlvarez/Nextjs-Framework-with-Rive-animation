import Image from "next/image";
import React from "react";
import BrandinFranzosLine from "./BrandinFranzosLine";

const Illustration = () => {
  return (
    <div className=" pt-10 md:pt-24 lg:pt-[173px] px-4 md:px-7 xl:px-[55px] 2xl:px-0">
      {/* the illustraion section  */}

      <p className="text-white text-center font-Montserrat text-[22px] sm:text-3xl lg:text-[40px] font-black uppercase leading-[93.083%]">
        Illustrations
      </p>

      {/* here the description  */}

      <div className="max-w-[1033px] w-full mx-auto pb-10 pt-8 md:py-10 lg:py-[52px] ">
        <p className="text-white  font-Montserrat font-medium text-sm md:text-lg leading-[150%] ">
          We also created a set of delightful illustrated doodles that added a
          touch of playfulness and charm to the brand. These whimsical drawings
          adorned various materials, such as menus, packaging, signage, and
          website, creating a sense of joy and excitement among customers. The
          doodles featured various characters and objects related to Franzos’
          story and cuisine, such as chickens, peppers, grills, forks, and
          knives. This illustrations became the pattern we used for different
          brand applications from packaging to website.
        </p>
      </div>

      {/* illustration image  */}

      <Image
        src="/img/chicken_illustration.svg"
        alt="chicken_illustration"
        width={1501}
        height={1037}
        className="mx-auto  md:pt-24 lg:pt-[133px] "
      />
      <div className="max-w-[1505px] w-full mx-auto">
        <BrandinFranzosLine
          data={[
            {
              Title: "LOGO",
              desc: "We created a bold and authoritative logo that reflects a confident and established business. The carefully constructed letter forms balance boldness with intricacy.",
              img: "/img/franzos-logo-img.svg",
            },
            {
              Title: "Colour palette",
              desc: "The Delcon colour palette is subtle and understated to enable the imagery to stand out.",
              img: "/img/color_plate-img.svg",
            },
            {
              Title: "Pattern",
              desc: "Raw and refined imagery is used side by side to showcase the craftsmanship of Delcon’s work.",
              img: "/img/pattern-img.svg",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Illustration;
