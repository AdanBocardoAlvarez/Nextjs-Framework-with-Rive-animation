import React, { useState } from "react";
import {
  requestQuoteSelectData,
  secondFormInputData,
  tradingDurationData,
  websiteDevelopementBudgetData,
  websiteKindSelectData,
  websiteTimelineData,
} from "../common/Helper";
import RequestQuoteInputComponent from "../common/RequestQuoteInputComponent";
import Image from "next/image";
import RequestQuoteCustomCheckBox from "./RequestQuoteCustomCheckBox";
import RequestQuoteCustomSelect from "./RequestQuoteCustomSelect";
import RequestQuoteCustomInput from "../common/RequestQuoteCustomInput";
import RequestQuoteCustomTextArea from "./RequestQuoteCustomTextArea";

interface FormData {
  slectedCheckBox: number;
  kindOfWebsite: any;
  websiteBudget: any;
  timeline: any;
  tradingTime: any;
  whatIsYourWebsiteText: string;
  textareaInput: string;
}

interface ShowErrors {
  slectedCheckBox: boolean;
  kindOfWebsite: boolean;
  websiteBudget: boolean;
  timeline: boolean;
  tradingTime: boolean;
  whatIsYourWebsiteText: boolean;
  textareaInput: boolean;
}

interface Props {
  activeForm: number;
  setActiveForm: any;
}

const checkBoxOptions = [
  { id: 0, label: "WEBSITE" },
  { id: 1, label: "BRANDING" },
  { id: 2, label: "ONLINE MARKETING" },
];

const secondFormChecked =
  "Did you know that all of our websites come with:\n\n> A dedicated mobile version.\n> Modern standards and optimisation QA report.\n> Dedicated account manager.\n> Free 2 hours long training session followed by training videos and documentation.\n> Managed cloud hosting.\n> Free SSL certificate";

