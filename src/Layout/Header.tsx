'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

const NAV_BG = "#232536";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blogs", label: "Blogs" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Sticky + shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300  ${
        scrolled ? "shadow-lg" : ""
      }`}
      style={{ background: NAV_BG }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        {/* Logo and Name */}
        <div className="flex items-center space-x-2">
          <img
            src="https://static.vecteezy.com/system/resources/previews/043/213/057/non_2x/car-logo-against-red-and-blue-background-design-a-sleek-emblem-for-an-automotive-repair-business-minimalist-simple-modern-logo-design-free-vector.jpg"
            alt="Logo"
            className="h-9 w-9 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
          />
          <span className="text-white text-2xl font-bold tracking-wider animate-fade-in">
            CarBlog
          </span>
        </div>
        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`relative px-2 py-1 font-medium group transition
                  ${isActive ? "text-white" : "text-gray-300"}
                `}
              >
                {label}
                {/* Underline for active link */}
                {isActive && (
                  <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-indigo-400 rounded-full transition-all duration-300"></span>
                )}
              </Link>
            );
          })}
          <button
            type="submit"
            className="px-6 py-2 rounded-full bg-white hover:bg-indigo-700 font-semibold transition"
          >
            Subscribe
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-white p-2 rounded hover:bg-indigo-700 transition"
          onClick={() => setNavOpen((v) => !v)}
          aria-label={navOpen ? "Close menu" : "Open menu"}
        >
          {navOpen ? (
            <FiX className="h-7 w-7 animate-spin-slow" />
          ) : (
            <FiMenu className="h-7 w-7" />
          )}
        </button>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#232536] transition-all duration-500 overflow-y-auto ${
          navOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center py-4 space-y-2 w-full">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`w-full text-center py-2 text-lg font-semibold rounded transition-all duration-200
                  ${isActive ? "text-white" : "text-gray-400"} hover:bg-indigo-700`}
                onClick={() => setNavOpen(false)}
              >
                {label}
              </Link>
            );
          })}
          <button
            type="submit"
            className="px-6 py-2 rounded-full bg-white hover:bg-indigo-700 font-semibold transition"
          >
            Subscribe
          </button>
        </div>
      </div>
    </nav>
  );
}
