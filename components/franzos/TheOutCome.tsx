import Image from "next/image";
import React from "react";

const TheOutCome = () => {
  return (
    <div className="pt-[200px] xl:pt-[350px] pb-10 md:pb-20 lg:pb-[300px]  px-4 md:px-7 xl:px-[55px] 2xl:px-0 bg-[url(/img/the-outcome-bg.png)] bg-cover bg-no-repeat max-md:bg-center">
      {/* the outcome section  */}
      <p className="text-[#003465] text-center font-Montserrat text-[22px] sm:text-3xl lg:text-[40px] font-black uppercase leading-[93.083%]">
        The Outcome
      </p>

      {/* here the description  */}
      <div className="max-w-[997px] w-full mx-auto pt-8 md:pt-14  flex flex-col gap-6 sm:gap-10 lg:gap-[30px]">
        <p className="text-[#003465]  font-Montserrat font-medium text-sm md:text-lg leading-[160%] ">
          Once we had the brand identity design ready, we proceeded to implement
          it across all the touchpoints of Franzos’ business. We helped Franzos
          update their materials and platforms with their new brand identity,
          ensuring a smooth transition and a positive reception from their
          customers.
        </p>

        <p className="text-[#003465]  font-Montserrat font-medium text-sm md:text-lg leading-[160%] ">
          Our brand identity design for Franzo was a hit with both the client
          and their customers. Franzo saw a boost in sales, customer
          satisfaction, and brand awareness after unveiling their new brand
          identity. They also got positive feedback from their customers who
          loved their quality products, service, and story.
        </p>
      </div>

      {/* image section  */}
      <div className="pt-10 sm:pt-12 lg:pt-28 2xl:pt-[188px]">
        {/* first section of image  */}
        <div className="flex justify-center max-md:flex-col  max-w-[1501px] w-full mx-auto bg-[#EB2027]">
          <Image
            src="/img/franzos_drinks.svg"
            alt="franzos_drinks"
            width={764}
            height={537}
          />
          <Image
            src="/img/franzos_coffee.svg"
            alt="franzos_coffee"
            width={736}
            height={537}
          />
        </div>

        {/* second section of image  */}
        <div className="flex justify-center max-md:flex-col">
          <Image
            src="/img/franzos_burger_fries.svg"
            alt="franzos_burger_fries"
            width={756}
            height={560}
          />
          <Image
            src="/img/franzos_wraps.svg"
            alt="franzos_wraps"
            width={745}
            height={560}
          />
        </div>
        {/* third section of image  */}
        <div className="flex justify-center">
          <Image
            src="/img/order_franzos_sanks.svg"
            alt="order_franzos_sanks"
            width={1496}
            height={611}
          />
        </div>
      </div>

      {/* impact and conclusion section  */}
      <div className="pt-10 sm:pt-12 lg:pt-28 xl:pt-[188px] 2xl:pt-[226px] max-w-[1481px] w-full mx-auto max-md:flex-col flex md:gap-5 xl:gap-[55px] 2xl:gap-[133px]">
        {/* imapct section  */}
        <div className="max-w-[743px] w-full max-md:border-b md:border-r border-[#03498A] md:pr-4 xl:pr-[50px] 2xl:pr-[138px]">
          <p className="text-[#003465]  font-Montserrat text-[22px] sm:text-3xl lg:text-[40px] font-black uppercase leading-[93.083%]">
            The Impact
          </p>

          <p className="text-[#003465]  font-Montserrat font-medium text-sm lg:text-lg leading-[160%] py-8 lg:pt-14 ">
            The brand identity transformation not only improved Franzos’ image
            and appeal but also paved the way for their franchise expansion. The
            brand’s cohesive image, along with the mouth-watering cuisine,
            captivated the hearts of customers, driving the success of the
            franchise. The success story didn’t stop there, as Franzos expanded
            its footprint, establishing itself as a thriving franchise with
            multiple locations across the UK. Franzos also attracted many
            aspiring entrepreneurs who wanted to join its franchise network.
          </p>
        </div>

        {/* conclusion section  */}
        <div className="max-w-[743px] w-full mt-8 md:mt-0">
          <p className="text-[#003465]  font-Montserrat text-[22px] sm:text-3xl lg:text-[40px] font-black uppercase leading-[93.083%]">
            Conclusion
          </p>

          <p className=" md:max-w-[605px] w-full text-[#003465]  font-Montserrat font-medium text-sm lg:text-lg leading-[160%] pt-8 lg:pt-14 ">
            Franzos has proven that a well-crafted brand identity coupled with
            exceptional cuisine can create an irresistible combination that
            resonates with customers and fuels franchise growth. With its
            flame-grilled piri piri chicken and burgers, Franzos continues to
            leave a lasting impression on food enthusiasts, setting new
            standards for culinary excellence and memorable dining experiences.
            We are happy to have helped Franzos achieve their goals and express
            their passion through their brand identity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TheOutCome;
