import { webDesignCarddata } from "../common/Helper";
const WebDesignCards = () => {
  return (
    <>
      <div className="max-w-[1496px]  w-full mx-auto    grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-center xl:justify-between gap-7 sm:gap-10">
        {webDesignCarddata.map((item, index) => (
          <div
            key={index}
            className="max-w-[426px] hover:scale-105 duration-300 w-full mx-auto rounded-[12px] px-4 lg:px-[34px] py-7 sm:py-12 lg:py-[77px] flex flex-col gap-5 md:gap-[35px] bg-[#F9DD00]"
          >
            <h2 className="max-w-[353px] w-full font-montserrat font-black text-[32px] sm:text-[40px] leading-[93%] text-[#003465] uppercase">
              {item.heading}
            </h2>
            <p className="font-montserrat font-normal text-sm sm:text-[18px] leading-[160%] text-[#003465]">
              {item.decs}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};
export default WebDesignCards;
