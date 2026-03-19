import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/images/Ar Logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();
  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = ["home", "about", "skills", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.querySelector(`#${section}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
  if (isMobileMenuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [isMobileMenuOpen]);


  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (location.pathname !== "/") {
      // If not on home page, navigate to home with hash
      navigate("/" + href);
    } else {
      // If on home page, scroll smoothly
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      {/* Background Overlay with Blur */}
      <div
        className={`fixed inset-0 bg-slate-900/20 backdrop-blur-[2px] transition-all duration-500 md:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 md:pt-6">
        {/* Professional Pill-Shaped Navbar Container */}
        <div
          className={`flex justify-between items-center transition-all duration-500 ${
            isScrolled
              ? "bg-slate-100/95 backdrop-blur-xl border border-slate-300/80 shadow-xl"
              : "bg-slate-50/85 backdrop-blur-lg border border-slate-200/70 shadow-lg"
          } rounded-full px-4 md:px-6 py-3 md:py-3.5`}
        >
          {/* Left Side: Logo */}
          <div className="flex-1 flex justify-start">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "#home")}
              className="flex items-center group transition-all duration-300"
            >
              <div>
                <img
                  src={logo}
                  alt="ArCoders Logo"
                  className="rounded-full h-14 md:h-14 w-14 md:w-14 object-contain transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(56,189,248,0.6)] group-hover:brightness-110 active:scale-95"
                />
              </div>
            </a>
          </div>

          {/* Center Side: Desktop Navigation - Pill Shaped Links */}
          <div className="hidden md:flex items-center gap-2 bg-slate-100/40 backdrop-blur-md rounded-full p-1.5 border border-slate-300/60 shadow-inner">
            {navLinks.map((link) => {
              const section = link.href.substring(1);
              const isActive = activeSection === section;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-5 py-2 rounded-full font-bold text-sm transition-all duration-300 border-2 ${
                    isActive
                      ? "text-white bg-gradient-to-r from-sky-500 to-blue-600 border-sky-400 shadow-[0_4px_12px_rgba(14,165,233,0.35)] -translate-y-[1px]"
                      : "text-slate-700 bg-white/60 border-slate-200/50 shadow-sm hover:text-sky-600 hover:bg-white hover:border-sky-200 hover:shadow-md hover:-translate-y-[1px]"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Side: Mobile Menu Button */}
          <div className="flex-1 flex justify-end">
            <button
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-white/80 hover:bg-white transition-all duration-300 border border-slate-200/60 shadow-sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5">
                <span
                  className={`absolute left-0 w-5 h-0.5 bg-slate-700 rounded-full transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen
                      ? "rotate-45 top-1/2 -translate-y-1/2"
                      : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 w-5 h-0.5 bg-slate-700 rounded-full transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen
                      ? "opacity-0 top-1/2 -translate-y-1/2"
                      : "top-1/2 -translate-y-1/2"
                  }`}
                />
                <span
                  className={`absolute left-0 w-5 h-0.5 bg-slate-700 rounded-full transition-all duration-300 ease-in-out ${
                    isMobileMenuOpen
                      ? "-rotate-45 top-1/2 -translate-y-1/2"
                      : "bottom-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Pill Shaped Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 mt-3 ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/80 p-3 space-y-2">
            {navLinks.map((link) => {
              const section = link.href.substring(1);
              const isActive = activeSection === section;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`block px-5 py-3 rounded-full font-bold text-sm transition-all duration-300 border-2 ${
                    isActive
                      ? "text-white bg-gradient-to-r from-sky-500 to-blue-600 border-sky-400 shadow-[0_4px_12px_rgba(14,165,233,0.3)]"
                      : "text-slate-700 bg-slate-50/80 border-slate-200/60 shadow-sm hover:bg-white hover:text-sky-600 hover:border-sky-100 hover:shadow-md"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
