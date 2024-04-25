"use client";

import React from "react";

interface CallIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const CallIcon: React.FC<CallIconProps> = ({ className, ...rest }) => {
  const handleCallClick = (
    e: React.MouseEvent<SVGSVGElement> | React.TouchEvent<SVGSVGElement>
  ) => {
    e.preventDefault();
    const callUrl = "tel:+5492615188484";
    window.open(callUrl, "_self");
  };

  return (
    <svg
      onMouseDown={handleCallClick}
      onTouchStart={handleCallClick}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
    </svg>
  );
};

export default CallIcon;
