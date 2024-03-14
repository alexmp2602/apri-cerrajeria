import React, { useState } from 'react';

interface WhatsappIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

const WhatsappIcon: React.FC<WhatsappIconProps> = ({ className, ...rest }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleTouchStart = () => {
    setIsHovered(true);
  };

  const handleWhatsAppClick = (e: React.MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
    const whatsappUrl = 'https://wa.me/+542615188484?text=¡Hola!%20Me%20gustaría%20saber%20más%20sobre%20sus%20servicios.';
    window.open(whatsappUrl, '_blank');
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill={isHovered ? 'gray' : 'green'}
      className={`text-white ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onClick={handleWhatsAppClick}
      {...rest}
    >
      <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
      <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
    </svg>
  );
}

export default WhatsappIcon;
