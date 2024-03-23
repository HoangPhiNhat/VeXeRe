import React from "react";
import { tours } from "../../data";

interface PopularRouteProps {
  thumbnailUrl: string;
}

const PopularRoute: React.FC<PopularRouteProps> = () => {
  return (
    <div className="container mx-auto">
      <div className="flex gap-3 justify-center self-center px-5 max-w-full w-[968px] max-md:flex-wrap">
        {tours.map((tour, index) => (
          <div key={index}>
            <img
              style={{ width: "333px", height: "216px" }}
              alt=""
              srcSet={tour.thumbnailUrl}
              className="mt-5 object-cover"
            />
            <div className="flex flex-col flex-1 items-start pt-5 pr-14 pb-11 pl-3 rounded-none bg-red-400 max-md:pr-5">
              <div className="text-lg font-semibold leading-7 text-white">
                {tour.distance}
              </div>
              <div className="flex gap-1.5 mt-1.5">
                <div className="grow text-sm leading-4 text-white">
                  Từ {tour.newPrice}đ
                </div>
                <div className="text-xs leading-4 text-white text-opacity-60">
                  {tour.price}đ
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularRoute;
