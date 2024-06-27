import React from "react";

interface InputProps {
  item: {
    label: string;
    id: string;
    type: string;
  };
  error?: string;
  onChange: (id: string, value: string) => void;
}

const SocialmediaBottomsectionInput: React.FC<InputProps> = ({
  item,
  error,
  onChange,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(item.id, event.target.value);
  };

  return (
    <div className="flex flex-col gap-[10px] w-full">
      <label
        htmlFor={item.id}
        className="text-[14px] lg:text-[17px] text-white font-normal font-montserrat leading-[160%]"
      >
        {item.label}
      </label>
      <input
        type={item.type}
        name={item.id}
        id={item.id}
        onChange={handleInputChange}
        className={`rounded-[12px] bg-white sm:max-w-[323px] 2xl:min-w-[258px] w-full h-[45px] md:h-[35px] lg:h-[56px] outline-none p-1 lg:p-2 font-montserrat max-sm:min-w-full ${
          error ? "border border-red-500" : ""
        }`}
      />
      {error && (
        <span className="text-red-500 text-[12px] lg:text-[14px]">{error}</span>
      )}
    </div>
  );
};

export default SocialmediaBottomsectionInput;
