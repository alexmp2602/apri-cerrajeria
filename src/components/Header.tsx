"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface HeaderProps {
  isPrivacyPolicyPage?: boolean;
}

export default function Header({ isPrivacyPolicyPage }: HeaderProps) {
  const [scrolling, setScrolling] = useState(false);

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
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`px-4 lg:px-6 h-16 flex items-center justify-between fixed w-full z-10 ${
        scrolling || isPrivacyPolicyPage ? "bg-gray-800" : "bg-transparent"
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
      <nav className="flex gap-4 sm:gap-6 items-center">
        {!isPrivacyPolicyPage && (
          <>
            <Link
              href="/#servicios"
              onClick={handleNavLinkClick}
              className="text-sm hover:underline"
            >
              Servicios
            </Link>
            <Link
              href="/#nosotros"
              onClick={handleNavLinkClick}
              className="text-sm hover:underline"
            >
              Nosotros
            </Link>
          </>
        )}
        <Link
          href={contactoLink}
          onClick={handleNavLinkClick}
          className="text-sm hover:underline"
        >
          <div className="flex items-center gap-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
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
            +5492615188484
          </div>
        </Link>
      </nav>
    </header>
  );
}
