"use client";

import Image from "next/image";
import React, { useState } from "react";
import RequestQuoteFirstForm from "./RequestQuoteFirstForm";
import RequestQuoteSecondForm from "./RequestQuoteSecondForm";

const RequestQuoteMain = () => {
  const [activeForm, setActiveForm] = useState(0);

  return (
    <div className="relative z-[15] mt-10 sm:-mt-[125px] md:-mt-[200px] lg:-mt-[245px] xl:-mt-[312px] 2xl:-mt-[370px]">
      {/* Active heading and dots */}
      <div className="text-white text-xl md:text-xl lg:text-[30px] 2xl:text-[32px] leading-[93.1%] uppercase">
        <div
          className="flex justify-between max-w-[380px] md:max-w-[340px]
        lg:max-w-[450px] max-sm:w-[30px] mx-auto pt-5 absolute 
        max-sm:-top-[100px] sm:relative max-sm:flex-col max-sm:left-0"
        >
          <div
            className="relative size-10 md:size-[50px] lg:size-[57px] 
              xl:size-[67px] flex-shrink-0"
          >
            <Image
              alt="dots"
              src="/img/Frame 43363 (3).svg"
              width={67}
              height={67}
              className="relative opacity-100 size-full object-cover"
            />
            <span
              className={`absolute sm:-right-[145px] md:-right-[100px] lg:-right-[150px] 2xl:-right-[170px]
              top-3 sm:-top-9 lg:-top-12 whitespace-nowrap ${
                activeForm == 0
                  ? "font-black max-sm:-right-[280px]"
                  : "max-sm:-right-[270px]"
              }`}
            >
              Contact Information
            </span>
          </div>
          <Image
            alt="line"
            src="/img/Vector2 (2).svg"
            width={500}
            height={69}
            className="max-sm:hidden max-w-[300px] md:max-w-[240px]
            lg:max-w-[380px]"
          />
          <div
            className="relative size-10 md:size-[50px] lg:size-[57px] 
              xl:size-[67px] flex-shrink-0"
          >
            <Image
              alt="dots"
              src="/img/Frame 43363 (3).svg"
              width={67}
              height={67}
              className={`relative max-sm:mt-4 size-full object-cover ${
                activeForm == 1 || activeForm == 2
                  ? "opacity-100"
                  : "opacity-50"
              }`}
            />
            <span
              className={`absolute -right-[265px] sm:-left-[120px] md:-left-[75px] lg:-left-[95px] top-[27px] sm:-top-9 lg:-top-[53px] whitespace-nowrap ${
                activeForm == 1 && "font-black max-sm:-right-[275px]"
              }`}
            >
              Project Information
            </span>
          </div>
        </div>
      </div>

      {/* Three forms */}
      <div className="formContList max-w-[820px] w-full mx-auto pt-10 relative pb-[319px] mb-[700px] 2xl:mb-[500px]">
        {/* First form */}
        <RequestQuoteFirstForm
          activeForm={activeForm}
          setActiveForm={setActiveForm}
        />

        {/* Second form */}
        <RequestQuoteSecondForm
          activeForm={activeForm}
          setActiveForm={setActiveForm}
        />

        {/* Third form */}
        <div
          className={`thirtForm flex justify-between flex-col w-full lg:w-[600px] pt-[79px] absolute top-0 m-auto text-[#f9dd00] font-semibold leading-[160%] text-base md:text-lg duration-700 transition-all ${
            activeForm === 2 ? "!left-0" : "!left-[100vw]"
          }`}
        >
          {activeForm == 2 && (
            <>
              <span>
                Thank you for reaching out to us and for your interest in our
                services. We have received your request for a quote, and we are
                currently reviewing the details provided.\nOur team will
                carefully assess your requirements and will get back to you
                shortly with a personalized quote tailored to your needs.
              </span>
              <div className="nextBtn mt-8 md:mt-[70px] lg:mt-[132px]">
                <div className="nextBtI" onClick={() => setActiveForm(0)}>
                  <Image
                    src="/img/Icon.svg"
                    width={26}
                    height={19}
                    alt="nextbtn"
                    className="transform rotate-180"
                  />
                </div>
                Back
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RequestQuoteMain;
