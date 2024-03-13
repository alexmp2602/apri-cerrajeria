"use client"

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface HeaderProps {
  isPrivacyPolicyPage?: boolean;
}

export default function Header({ isPrivacyPolicyPage }: HeaderProps) {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (!isPrivacyPolicyPage && window.scrollY > 70) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!isPrivacyPolicyPage && window.scrollY > 70) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isPrivacyPolicyPage]);

  const contactoLink = isPrivacyPolicyPage ? "/#contacto" : "#contacto";

  const handleNavLinkClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = event.currentTarget.hash.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offset = 60; 
      const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`px-4 lg:px-6 h-16 flex items-center justify-between fixed w-full z-10 ${
        (scrolling || isPrivacyPolicyPage) ? "bg-gray-800" : "bg-transparent"
      } text-white transition-colors duration-300`}
    >
      <div>
        <Link href="/">
          <div className="flex items-center space-x-2">
            <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center">
              <Image
                alt="Cerrajería 24 horas"
                height={30}
                src="/apri.png"
                width={30}
              />
            </div>
          </div>
        </Link>
      </div>
      <nav className="flex gap-4 sm:gap-6">
        {!isPrivacyPolicyPage && (
          <>
            <Link href="/#servicios" onClick={handleNavLinkClick} className="text-sm hover:underline">
              Servicios
            </Link>
            <Link href="/#nosotros" onClick={handleNavLinkClick} className="text-sm hover:underline">
              Nosotros
            </Link>
          </>
        )}
        <Link href={contactoLink} onClick={handleNavLinkClick} className="text-sm hover:underline">
          Contacto
        </Link>
      </nav>
    </header>
  );
}
