import React from 'react'

const LocationInput: React.FC<{
    iconSrc: string;
    label: string;
    value: string;
  }> = ({ iconSrc, label, value }) => (
    <div className="flex gap-2 my-auto">
      <img src={iconSrc} alt="" className="shrink-0 my-auto w-6 aspect-square" />
      <div className="flex flex-col">
        <div className="text-xs leading-4 text-zinc-400">{label}</div>
        <div className="mt-2 text-base font-medium leading-6 text-neutral-900">
          {value}
        </div>
      </div>
    </div>
  );

export default LocationInput