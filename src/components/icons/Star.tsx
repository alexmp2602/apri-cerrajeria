import React from "react";

interface StarIconProps {
  className?: string; 
}

const StarIcon: React.FC<StarIconProps> = ({ className }) => (
  <svg
    className={`w-6 h-6 ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 17.75l-6.172 3.245 1.179-6.873-5-4.867 6.9-1 3.086-6.253l3.086 6.253 6.9 1-5 4.867 1.179 6.873z" />
  </svg>
);

export default StarIcon;
