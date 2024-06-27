import React from "react";

interface RequestQuoteCustomInputProps {
  inputType: string;
  inputLabel: string;
  inputName: string;
  value: string;
  onChange: any;
  showError: boolean;
}

const RequestQuoteCustomInput: React.FC<RequestQuoteCustomInputProps> = ({
  inputType,
  inputLabel,
  inputName,
  value,
  onChange,
  showError,
}) => {
  return (
    <div className="w-full relative">
      <label
        className="w-full flex flex-col items-start justify-center 
    gap-[10px]"
      >
        <span className="req_quote-label">{inputLabel}</span>
        <input
          type={inputType}
          value={value}
          name={inputName}
          onChange={onChange}
          className="outline-none w-full h-10 md:h-14 p-2 rounded-xl box-border focus:shadow-[0_0_0_0.2rem_#a6d5fa] duration-300 transition-all text-base"
        />
      </label>
      {showError && (
        <span className="req_quote-error">{inputLabel} is required</span>
      )}
    </div>
  );
};

export default RequestQuoteCustomInput;
