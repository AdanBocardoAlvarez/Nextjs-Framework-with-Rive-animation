import Image from "next/image";
import React from "react";

const SocialMediaCard = () => {
  return (
    <div className="px-4 md:px-7 xl:px-[55px] 2xl:px-0 pt-[92px]">
      <div className="max-w-[1479px] w-full mx-auto flex flex-col items-end">
        <div className="max-sm:hidden sm:max-w-[400px] lg:max-w-[700px] xl:max-w-[933px] w-full h-[203px] rounded-[40px] md:rounded-[68px] bg-white -mb-32 mr-[6px] lg:mr-1"></div>
        <div className="max-w-[1480px] w-full mx-auto -rotate-[0.919deg] rounded-[18px] md:rounded-[40px] lg:rounded-[68px] bg-white flex max-lg:flex-col justify-center items-center gap-9 xl:gap-[47px] pt-8  lg:pt-[74px] pb-8 lg:pb-[53px] px-4 xl:px-[41px] relative">
          <div>
            <Image
              src="/img/social-media-icons.png"
              alt=" social media image"
              width={558}
              height={519}
            />
          </div>
          <div className="flex flex-col gap-4 sm:gap-8 xl:gap-[66px] ">
            <h3 className="max-w-[740px] w-full font-montserrat font-black text-[16px] sm:text-[26px] xl:text-[40px] leading-[93%] uppercase text-[#003465]">
              Facebook, Twitter, Pinterest, Instagram, YouTube, Tumblr, Google+,
              Linked In, Vine and even Snapchat - your customers are using them,
              and you should be too
            </h3>
            <p className="max-w-[549px] w-full font-montserrat font-medium text-[14px] sm:text-[18px] leading-[160%] text-[#003465]">
              Staying updated on current trends, selecting the appropriate
              hashtags, and identifying the most suitable social media platforms
              for your business can be challenging while managing day-to-day
              operations. However, our specialized team is here to ease the
              burden.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaCard;
