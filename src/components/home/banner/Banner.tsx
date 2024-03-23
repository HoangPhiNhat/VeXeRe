import React from "react";
import SearchBase from "../../searchBase/SearchBase.tsx";
import Features from "../features/Features.tsx";
import { features } from "../../../data.tsx";
import "./banner.css";
type Feature = {
  text: string;
  // Các thuộc tính khác của feature nếu có
};
const Banner = () => {
  return (
    <div className="flex overflow-hidden relative flex-col items-center pt-10 min-h-[480px]">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c67d43a9bde9a6eeff5d814a8cc8e4bdb4395100ed25faf95ca89ad33532128?apiKey=344317555e004d25aa144763ecc601e6&"
        alt="Background"
        className="object-cover absolute inset-0 size-full"
      />
      <h1 className="relative mt-14 text-3xl font-medium leading-9 text-center text-white max-md:mt-10 max-md:max-w-full">
        Vexere - Cam kết hoàn 150% nếu nhà xe không giữ chỗ
      </h1>
      <SearchBase />
      <section className="flex relative justify-center items-center self-stretch px-16 py-5 mt-16 w-full text-base font-medium text-white bg-black bg-opacity-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 justify-between max-w-full w-[767px] max-md:flex-wrap">
          {features.map((feature: Feature) => (
            <Features iconSrc={""} key={feature.text} {...feature} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Banner;
