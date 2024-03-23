import React from "react";
import { transportOptions } from "../../data.tsx";
import TransportOption from "./transportOptions/TransportOption.tsx";
import LocationInput from "./location/LocationInput.tsx";
const SearchBase = () => {
  return (
    <div className="flex relative flex-col justify-center py-0.5 mt-6 max-w-full rounded-xl bg-zinc-100 w-[1020px]">
      <div className="flex flex-col justify-center bg-white rounded-xl max-md:max-w-full">
        <div className="flex flex-col justify-center border-b border-gray-200 border-solid max-md:max-w-full">
          <div className="flex flex-col justify-center py-px bg-white border-b border-solid border-zinc-100 max-md:max-w-full">
            <div className="flex justify-center items-center px-16 bg-white max-md:px-5 max-md:max-w-full">
              <div className="flex gap-0 items-start px-px max-w-full w-[568px] max-md:flex-wrap">
                {transportOptions.map((option) => (
                  <TransportOption key={option.text} {...option} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 justify-center p-4 bg-white rounded-none shadow-sm max-md:flex-wrap">
        <div className="flex flex-auto gap-5 justify-between px-6 py-px rounded-lg border border-solid border-neutral-200 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
          <LocationInput
            iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/5435a72a70bf4d1f85f69258d73f5117b1e7a9e2fbc979654e20505dbe4087c4?apiKey=344317555e004d25aa144763ecc601e6&"
            label="Nơi xuất phát"
            value="Hà Nội"
          />
          <div className="flex gap-4 justify-between max-md:flex-wrap">
            <div className="shrink-0 w-px bg-zinc-100 h-[54px]" />
            <LocationInput
              iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/dfa8e38ce673aec61c9f9270a2c103bb50421d027f6b5a0fdac3735262ee0612?apiKey=344317555e004d25aa144763ecc601e6&"
              label="Nơi đến"
              value="Bắc Yên - Sơn La"
            />
            <div className="shrink-0 w-px bg-zinc-100 h-[54px]" />
            <div className="flex gap-2 my-auto">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5536f184353393b89b6756fdf30f00900ea148ef70dd13dfc934ea78deb4d592?apiKey=344317555e004d25aa144763ecc601e6&"
                alt=""
                className="shrink-0 my-auto w-6 aspect-square"
              />
              <div className="flex flex-col">
                <div className="text-xs tracking-normal leading-4 text-zinc-400">
                  Ngày đi
                </div>
                <div className="mt-1.5 text-base font-medium leading-6 text-neutral-900">
                  T2, 18/03/2024
                </div>
              </div>
            </div>
            <div className="flex gap-5 text-base font-medium leading-6 text-blue-600">
              <div className="shrink-0 w-px bg-zinc-100 h-[54px]" />
              <div className="flex-auto my-auto">Thêm ngày về</div>
            </div>
          </div>
        </div>

        <button className="justify-center px-9 py-5 text-lg font-medium leading-6 text-center bg-yellow-300 rounded-lg shadow-sm text-neutral-900 max-md:px-5">
          Tìm kiếm
        </button>
      </div>
    </div>
  );
};

export default SearchBase;
