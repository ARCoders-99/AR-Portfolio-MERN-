import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import logo from "../assets/images/Ar Logo.png";
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/" + href);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="relative bg-[#030617] text-slate-400 py-20 overflow-hidden border-t border-slate-800/60">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-sky-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center md:text-left">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-6">
              <img 
                src={logo} 
                alt="ArCoders Logo" 
                className="h-16 md:h-20 w-auto object-contain transition-all duration-500 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(56,189,248,0.6)] brightness-110 rounded-full"
              />
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs font-light">
              Designing and building 
              <span className="text-white font-medium"> premium digital solutions</span> with a focus on 
              performance and professional aesthetics.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-[0.2em]">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    onClick={(e) => handleLinkClick(e, `#${link.toLowerCase()}`)}
                    className="text-slate-400 hover:text-sky-400 transition-colors text-sm font-medium"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links - Fixed with direct <a> tags for maximum reliability */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-white font-bold mb-6 text-xs uppercase tracking-[0.2em]">Connect With Me</h4>
            <div className="flex gap-4">
              {/* GitHub */}
              <a
                href="https://github.com/ARCoders-99/ARCoders-99"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 shadow-sm border border-slate-800 text-xl text-slate-100 bg-slate-900/50 backdrop-blur-sm md:text-slate-400 md:hover:text-white hover:bg-slate-900 hover:border-slate-900 transform hover:-translate-y-1"
                aria-label="GitHub"
              >
                <SiGithub />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 shadow-sm border border-slate-800 text-xl text-blue-600 bg-slate-900/50 backdrop-blur-sm md:text-slate-400 md:hover:text-white hover:bg-blue-600 hover:border-blue-600 transform hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              {/* Email - Direct Gmail link to ensure it opens in the browser if no local client is found */}
              <a
                href="https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=cm&to=abdulrehman.codeworks@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-2xl transition-all duration-300 shadow-sm border border-slate-800 text-xl text-rose-500 bg-slate-900/50 backdrop-blur-sm md:text-slate-400 md:hover:text-white hover:bg-rose-500 hover:border-rose-500 transform hover:-translate-y-1"
                aria-label="Email"
              >
                <MdEmail />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/60 pt-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-slate-500 font-medium tracking-wider uppercase">
              © {currentYear} AbdulRehman • Portfolio
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-light">
              <span>Built with Precision</span>
              <span className="text-slate-800">|</span>
              <span className="text-sky-400 font-medium">MERN Stack</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
