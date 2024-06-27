import Image from "next/image";
import HeroTiltedYellowCard from "../common/HeroTiltedYellowCard";

interface FranzosHeroProps {
  data: any;
}

const FranzosHero: React.FC<FranzosHeroProps> = ({ data }) => {
  return (
    <>
      <div className="mt-4 md:mt-8 w-fit mx-auto">
        <Image
          src={data.heroImgUrl}
          width={1501}
          height={628}
          alt="common-hero-image"
          className="rounded-[12px] md:rounded-[24px] lg:rounded-[32px]"
        />
      </div>
      <div className="max-w-[1501px] w-full mx-auto flex max-lg:flex-col items-center gap-6 lg:gap-12 2xl:gap-[119px] justify-end mt-[-1px]">
        <HeroTiltedYellowCard data={data.yelloCardData} />
        <div className="max-w-[931px] w-full max-sm:pb-2 max-md:pb-7">
          <p className="text-white font-montserrat font-normal text-[14px] sm:text-[18px] leading-[160%]">
            {data.heroInfoText}
          </p>
        </div>
      </div>
    </>
  );
};

export default FranzosHero;
