import Image from "next/image";
import YellowTiltedCard from "../common/YellowTiltedCard";
import { inguboAppYellowTiltedCardData } from "../common/Helper";

const InguboAppChallenge = () => {
  return (
    <div className="bg-[url('/img/white-envelope-shape.svg')] bg-no-repeat max-lg:bg-center bg-cover -mt-8 lg:-mt-10 xl:-mt-20 2xl:-mt-20 px-4 md:px-7 xl:px-[55px]">
      {/* Text and yellow card */}
      <div
        className="max-w-[1502px] w-full pt-[120px] sm:pt-[140px] md:pt-[220px] 
      xl:pt-[285px] flex max-lg:flex-col items-center lg:items-start justify-between gap-10 md:gap-[56px] mx-auto"
      >
        <div className="max-w-[667px] w-full flex flex-col items-start justify-start gap-4 sm:gap-[23px] text-[#003465]">
          <h2 className="text-[30px] sm:text-[40px] font-black leading-[93%] uppercase">
            The Challenge
          </h2>
          <p className="text-sm sm:text-lg font-medium !leading-[160%] text-[#003465]  ">
            The challenge involves designing and developing a mobile app that
            seamlessly aligns with the company's brand values. The primary
            objectives include increasing user engagement by creating a
            user-friendly interface and enhancing the overall user experience.
            The app must facilitate easy browsing, customization, and purchase
            of custom design T-Shirts, ensuring a smooth and efficient
            transaction process.
          </p>
          <p className="text-sm sm:text-lg font-medium !leading-[160%] text-[#003465]  ">
            This project aims to boost the number of users by offering an
            intuitive and visually appealing app that embodies the company's
            identity while providing a convenient shopping experience for
            customers.
          </p>
        </div>

        <YellowTiltedCard data={inguboAppYellowTiltedCardData} />
      </div>
      {/* Big image */}
      <div
        className="max-w-[1501px] w-full max-h-[732px] h-full mx-auto mt-[70px]
      sm:mt-[70px] lg:mt-[115px]"
      >
        <Image
          src="/img/ingubo_app-challenge-img.webp"
          alt="image-1"
          width={1501}
          height={732}
          className="w-full h-full rounded-[36px] object-cover"
        />
      </div>
    </div>
  );
};

export default InguboAppChallenge;
