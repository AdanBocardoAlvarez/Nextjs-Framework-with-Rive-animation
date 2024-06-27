import Image from "next/image";
import TwoWhiteTextBlueBg from "../common/TwoWhiteTextBlueBg";
import TwoCardWithImgYellowText from "../common/TwoCardWithImgYellowText";

const FoodityImageryTypo = () => {
  return (
    <div className="-mt-10 px-4 md:px-7 xl:px-[55px]">
      {/* One large image */}
      <div className="max-w-[1501px] w-full max-h-[391px] h-full mx-auto">
        <Image
          src="/img/ingubo_app-imagery-typo-img-1.webp"
          width={1501}
          height={391}
          alt="foodity-imagery-typo"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-[1501px] w-full max-h-[538px] h-full mx-auto">
        <Image
          src="/img/ingubo_app-imagery-typo-img-2.webp"
          width={1501}
          height={538}
          alt="foodity-imagery-typo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Two texts */}
      <div
        className="max-w-[1501px] w-full mx-auto pt-12 sm:pt-[70px] md:pt-[120px] lg:pt-[180px] 
      pb-8 sm:pb-[50px] md:pb-[110px] lg:pb-[151px]"
      >
        <TwoWhiteTextBlueBg
          imagerytext="Inspired by the intersection of food and charity, the branding initiative focused on vibrant and appetizing imagery that conveyed The Foodity's commitment to making a difference. Captivating visuals were curated to evoke a sense of joy and generosity, inviting customers to join in the culinary journey for a cause."
          typographytext="Typography played a crucial role in defining The Foodity's brand identity, with fonts selected to convey warmth and accessibility while maintaining a sense of sophistication. The use of playful yet legible typography added a touch of personality to the brand, reflecting its mission to make giving back as enjoyable as dining out."
        />
      </div>

      {/* Two cards with image and text */}
      <div className="w-full pb-8 md:pb-12 lg:pb-20">
        <TwoCardWithImgYellowText
          logotext="The centerpiece of The Foodity's branding was its logo, which symbolized the fusion of happiness, love and food. Incorporating elements such as heart motif, the logo captured the essence of The Foodity's mission in a visually compelling way. Vibrant colors and bold lines added energy and dynamism, making the logo instantly recognizable and memorable."
          logotextImgUrl="/img/foodity_small-card-yellowbg.webp"
          colorpallatetext="The color palette for Foodity was based on rich shades of purple and vibrant hues of red, symbolizing creativity, passion, and compassion. These bold colors were chosen to evoke a sense of warmth, energy, and generosity, reflecting Foodity's mission to make a positive impact through delicious food and charitable giving. Accents of white and gold were incorporated to provide contrast and sophistication, enhancing the overall visual appeal of the brand."
          colorpallatetextImgUrl="/img/ingubo_app-small-img-2.webp"
        />
      </div>
    </div>
  );
};

export default FoodityImageryTypo;
