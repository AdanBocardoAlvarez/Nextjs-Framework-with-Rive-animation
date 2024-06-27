import Image from "next/image";
import ShortHeadWithParaText from "../common/ShortHeadWithParaText";

const StationCarColateralCreated = () => {
  return (
    <div
      className="pt-[100px] md:pt-[150px] xl:pt-[290px] px-4 md:px-7 xl:px-[55px] 
    bg-[url(/img/white-envelope-shape.svg)] bg-cover bg-no-repeat"
    >
      {/* Collaterals Created */}
      <div className="mx-auto pb-0 md:pb-10 lg:pb-[90px] sm:-mb-[270px] lg:-mb-[530px]">
        <ShortHeadWithParaText
          heading="Collaterals Created"
          subHeading="A comprehensive set of collateral was developed as part of Stationcars Enfield's rebranding efforts. This included redesigned stationery, marketing materials such as brochures and flyers, and app redesign. Each collateral piece was crafted to reflect the new brand identity, reinforcing Stationcars Enfield's commitment to quality service and customer satisfaction."
          textColor="#003465"
          maxWidth={977}
        />
      </div>

      {/* image section  */}
      <div className="max-w-[1501px] transform translate-y-14 sm:translate-y-[300px] lg:translate-y-[540px] mx-auto">
        {/* first section of images  */}
        <div className="w-full max-h-[453px] h-full">
          <Image
            className="w-full max-h-[453px] h-full object-cover"
            src="/img/station_cars-colateral-img-1.webp"
            width={1501}
            height={453}
            alt="station_car-footer-img-1"
          />
        </div>

        {/* second section of image  */}
        <div className="w-full max-h-[1011px] h-full">
          <Image
            src="/img/station_cars-colateral-img-2.webp"
            width={1501}
            height={1011}
            alt="station_car-footer-img"
          />
        </div>
      </div>
    </div>
  );
};

export default StationCarColateralCreated;
