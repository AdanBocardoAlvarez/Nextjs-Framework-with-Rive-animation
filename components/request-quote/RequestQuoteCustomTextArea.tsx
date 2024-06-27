import React from "react";

interface Props {
  inputLabel: string;
  inputName: string;
  value: string;
  onChange: any;
  showError: boolean;
}

const RequestQuoteCustomTextArea: React.FC<Props> = ({
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
        <textarea
          value={value}
          name={inputName}
          onChange={onChange}
          className="outline-none w-full h-[152px] p-2 rounded-xl box-border focus:shadow-[0_0_0_0.2rem_#a6d5fa] duration-300 transition-all text-base"
        />
      </label>
      {showError && (
        <span className="req_quote-error">This field is required</span>
      )}
    </div>
  );
};

export default RequestQuoteCustomTextArea;
