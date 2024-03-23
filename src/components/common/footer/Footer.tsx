import React from "react";
import { routes } from "../../../data";
import FooterItem from "./FooterItem";
const Footer = () => {
  return (
    <>
      <footer>
        <section className="flex flex-col px-5 text-xs font-semibold leading-5 text-neutral-900">

          <h2 className="w-full text-2xl leading-8">Tuyến đường</h2>{" "}
          {routes.map((route) => (
            <FooterItem key={route.value} {...route} />
          ))}
        </section>
      </footer>
    </>
  );
};

export default Footer;
