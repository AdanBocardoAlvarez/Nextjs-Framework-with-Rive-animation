import Image from "next/image";
import React, { useState } from "react";

interface Option {
  id: number;
  name: string;
}

interface Props {
  inputLabel: string;
  value: Option;
  onChange: (value: Option, optionKey: string) => void;
  showError: boolean;
  optionsData: Option[];
  optionKey: string;
}

const RequestQuoteCustomSelect: React.FC<Props> = ({
  inputLabel,
  value,
  onChange,
  showError,
  optionsData,
  optionKey,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: Option) => {
    onChange(option, optionKey);
    setIsOpen(false);
  };

  return (
    <div className="w-full relative lg:max-w-[448px] flex flex-col items-start justify-center gap-[10px]">
      <span className="req_quote-label">{inputLabel}</span>
      <div className="relative inline-block w-full">
        <div>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-full h-10 md:h-14 p-2 rounded-xl box-border focus:shadow-[0_0_0_0.2rem_#a6d5fa] duration-300 text-base bg-white text-black cursor-pointer outline-none text-left"
          >
            {value?.name || "Select an option"}
            <div className="absolute z-[1] right-[2px] top-2 md:top-4 w-[4%] md:w-[5%]">
              <Image
                className="w-full h-auto"
                alt="select arrow"
                width={20.6}
                height={20.72}
                src="img/Frame 43365 (1).svg"
              />
            </div>
          </button>
        </div>
        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-30">
            <div className="py-1">
              {optionsData.map((option) => (
                <button
                  key={option.id}
                  onClick={() => handleOptionClick(option)}
                  className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-gray-900 text-left"
                >
                  {option.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      {showError && (
        <span className="req_quote-error">Please select an option</span>
      )}
    </div>
  );
};

export default RequestQuoteCustomSelect;
