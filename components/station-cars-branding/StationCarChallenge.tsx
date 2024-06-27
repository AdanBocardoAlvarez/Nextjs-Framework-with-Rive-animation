import Image from "next/image";
import { stationCarsYellowTiltedCardData } from "../common/Helper";
import YellowTiltedCard from "../common/YellowTiltedCard";

const StationCarChallenge = () => {
  return (
    <div className="bg-[url('/img/white-envelope-shape.svg')] bg-no-repeat max-lg:bg-center bg-cover -mt-8 lg:-mt-10 xl:-mt-20 2xl:-mt-20 px-4 md:px-7 xl:px-[55px]">
      {/* Text and yellow card */}
      <div
        className="max-w-[1502px] w-full pt-[140px] sm:pt-[170px] md:pt-[220px] 
      xl:pt-[285px] flex max-lg:flex-col items-center lg:items-start justify-between gap-10 md:gap-[56px] mx-auto"
      >
        <div
          className="max-w-[667px] w-full flex flex-col items-start justify-start gap-4 sm:gap-[23px] 
        text-[#003465]"
        >
          <h2 className="text-[30px] sm:text-[40px] font-black leading-[93%] uppercase">
            The Challenge
          </h2>
          <div className="flex flex-col items-start justify-center gap-3 text-sm md:text-base xl:text-lg font-medium leading-[120%] xl:leading-[160%]">
            <p>
              Station Cars Enfield faced the challenge of outdated branding that
              no longer resonated with their target audience. Their existing
              logo and visual identity lacked modernity and failed to convey the
              quality and professionalism of their services.
            </p>
            <p>
              Our task was to develop a rebranding strategy that would breathe
              new life into the brand, making it more appealing and memorable to
              customers while maintaining its reputation for reliability.
            </p>
          </div>
        </div>

        <YellowTiltedCard data={stationCarsYellowTiltedCardData} />
      </div>
      {/* Big image */}
      <div
        className="max-w-[1501px] w-full max-h-[732px] h-full mx-auto mt-[70px]
      sm:mt-[100px] lg:mt-[163px]"
      >
        <Image
          src="/img/station_cars-challenge-img.webp"
          alt="image-1"
          width={1501}
          height={732}
          className="w-full h-full rounded-lg sm:rounded-[36px] object-cover"
        />
      </div>
    </div>
  );
};

export default StationCarChallenge;
