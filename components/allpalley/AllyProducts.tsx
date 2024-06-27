import Image from "next/image";
import React from "react";

const AllyProducts = () => {
  return (
    <div className="w-full  px-[16px] sm:px-[30px] lg:px-[55px] 2xl:px-0">
      {/* image section  */}
      <div className="pt-10 sm:pt-12 lg:pt-20 2xl:pt-[120px] sm:rounded-lg overflow-hidden">
        {/* first section of image  */}
        <div className="flex justify-center max-sm:flex-col sm:rounded-t-lg overflow-hidden">
          <Image
            src="/img/ally_pally_bag.svg"
            alt="ally_pally_bag"
            width={784}
            height={783}
            className="max-2xl:w-[50%] max-sm:w-full max-h-[756px] sm:rounded-tl-lg"
          />
          <Image
            src="/img/ally_pally_cup.svg"
            alt="ally_pally_cup"
            width={716}
            height={793}
            className="max-2xl:w-[50%] max-sm:w-full max-h-[756px] sm:rounded-tr-lg"
          />
        </div>
        {/* second section of image  */}
        <div className="flex justify-center -mt-1">
          <Image
            src="/img/ally_pally_price_list.svg"
            alt="ally_pally_price_list"
            width={1503}
            height={552}
            className="max-w-[1503px] w-full sm:rounded-b-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AllyProducts;
