"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        isScrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-white"
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

          {/* Hamburger Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 w-full bg-gray-800 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-gray-800 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-0.5 w-full bg-gray-800 transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </button>

          {/* Navigation */}
          <nav
            className={`
            lg:block
            ${
              isMenuOpen
                ? "lg:relative absolute top-20 left-0 right-0 bg-white/80 backdrop-blur-lg shadow-sm"
                : "hidden"
            }
            text-right
            bg-white lg:bg-transparent
            lg:p-0 p-5 
          `}
          >
            <ul
              className="
              lg:flex lg:space-x-8
              lg:space-y-0 space-y-4
            "
            >
              <li>
                <Link href="/" className="text-gray-800 hover:text-red-500" onClick={() => setIsMenuOpen(false)}>
                  Etusivu
                </Link>
              </li>
              <li>
                <Link
                  href="/kuvagalleria"
                  className="text-gray-800 hover:text-red-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kuvagalleria
                </Link>
              </li>
              <li>
                <Link
                  href="/kokoonpano"
                  className="text-gray-800 hover:text-red-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kokoonpano
                </Link>
              </li>
              <li>
                <Link
                  href="/kuoronjohtaja"
                  className="text-gray-800 hover:text-red-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kuoronjohtaja
                </Link>
              </li>
              <li>
                <Link
                  href="/arviot"
                  className="text-gray-800 hover:text-red-500"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Arviot
                </Link>
              </li>
              <li>
                <Link
                  href="/keikkakalenteri"
                  className="text-gray-800 hover:text-red-500"
                  onClick={() => setIsMenuOpen(false)}
                >
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
