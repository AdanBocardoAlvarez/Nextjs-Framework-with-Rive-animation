"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  contactUsFormInputData,
  firstFormInputData,
  secondFormInputData,
} from "../common/Helper";
import RequestQuoteInputComponent from "../common/RequestQuoteInputComponent";
import RequestQuoteCustomInput from "../common/RequestQuoteCustomInput";
import RequestQuoteCustomTextArea from "../request-quote/RequestQuoteCustomTextArea";

interface FirstFormData {
  contactName: string;
  telephone: string;
  email: string;
  message: string;
}

interface ShowFirstErrors {
  contactName: boolean;
  telephone: boolean;
  email: boolean;
  message: boolean;
}

const ContactMain = () => {
  const [activeForm, setActiveForm] = useState(0);

  const [firstFormData, setFirstFormData] = useState<FirstFormData>({
    contactName: "",
    telephone: "",
    email: "",
    message: "",
  });

  const [showFirstErrors, setShowFirstErrors] = useState<ShowFirstErrors>({
    contactName: false,
    telephone: false,
    email: false,
    message: false,
  });

  const handleFirstChange = (e: any) => {
    const { name, value } = e.target;
    setFirstFormData({
      ...firstFormData,
      [name]: value,
    });
  };

  const handleFirstFormSubmit = (e: any) => {
    e.preventDefault();
    const newShowErrors: Partial<ShowFirstErrors> = {};

    Object.keys(firstFormData).forEach((key) => {
      newShowErrors[key as keyof ShowFirstErrors] =
        !firstFormData[key as keyof FirstFormData];
    });

    setShowFirstErrors(newShowErrors as ShowFirstErrors);

    const hasErrors = Object.values(newShowErrors).some((error) => error);

    if (!hasErrors) {
      setActiveForm(1);
    }
  };

  return (
    <div className="relative z-[15] mt-10 sm:-mt-[125px] md:-mt-[100px] lg:-mt-[110px] 2xl:-mt-[120px]">
      {/* Active heading and dots */}
      <div className="text-white text-xl md:text-xl lg:text-[30px] 2xl:text-[32px] leading-[93.1%] uppercase">
        <div
          className="flex justify-between max-w-[380px] md:max-w-[340px]
        lg:max-w-[450px] max-sm:w-[30px] mx-auto pt-5 absolute 
        max-sm:-top-6 sm:relative max-sm:flex-col max-sm:left-0"
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
                activeForm == 1 ? "opacity-100" : "opacity-50"
              }`}
            />
            <span
              className={`absolute -right-[110px] sm:-left-[30px] lg:-left-[50px] top-[27px] sm:-top-9 lg:-top-[53px] whitespace-nowrap ${
                activeForm == 1 && "font-black max-sm:-right-[120px]"
              }`}
            >
              Success
            </span>
          </div>
        </div>
      </div>

      {/* Two forms */}
      <div className="formContList max-w-[820px] w-full mx-auto pt-10 relative pb-[319px] mb-[700px] 2xl:mb-[500px]">
        {/* First form */}
        <form
          onSubmit={handleFirstFormSubmit}
          className={` max-lg:w-full flex flex-col lg:flex-row justify-center gap-5 md:gap-7 lg:gap-[60px] xl:gap-[100px] 2xl:gap-[149px] items-center lg:items-end pt-28 sm:pt-20 absolute top-0 duration-700 ${
            activeForm == 0
              ? "!left-0"
              : "!-left-[340vw] sm:!-left-[137vw] md:!-left-[133vw] lg:!-left-[150vw]"
          }`}
        >
          {/* Input part */}
          <div className="max-w-[448px] w-full md:w-[448px] flex flex-col items-start justify-center gap-[25px]">
            <RequestQuoteCustomInput
              inputType="text"
              inputLabel="Contact name"
              inputName="contactName"
              value={firstFormData.contactName}
              onChange={handleFirstChange}
              showError={showFirstErrors.contactName}
            />
            <RequestQuoteCustomInput
              inputType="number"
              inputLabel="Telephone"
              inputName="telephone"
              value={firstFormData.telephone}
              onChange={handleFirstChange}
              showError={showFirstErrors.telephone}
            />
            <RequestQuoteCustomInput
              inputType="email"
              inputLabel="Email"
              inputName="email"
              value={firstFormData.email}
              onChange={handleFirstChange}
              showError={showFirstErrors.email}
            />
            <RequestQuoteCustomTextArea
              inputLabel="MESSAGE"
              inputName="message"
              value={firstFormData.message}
              onChange={handleFirstChange}
              showError={showFirstErrors.message}
            />
          </div>
          {/* Text part */}
          <div>
            <div className="w-full text-sm md:text-base max-lg:max-w-[448px] lg:w-[386px] text-[#f9dd00]">
              <span>
                Just Get Visible don&apos;t just follow the trends, we work to
                get ahead of them, bringing your campaign to the front of an
                ever competitive world.
              </span>
              <button
                type="submit"
                className="nextBtn mt-8 md:mt-[70px] lg:mt-[90px]"
              >
                <div className="nextBtI">
                  <Image
                    src="/img/Icon.svg"
                    width={26}
                    height={19}
                    alt="nextbtn"
                  />
                </div>
                Next
              </button>
            </div>
          </div>
        </form>

        {/* Second form */}
        <div
          className={`flex justify-between flex-col w-full 
          lg:w-[600px] pt-28 sm:pt-[79px] absolute top-0 m-auto text-[#f9dd00] font-semibold leading-[160%] text-base md:text-lg duration-700 transition-all ${
            activeForm === 1 ? "!left-0 lg:!left-[50px]" : "!left-[100vw]"
          }`}
        >
          {activeForm == 1 && (
            <>
              <span>
                Great news! Your message has been successfully delivered to us.
                Our dedicated team is already on the case, working hard to
                address your inquiry. Keep an eye on your inbox for a swift
                response from us. While you wait, why not take a moment to
                browse through our website? Youll find plenty of helpful
                information about our services and offerings. Thank you for
                reaching out to us!
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

export default ContactMain;
