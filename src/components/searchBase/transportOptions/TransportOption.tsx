import React from "react";

interface TransportOptionProps {
  iconSrc: string;
  text: string;
  isActive?: boolean | undefined;
  discount?: string | undefined;
  isNew?: boolean | undefined;
}

const TransportOption: React.FC<TransportOptionProps> = ({
  iconSrc,
  text,
  isActive = false,
  discount,
  isNew,
}) => (
  <div
    className={`relative flex flex-col items-start px-6 py-5 ${
      isActive
        ? "text-blue-600 bg-white border-b-2 border-blue-600 border-solid"
        : "bg-white bg-opacity-20"
    } max-md:pl-5`}
  >
    {discount && (
      <div className="absolute top-1 right-0 self-end px-0.5 py-1 text-xs font-semibold leading-4 text-center text-white whitespace-nowrap bg-red-500 rounded-2xl">
        {discount}
      </div>
    )}
    {isNew && (
      <div className="absolute top-1 right-0 self-end px-2 py-1 text-xs font-semibold leading-4 text-center text-white whitespace-nowrap bg-red-500 rounded-2xl">
        Mới
      </div>
    )}
    <div className="flex ">
      <img src={iconSrc} alt="" className={`shrink-0 w-6 aspect-square`} />

      <div className={`${isActive ? "my-auto" : "mt-1"} text-base leading-6`}>
        {text}
      </div>
    </div>
  </div>
);

export default TransportOption;
