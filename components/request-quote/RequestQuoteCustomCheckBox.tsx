interface Props {
  isChecked: boolean;
  label: string;
  handleCheckBoxChange: any;
  data: any;
}

const RequestQuoteCustomCheckBox: React.FC<Props> = ({
  isChecked,
  label,
  handleCheckBoxChange,
  data,
}) => {
  return (
    <div
      onClick={() => handleCheckBoxChange(data.id)}
      className="flex items-center justify-center gap-2 md:gap-3 cursor-pointer"
    >
      <div
        className={`size-5 md:size-8 p-0.5 md:p-2 rounded md:rounded-xl 
      ${
        isChecked ? "bg-blue-500" : "bg-white"
      } flex items-center justify-center`}
      >
        {isChecked && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="size-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 12.75 6 6 9-13.5"
            />
          </svg>
        )}
      </div>
      <span className="req_quote-label">{data.label}</span>
    </div>
  );
};

export default RequestQuoteCustomCheckBox;
