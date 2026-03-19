import React from "react"; // Import React (needed for JSX)
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";
import { FiSend, FiLayout, FiArrowRight, FiChevronRight } from "react-icons/fi";

const Hero = () => {

  /* ================= SCROLL HANDLERS ================= */

  // Scroll smoothly to the CONTACT section
  const handleScrollToContact = () => {
    const element = document.querySelector("#contact"); // Select contact section by id
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Smooth scroll
    }
  };

  // Scroll smoothly to the PROJECTS section
  const handleScrollToProjects = () => {
    const element = document.querySelector("#projects"); // Select projects section by id
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Smooth scroll
    }
  };

  return (
    <section
      id="home" // Home section id
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-sky-100 via-blue-100 to-cyan-100 pt-16 md:pt-20"
      // relative → allows absolute positioned children
      // min-h-screen → full viewport height
      // overflow-hidden → hides overflowing background shapes
    >
      {/* ================= BACKGROUND EFFECTS ================= */}
      {/* This container holds all background visuals */}
      <div className="absolute inset-0 overflow-hidden">
        {/* absolute + inset-0 → covers entire hero section */}

        {/* ================= GRADIENT ORBS ================= */}
        {/* Large blurred gradient circles for depth */}

        {/* Bottom-left large orb */}
        <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] md:w-[800px] md:h-[800px] bg-gradient-to-br from-blue-300/55 via-sky-300/50 to-slate-300/45 rounded-full blur-[70px] md:blur-[130px]" />

        {/* Center orb (perfectly centered using translate) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] md:w-[700px] md:h-[700px] bg-gradient-to-br from-sky-300/50 via-blue-200/45 to-cyan-200/40 rounded-full blur-[60px] md:blur-[120px]" />

        {/* ================= ADDITIONAL ORBS ================= */}

        {/* Upper-right orb */}
        <div className="absolute top-[25%] right-[40%] md:top-40 md:right-1/3 w-[40vw] h-[40vw] md:w-[500px] md:h-[500px] bg-gradient-to-br from-cyan-300/45 to-sky-300/50 rounded-full blur-[60px] md:blur-[100px]" />

        {/* Bottom-left floating orb */}
        <div className="absolute bottom-20 left-10 md:bottom-32 md:left-1/3 w-[35vw] h-[35vw] md:w-[450px] md:h-[450px] bg-gradient-to-br from-blue-300/50 to-sky-200/40 rounded-full blur-[50px] md:blur-[90px]" />

        {/* Upper-left smaller orb */}
        <div className="absolute top-32 left-10 md:top-1/4 md:left-1/5 w-[30vw] h-[30vw] md:w-[400px] md:h-[400px] bg-gradient-to-br from-sky-300/40 to-blue-200/35 rounded-full blur-[45px] md:blur-[85px]" />

        {/* ================= GEOMETRIC SHAPES ================= */}
        {/* Sharp shapes for modern UI look */}

        {/* Rotated square (top-right) */}
        <div className="absolute top-32 right-8 md:top-40 md:right-20 w-24 h-24 md:w-28 md:h-28  lg:w-28 lg:h-28 border-[2px] border-sky-400/40 rounded-3xl rotate-45 backdrop-blur-md bg-sky-50/20 shadow-2xl shadow-sky-300/30" />

        {/* Circle shape (bottom-left) */}
        <div className=" absolute bottom-24 left-8 md:bottom-48 md:left-24 w-20 h-20 md:w-40 md:h-40 border-[3px] border-blue-400/45 rounded-full backdrop-blur-md bg-blue-50/25 shadow-2xl shadow-blue-300/30" />

        {/* Small tilted square (right side) */}
        <div className="absolute top-1/2 right-12 md:top-2/3 md:right-1/4 w-14 h-14 md:w-28 md:h-28 border-2 border-sky-300/50 rounded-xl rotate-12 backdrop-blur-md bg-sky-50/20 shadow-xl shadow-sky-200/30" />

        {/* Medium tilted box */}
        <div className=" hidden md:block lg:block absolute top-32 right-[20%] md:top-1/5 md:right-1/3 w-16 h-16 md:w-36 md:h-36 border-2 border-blue-400/40 rounded-2xl rotate-[25deg] backdrop-blur-sm bg-blue-50/20 shadow-lg shadow-blue-300/25" />

        {/* ================= GRID + OVERLAYS ================= */}

        {/* Soft light overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/8 to-white/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-50/15 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-blue-50/10 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/25 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* ================= MAIN CONTENT ================= */}
      {/* z-10 keeps content above background */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">

          {/* Availability badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/90 backdrop-blur-md border border-slate-200/80 rounded-full shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            <span className="text-sm font-semibold text-slate-600">
              Available for New Projects
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900">
            Hi, I'm{" "}
            <span className="block bg-gradient-to-r from-sky-600 to-slate-700 bg-clip-text text-transparent">
              AbdulRehman
            </span>
          </h1>

          {/* Executive MERN Role Badge */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="relative flex items-center gap-4 px-8 py-3 bg-white/60 backdrop-blur-xl border border-slate-200/50 rounded-2xl shadow-sm">
                <h2 className="text-sm md:text-base font-bold text-slate-700 tracking-[0.2em] uppercase">
                  MERN Stack <span className="text-sky-600">Developer</span>
                </h2>
              
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Building robust, scalable applications with modern technologies.
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center mt-12 px-4 sm:px-0">
            {/* Primary Button: Get In Touch */}
            <button
              onClick={handleScrollToContact}
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold transition-all duration-300 hover:bg-slate-800 shadow-xl shadow-slate-200 hover:shadow-2xl hover:shadow-slate-300 transform hover:-translate-y-1 active:scale-95 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-sky-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <FiSend className="text-xl group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative">Get In Touch</span>
              <FiArrowRight className="text-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </button>

            {/* Secondary Button: View My Work */}
            <button
              onClick={handleScrollToProjects}
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/40 border-sky-500 backdrop-blur-xl border-2 border-sky-500 text-slate-800 rounded-2xl font-bold transition-all duration-300 hover:bg-white/60 hover:border-sky-600 shadow-lg shadow-slate-100/50 hover:shadow-xl hover:shadow-sky-100 transform hover:-translate-y-1 active:scale-95"
            >
              <FiLayout className="text-xl group-hover:text-sky-500 transition-colors duration-300" />
              <span>View My Work</span>
              <FiChevronRight className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
