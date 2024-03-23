import React from "react";
import Banner from "./banner/Banner.tsx";
import PopularRoute from "./PopularRoute.tsx";
const Home = () => {
  return (
    <>
      <Banner />
      <PopularRoute thumbnailUrl={""} />
    </>
  );
};

export default Home;
