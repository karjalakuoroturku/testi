"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-sm shadow-sm" 
          : "bg-white"
      }`}
    >
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src="/assets/logo.png" 
              alt="Turun Karjalakuoro" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Navigation */}
          <nav>
            <ul className="flex space-x-8">
              <li>
                <Link href="/" className="text-gray-800 hover:text-red-500">
                  Etusivu
                </Link>
              </li>
              <li>
                <Link href="/kuvagalleria" className="text-gray-800 hover:text-red-500">
                  Kuvagalleria
                </Link>
              </li>
              <li>
                <Link href="/kokoonpano" className="text-gray-800 hover:text-red-500">
                  Kokoonpano
                </Link>
              </li>
              <li>
                <Link href="/kuoronjohtaja" className="text-gray-800 hover:text-red-500">
                  Kuoronjohtaja
                </Link>
              </li>
              <li>
                <Link href="/arviot" className="text-gray-800 hover:text-red-500">
                  Arviot
                </Link>
              </li>
              <li>
                <Link href="/keikkakalenteri" className="text-gray-800 hover:text-red-500">
                  Keikkakalenteri
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
