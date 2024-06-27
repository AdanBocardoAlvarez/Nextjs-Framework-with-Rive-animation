import Image from "next/image";
import ShortHeadWithParaText from "../common/ShortHeadWithParaText";

const FoodityColateralCreated = () => {
  return (
    <div
      className="pt-[120px] md:pt-[170px] lg:pt-[200px] xl:pt-[290px] px-4 md:px-7 xl:px-[55px] 
    bg-[url(/img/the-outcome-bg.png)] bg-cover bg-no-repeat"
    >
      {/* Collaterals Created */}
      <div className="mx-auto pb-0 lg:pb-[140px]">
        <ShortHeadWithParaText
          heading="Collaterals Created"
          subHeading="A range of collaterals was developed to complement The Foodity's brand identity and enhance its presence across various channels. From packaging to promotional materials, each collateral was thoughtfully designed to reflect the brand's values and inspire customers to join the movement for positive change"
          textColor="#003465"
          maxWidth={977}
        />
      </div>
      {/* image section  */}
      <div className="max-w-[1501px] transform translate-y-14 sm:translate-y-[85px] md:translate-y-[110px] mx-auto -mt-32">
        {/* first section of image  */}
        <div className="w-full max-h-[885px] h-full">
          <Image
            src="/img/foodity-img-1.webp"
            width={1509}
            height={885}
            alt="foodity-footer-img-1"
          />
        </div>
      </div>
    </div>
  );
};

export default FoodityColateralCreated;
