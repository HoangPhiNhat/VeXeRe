import React from "react";
import { Link } from "react-router-dom";
interface RouteItemProps {
    start_end: string;
  value: string;
}
const FooterItem: React.FC<RouteItemProps> = ({ start_end, value }) => {
  return (
    <Link to={start_end} className="mt-6 w-full underline">
      {value}
    </Link>
  ); // đoạn này dùng để lây ra những cái tuyến đường k
};

export default FooterItem;
