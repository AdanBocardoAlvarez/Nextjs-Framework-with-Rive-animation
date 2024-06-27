import Image from "next/image";
import TwoWhiteTextBlueBg from "../common/TwoWhiteTextBlueBg";
import TwoCardWithImgYellowText from "../common/TwoCardWithImgYellowText";

const StationCarImageryTypo = () => {
  return (
    <div className="-mt-10 px-4 md:px-7 xl:px-[55px]">
      {/* Two images */}
      <div className="flex flex-col sm:flex-row items-start justify-center gap-5 lg:gap-8 2xl:gap-[49px]">
        <div className="w-full max-lg:max-w-[400px] max-lg:h-[410px] lg:size-[550px] 2xl:size-[675px] rounded-[25px] overflow-hidden">
          <Image
            src="/img/station_cars-imagery-one.webp"
            width={675}
            height={675}
            alt="station-car-imagery-typo"
            className="w-full h-full object-cover max-lg:object-left"
          />
        </div>
        <div className="w-full max-lg:max-w-[400px] max-lg:h-[410px] lg:size-[550px] 2xl:size-[675px] rounded-[25px] overflow-hidden">
          <Image
            src="/img/station_cars-imagery-two.webp"
            width={675}
            height={675}
            alt="station-car-imagery-typo"
            className="w-full h-full object-cover max-lg:object-left"
          />
        </div>
      </div>

      {/* Two texts */}
      <div className="max-w-[1501px] w-full mx-auto pt-40 pb-20">
        <TwoWhiteTextBlueBg
          imagerytext="Inspired by the intersection of food and charity, the branding initiative focused on vibrant and appetizing imagery that conveyed The Foodity's commitment to making a difference. Captivating visuals were curated to evoke a sense of joy and generosity, inviting customers to join in the culinary journey for a cause."
          typographytext="Typography played a crucial role in defining The Foodity's brand identity, with fonts selected to convey warmth and accessibility while maintaining a sense of sophistication. The use of playful yet legible typography added a touch of personality to the brand, reflecting its mission to make giving back as enjoyable as dining out."
        />
      </div>

      {/* Two cards with image and text */}
      <div className="w-full pb-6 md:pb-6 lg:pb-12 xl:pb-20">
        <TwoCardWithImgYellowText
          logotext="The Stationcars Enfield logo is a dynamic fusion of symbolism and function. Inspired by canine loyalty and trustworthiness, the design features a dog head within a circle, representing the company's commitment to continuous service. Sleek lines and a bold color scheme convey a sense of speed and efficiency, aligning with Stationcars Enfield's focus on reliable transportation."
          logotextImgUrl="/img/station_cars-small-img-1.webp"
          colorpallatetext="The color palette for Stationcars Enfield was carefully chosen to reflect the brand's values of trust, reliability, and professionalism. A combination of deep blue for the text and vibrant orange was selected to evoke a sense of stability and energy, while also standing out in a competitive market."
          colorpallatetextImgUrl="/img/station_cars-small-img-2.webp"
        />
      </div>
    </div>
  );
};

export default StationCarImageryTypo;
