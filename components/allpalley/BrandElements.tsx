import React from "react";

interface TextProps {
  title: string;
  text: string;
}

const BrandElements: React.FC<TextProps> = ({ title, text }) => {
  return (
    <div className="w-full  px-[16px] sm:px-[30px] lg:px-[55px] 2xl:px-0">
      <div className="pt-10  sm:pt-14 xl:pt-20  2xl:pt-[120px]">
        {/* Brand Elements section  */}

        <h2 className="text-white  font-Montserrat text-[22px] text-center sm:text-3xl lg:text-[40px] font-black uppercase leading-[93.083%]">
          {title}
        </h2>

        <p className=" max-w-[997px] w-full mx-auto text-white  font-Montserrat font-medium text-sm lg:text-lg leading-[160%] py-8 lg:pt-14 ">
          {text}
        </p>
      </div>
    </div>
  );
};

export default BrandElements;
