import YellowTiltedCard from "../common/YellowTiltedCard";
import { foodityYellowTiltedCardData } from "../common/Helper";
import Image from "next/image";

const FoodityBrandPurposeComponent = () => {
  return (
    <div className="bg-[url('/img/white-envelope-shape.svg')] bg-no-repeat bg-cover max-lg:bg-center -mt-[70px] sm:-mt-[60px] lg:-mt-10 xl:-mt-20 2xl:-mt-20 px-4 md:px-7 xl:px-[55px]">
      {/* Text and yellow card */}
      <div
        className="max-w-[1502px] w-full pt-[135px] sm:pt-[170px] md:pt-[220px] 
      xl:pt-[285px] flex max-lg:flex-col items-center lg:items-start justify-between gap-10 md:gap-[56px] mx-auto"
      >
        <div className="flex flex-col items-start justify-center gap-10 lg:gap-[72px]">
          {/* Text 1 */}
          <div className="max-w-[757px] w-full flex flex-col gap-4 sm:gap-[26px] max-lg:text-center">
            <h2 className="text-[#003465] font-montserrat text-[30px] sm:text-[40px] font-black leading-[93%] uppercase">
              Brand Purpose
            </h2>
            <p className="text-[#003465] font-montserrat text-[14px] text-start md:text-[16px] xl:text-[18px] font-medium leading-[120%] xl:leading-[160%] flex flex-col gap-3 ">
              The Foodity's purpose is to revolutionize charity by offering
              customers the opportunity to make a difference with every bite. By
              combining delicious food with meaningful giving, The Foodity aims
              to create a world where philanthropy is as easy and enjoyable as
              dining out.
            </p>
          </div>
          {/* Text 2 */}
          <div className="max-w-[757px] w-full flex flex-col text-start gap-4 sm:gap-[26px] max-lg:text-center">
            <h2 className="text-[#003465] font-montserrat text-[30px] sm:text-[40px] font-black leading-[93%] uppercase">
              Brand Values
            </h2>
            <p className="text-[#003465] font-montserrat text-start text-[14px] md:text-[16px] xl:text-[18px] font-medium leading-[120%] xl:leading-[160%] flex flex-col gap-3 ">
              The Foodity is driven by a commitment to innovation, fueled by a
              passion for making a difference. It values community and believes
              in the power of collective action to create positive change.
              Empowering communities and supporting causes that uplift and
              inspire are at the core of The Foodity's brand ethos, guiding its
              every decision and initiative.
            </p>
          </div>
        </div>

        <YellowTiltedCard data={foodityYellowTiltedCardData} />
      </div>
      {/* Big image */}
      <div className="max-w-[1502px] w-full max-h-[732px] h-full mx-auto mt-20 sm:mt-[103px]">
        <Image
          src="/img/foodity_big-image.webp"
          alt="image-1"
          width={1502}
          height={732}
          className="w-full h-full rounded-lg sm:rounded-[36px]"
        />
      </div>
    </div>
  );
};

export default FoodityBrandPurposeComponent;
