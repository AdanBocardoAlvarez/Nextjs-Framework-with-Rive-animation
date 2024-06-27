"use client";
import Image from "next/image";
import React, { useState } from "react";
import SocialmediaBottomsectionInput from "./SocialmediaBottomsectionInput";
import { commoninputdata } from "../common/Helper";

interface FormData {
  [key: string]: string;
}

interface Errors {
  [key: string]: string;
}

const SocialMediaLastSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({});
  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (id: string, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
    // Clear error for this field if it has a value now
    if (value) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [id]: "",
      }));
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const newErrors: Errors = {};

    commoninputdata.forEach((item) => {
      if (!formData[item.id]) {
        newErrors[item.id] = `${item.label} is required`;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Form submission logic here
      console.log("Form Data:", formData);
    }
  };

  return (
    <div className="w-full pt-[40px] sm:pt-[70px] md:pt-[110px] lg:pt-[150px] xl:pt-[190px] 2xl:pt-[236px] max-2xl:px-[55px] max-lg:px-[30px] max-sm:px-[16px]">
      <div className="mx-auto max-w-[1493px] w-full flex max-md:flex-col-reverse items-center md:items-start justify-center gap-[50px] 2xl:gap-[77px]">
        <div className="pt-7" id="signup">
          <Image
            src="/img/social-media-bottom-image.png"
            alt="img"
            width={467}
            height={770}
          />
        </div>
        <div className="flex flex-col items-start justify-start max-w-[948px] w-full">
          <div className="max-w-[781px] w-full">
            <h2 className="text-[30px] md:text-[40px] lg:text-[55px] xl:text-[70px] 2xl:text-[80px] text-white font-black font-montserrat uppercase leading-[93%]">
              Get Your Free Social Media Analysis Today
            </h2>
            <p className="text-[20px] lg:text-[28px] xl:text-[32px] text-white font-bold font-montserrat leading-[130%] mt-6 xl:mt-[47px]">
              Fill in the details and we’ll send your social media analysis
              absolutely FREE!
            </p>
          </div>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="mt-2 xl:mt-[17px] grid grid-cols-1 sm:grid-cols-3 md:flex gap-[8px] xl:gap-[19px] items-center justify-start w-full">
              {commoninputdata.map((item) => (
                <SocialmediaBottomsectionInput
                  key={item.id}
                  item={item}
                  error={errors[item.id]}
                  onChange={handleChange}
                />
              ))}
            </div>
            <button
              type="submit"
              className="mt-6 xl:mt-12 flex items-center justify-center bg-[#F9DD00] rounded-[12px] max-w-[369px] h-[45px] lg:h-[63px] w-full hover:bg-transparent hover:text-[#F9DD00] border border-transparent hover:border-[#F9DD00] transition ease-in-out duration-300 text-[#003465] font-montserrat font-bold text-base leading-[93%] max-md:mx-auto"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaLastSection;