const RequestQuoteSecondForm: React.FC<Props> = ({
  activeForm,
  setActiveForm,
}) => {
  const [showText, setShowText] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    slectedCheckBox: -1,
    kindOfWebsite: { id: 0, name: "Select" },
    websiteBudget: { id: 0, name: "Select" },
    timeline: { id: 0, name: "Select" },
    tradingTime: { id: 0, name: "Select" },
    whatIsYourWebsiteText: "",
    textareaInput: "",
  });
  const [showErrors, setShowErrors] = useState<ShowErrors>({
    slectedCheckBox: false,
    kindOfWebsite: false,
    websiteBudget: false,
    timeline: false,
    tradingTime: false,
    whatIsYourWebsiteText: false,
    textareaInput: false,
  });

  // To handle checkbox change
  const handleCheckBoxChange = (id: number) => {
    const newFormData = {
      ...formData,
      slectedCheckBox: id,
    };
    setFormData(newFormData);
  };

  // To handle select change
  const handleSelectChange = (selectedOption: any, optionKey: any) => {
    setFormData((prevData) => ({
      ...prevData,
      [optionKey]: selectedOption,
    }));
  };

  // To handle text input and text area change
  const handleTextInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const hasEmptyFields =
      formData.slectedCheckBox === -1 ||
      formData.kindOfWebsite.id === 0 ||
      formData.websiteBudget.id === 0 ||
      formData.timeline.id === 0 ||
      formData.tradingTime.id === 0 ||
      formData.whatIsYourWebsiteText.trim() === "" ||
      formData.textareaInput.trim() === "";

    if (hasEmptyFields) {
      setShowErrors({
        slectedCheckBox: formData.slectedCheckBox === -1,
        kindOfWebsite: formData.kindOfWebsite.id === 0,
        websiteBudget: formData.websiteBudget.id === 0,
        timeline: formData.timeline.id === 0,
        tradingTime: formData.tradingTime.id === 0,
        whatIsYourWebsiteText: formData.whatIsYourWebsiteText.trim() === "",
        textareaInput: formData.textareaInput.trim() === "",
      });
      return;
    }

    setActiveForm(2);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`secondForm max-lg:w-full transition-all duration-700 pt-[79px] absolute top-0
              ${
                activeForm === 0 &&
                "!left-[100vw] lg:!left-[calc(100vw-225px)] xl:!left-[calc(100vw-450px)] 2xl:!left-[calc(100vw-685px)]"
              }
              ${activeForm === 1 && "left-0 2xl:!-left-[12vw]"} ${
        activeForm === 2 && "!left-[-120vw]"
      }`}
    >
      <div className="flex flex-col items-center lg:items-start justify-start">
        {/* Checkboxes */}
        <div
          className="relative w-full flex flex-wrap 
        gap-4 md:gap-7 lg:gap-10 mb-4 md:mb-7 lg:mb-10"
        >
          {checkBoxOptions.map((item) => (
            <RequestQuoteCustomCheckBox
              key={item.id}
              isChecked={formData.slectedCheckBox === item.id}
              label={item.label}
              data={item}
              handleCheckBoxChange={handleCheckBoxChange}
            />
          ))}
          {showErrors.slectedCheckBox && (
            <div className="checkboxError absolute text-[#f44336] -bottom-6 left-[5px]">
              Please select an option
            </div>
          )}
        </div>

        {/* Inputs */}
        <div className="w-full flex flex-col 2xl:flex-row justify-center items-center xl:items-start 2xl:items-end gap-12 lg:gap-14 2xl:gap-[60px]">
          {/* Multiple inputs */}
          <div
            className="max-sm:mt-5 max-sm:w-full max-lg:w-[70%] 
          w-[900px] full flex flex-col max-lg:items-center lg:flex-row gap-8 xl:gap-[60px]"
          >
            <div className="flex w-full max-w-[448px] flex-col items-start justify-start gap-8 lg:gap-[25px]">
              <RequestQuoteCustomSelect
                inputLabel="WHAT KIND OF WEBSITE"
                value={formData.kindOfWebsite}
                onChange={handleSelectChange}
                showError={showErrors.kindOfWebsite}
                optionsData={websiteKindSelectData}
                optionKey="kindOfWebsite"
              />
              <RequestQuoteCustomSelect
                inputLabel="WEBSITE DEVELOPMENT BUDGET"
                value={formData.websiteBudget}
                onChange={handleSelectChange}
                showError={showErrors.websiteBudget}
                optionsData={websiteDevelopementBudgetData}
                optionKey="websiteBudget"
              />
              <RequestQuoteCustomSelect
                inputLabel="REQUIRED TIMELINE FOR THE WEBSITE"
                value={formData.timeline}
                onChange={handleSelectChange}
                showError={showErrors.timeline}
                optionsData={websiteTimelineData}
                optionKey="timeline"
              />
              <RequestQuoteCustomInput
                inputType="text"
                inputLabel="WHAT IS YOUR WEBSITE"
                inputName="whatIsYourWebsiteText"
                value={formData.whatIsYourWebsiteText}
                onChange={handleTextInputChange}
                showError={showErrors.whatIsYourWebsiteText}
              />
            </div>
            <div
              className="flex flex-col w-full
            max-w-[448px] items-start justify-start gap-[25px]"
            >
              <RequestQuoteCustomSelect
                inputLabel="HOW LONG HAVE YOU BEEN TRADING"
                value={formData.tradingTime}
                onChange={handleSelectChange}
                showError={showErrors.tradingTime}
                optionsData={tradingDurationData}
                optionKey="tradingTime"
              />
              <RequestQuoteCustomTextArea
                inputLabel="TELL US MORE ABOUT YOUR PROJECT"
                inputName="textareaInput"
                value={formData.textareaInput}
                onChange={handleTextInputChange}
                showError={showErrors.textareaInput}
              />
            </div>
          </div>

          {/* Text area */}
          <div
            className="w-full sm:w-[70%] lg:w-fit 2xl:max-w-[386px] 2xl:w-[300px] flex flex-col-reverse xl:flex-row 2xl:flex-col items-start justify-center
                text-[#f9dd00] text-sm sm:text-[17px] font-medium leading-[160%]"
          >
            <div
              className={`rigthTextSfom duration-500 block max-h-0 overflow-hidden ${
                showText && "max-h-[400px]"
              }`}
            >
              {secondFormChecked?.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </div>
            <div className="w-full flex items-center justify-center lg:justify-end 2xl:justify-between gap-6  sm:gap-8 2xl:mt-[100px]">
              <div className="nextBtn">
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
              <button type="submit" className="nextBtn">
                <div className="nextBtI">
                  <Image
                    src="/img/Frame 43364 (2).svg"
                    width={26}
                    height={19}
                    alt="next btn"
                  />
                </div>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RequestQuoteSecondForm;
