import React from "react";
interface FeaturesProps {
    iconSrc: string;
    text: string;
  }

  const Features: React.FC<FeaturesProps> = ({ iconSrc, text }) => (
    <div className="flex gap-1.5">
      <img src={iconSrc} alt="" className="shrink-0 w-6 aspect-square" />
      <div className="my-auto">{text}</div>
    </div>
  );
  export default Features
