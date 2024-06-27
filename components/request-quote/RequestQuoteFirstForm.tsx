import React, { useState } from "react";
import RequestQuoteCustomInput from "../common/RequestQuoteCustomInput";
import Image from "next/image";

interface FirstFormData {
  contactName: string;
  telephone: string;
  email: string;
  companyName: string;
}

interface ShowFirstErrors {
  contactName: boolean;
  telephone: boolean;
  email: boolean;
  companyName: boolean;
}

interface Props {
  activeForm: number;
  setActiveForm: any;
}

const RequestQuoteFirstForm: React.FC<Props> = ({
  activeForm,
  setActiveForm,
}) => {
  const [firstFormData, setFirstFormData] = useState<FirstFormData>({
    contactName: "",
    telephone: "",
    email: "",
    companyName: "",
  });
  const [showFirstErrors, setShowFirstErrors] = useState<ShowFirstErrors>({
    contactName: false,
    telephone: false,
    email: false,
    companyName: false,
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
    <form
      onSubmit={handleFirstFormSubmit}
      className={`max-lg:w-full flex flex-col lg:flex-row justify-center gap-5 md:gap-7 lg:gap-[60px] xl:gap-[149px] items-center lg:items-end pt-12 sm:pt-20 absolute top-0 duration-700 ${
        activeForm == 0
          ? "!left-0"
          : "!-left-[340vw] sm:!-left-[137vw] md:!-left-[133vw] lg:!-left-[150vw]"
      }`}
    >
      {/* Input part */}
      <div className="max-w-[448px] w-full flex flex-col items-start justify-center gap-[25px]">
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
        <RequestQuoteCustomInput
          inputType="text"
          inputLabel="Company Name"
          inputName="companyName"
          value={firstFormData.companyName}
          onChange={handleFirstChange}
          showError={showFirstErrors.companyName}
        />
      </div>
      {/* Text part */}
      <div>
        <div className="w-full text-sm md:text-base max-w-[448px] lg:max-w-[386px] text-[#f9dd00]">
          <span>
            Just Get Visible don&apos;t just follow the trends, we work to get
            ahead of them, bringing your campaign to the front of an ever
            competitive world.
          </span>
          <button
            type="submit"
            className="nextBtn mt-8 md:mt-[70px] lg:mt-[90px]"
          >
            <div className="nextBtI">
              <Image src="/img/Icon.svg" width={26} height={19} alt="nextbtn" />
            </div>
            Next
          </button>
        </div>
      </div>
    </form>
  );
};

export default RequestQuoteFirstForm;
