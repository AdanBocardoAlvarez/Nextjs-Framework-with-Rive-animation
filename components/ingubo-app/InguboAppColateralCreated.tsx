import Image from "next/image";
import ShortHeadWithParaText from "../common/ShortHeadWithParaText";

const InguboAppColateralCreated = () => {
  return (
    <div
      className="pt-[120px] sm:pt-[145px] md:pt-[270px] 2xl:pt-[390px] px-4 md:px-7 xl:px-[55px] 
    bg-[url(/img/white-envelope-shape.svg)] bg-cover bg-no-repeat"
    >
      {/* Collaterals Created */}
      <div className="mx-auto pb-20 sm:pb-8 md:pb-10 lg:pb-[100px] 2xl:pb-[180px] -mb-[100px] lg:-mb-[140px]">
        <ShortHeadWithParaText
          heading="BRINGING IT ALL TOGETHER"
          subHeading="The final product ensured that we came up with an app that allowed users to create a one-of-a-kind apparel. Simply see it, snap it, and wear it. Upload your image here, and we will send you an exclusive garment in full colour, all over apparel print. You’re a few clicks away from bringing your designs to life. If you need help with designing your item, check out our gallery for inspiration. (We’re good at that, by the way)."
          textColor="#003465"
          maxWidth={977}
        />
      </div>

      {/* image section  */}
      <div className="max-w-[1501px] transform translate-y-14 sm:translate-y-[100px] lg:translate-y-[140px] mx-auto">
        {/* first section of images  */}
        <div className="w-full max-h-[885px] h-full">
          <Image
            className="w-full max-h-[885px] h-full object-coveR"
            src="/img/ingubo_app-colateral-img-1.webp"
            width={1501}
            height={356}
            alt="station_car-footer-img-1"
          />
        </div>
      </div>
    </div>
  );
};

export default InguboAppColateralCreated;
