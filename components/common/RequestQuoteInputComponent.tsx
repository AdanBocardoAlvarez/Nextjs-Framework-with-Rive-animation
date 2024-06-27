import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { InputTextarea } from "primereact/inputtextarea";
import Image from "next/image";

interface InputComponentProps {
  data: {
    Title: string;
    InputFor: string;
    Type: string;
    Options: string | null;
  };
  onChange: any;
  error: string;
  value: any;
}

const RequestQuoteInputComponent: React.FC<InputComponentProps> = ({
  data,
  onChange,
  error,
  value,
}) => {
  const optionsArray = data.Options?.split("\n");

  const formattedOptions = optionsArray?.map((option) => {
    return {
      name: option.trim(),
      code: option.trim(),
    };
  });

  const [checkData, setCheckData] = useState(false);

  const handleCheckChange = (e: boolean | undefined) => {
    if (typeof e === "boolean") {
      const newValue = e;
      setCheckData(newValue);
      onChange(data.InputFor, newValue);
    }
  };

  return (
    <>
      {data.Type === "Text" ? (
        <div className={`InpuCont standarInput ${error && "inputError"}`}>
          <label htmlFor={data.InputFor} className="req_quote-label">
            {data.Title}
          </label>
          <InputText
            id={data.InputFor}
            value={value}
            onChange={onChange}
            invalid={error ? true : false}
          />
          <div className="req_quote-error">{error}</div>
        </div>
      ) : data.Type === "Email" ? (
        <div className={`InpuCont standarInput ${error && "inputError"}`}>
          <label htmlFor={data.InputFor} className="req_quote-label">
            {data.Title}
          </label>
          <InputText
            id={data.InputFor}
            value={value}
            onChange={onChange}
            invalid={error ? true : false}
          />
          <div className="req_quote-error">{error}</div>
        </div>
      ) : data.Type === "Checkbox" ? (
        <div className={`checkboxCont ${error && "inputError"}`}>
          <Checkbox
            id={data.InputFor + "1"}
            checked={checkData}
            onChange={(e) => handleCheckChange(e.checked)}
            invalid={error ? true : false}
          />
          <label htmlFor={data.InputFor} className="req_quote-label">
            {data.Title}
          </label>
        </div>
      ) : data.Type === "Text Area" ? (
        <div className={`textareaCont standarInput ${error && "inputError"}`}>
          <label htmlFor={data.InputFor} className="req_quote-label">
            {data.Title}
          </label>
          <InputTextarea
            id={data.InputFor}
            value={value}
            onChange={onChange}
            invalid={error ? true : false}
          />
          <div className="req_quote-error">{error}</div>
        </div>
      ) : data.Type === "Optionlist" ? (
        <div className={`selectCont standarInput ${error && "inputError"}`}>
          <label htmlFor={data.InputFor} className="req_quote-label">
            {data.Title}
          </label>
          <select id={data.InputFor} value={value} onChange={onChange} required>
            <option value="">Select</option>
            {formattedOptions?.map((info, index) => (
              <option key={index} value={info.name}>
                {info.name}
              </option>
            ))}
          </select>
          <div
            className="imgContSelect absolute z-[1] right-[2px] top-10 
          md:top-[60px] w-[4%] md:w-[5%]"
          >
            <Image
              className="w-full h-auto"
              alt="select arrow"
              width={20.6}
              height={20.72}
              src="img/Frame 43365 (1).svg"
            />
          </div>
          <div className="req_quote-error">{error}</div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default RequestQuoteInputComponent;
