"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import Link from "next/link";
import urlFor from "@/utils/urlFor";

const Navbar = ({ utils }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const controls = useAnimation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleDropdown = (dropdownName: string) =>
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) controls.start({ backgroundColor: "#f1b8c6" });
      else controls.start({ backgroundColor: "#d3b4c2" });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const getHref = (href?: string) => href ?? "#";

  const logoSrc = utils?.logo?.asset ? urlFor(utils.logo.asset).url() : "#";

  const stayConnectedHref = getHref(utils?.stayConnected);

  return (
    <motion.nav
      animate={controls}
      initial={{ backgroundColor: "#d3b4c2" }}
      className="fixed w-full z-50 backdrop-filter backdrop-blur-lg shadow-lg transition-all duration-100"
    >
      <div className="flex justify-between items-center px-5 md:px-16 py-4">
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} aria-label="Open Menu" className="text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Desktop Dropdowns */}
        <div className="hidden lg:flex items-center space-x-4 md:space-x-14 xl:space-x-36 font-medium">
          {/* Onboard Dropdown */}
          <div
            className="relative flex items-center gap-2 cursor-pointer"
            onMouseEnter={() => handleDropdown("onboard")}
            onMouseLeave={() => handleDropdown("onboard")}
          >
            <a href="#" className="hidden md:inline text-white font-semibold tracking-wider relative overflow-hidden">
              ONBOARD
              {activeDropdown === "onboard" && (
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-white bg-opacity-30"
                />
              )}
            </a>
            <Image src="/arrow-down.svg" alt="Dropdown" width={24} height={24} className="w-6 h-6 hidden md:inline" />
            {activeDropdown === "onboard" && (
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute top-0 md:top-[17px] mt-2 py-2 w-48 font-semibold tracking-wider bg-[#d3b4c2] bg-opacity-60 rounded-md shadow-lg z-10"
              >
                <Link href={getHref("#siherCoActive")} className="block px-4 py-2 hover:text-[#4428f2] text-white">
                  Si Her Co-Active
                </Link>
                <Link href={getHref("#ecosystem")} className="block px-4 py-2 hover:text-[#4428f2] text-white">
                  Si3 Ecosystem
                </Link>
              </motion.div>
            )}
          </div>

          {/* Live Dropdown */}
          <div
            className="relative flex items-center gap-2 cursor-pointer"
            onMouseEnter={() => handleDropdown("live")}
            onMouseLeave={() => handleDropdown("live")}
          >
            <a href="#" className="hidden md:inline text-white relative overflow-hidden font-semibold tracking-wider">
              SI HER LIVE
              {activeDropdown === "live" && (
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-white bg-opacity-30"
                />
              )}
            </a>
            <Image src="/arrow-down.svg" alt="Dropdown" width={24} height={24} className="w-6 h-6 hidden md:inline" />
            {activeDropdown === "live" && (
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute top-0 md:top-[17px] mt-2 py-2 w-64 font-semibold tracking-wider bg-[#d3b4c2] bg-opacity-60 rounded-md shadow-lg z-10"
              >
                <Link href={getHref("#commonGround")} className="block px-4 py-2 text-white whitespace-nowrap hover:text-[#4428f2]">
                  Common Ground
                </Link>
                <a href={getHref("#coActivator")} className="block px-4 py-2 text-white hover:text-[#4428f2]">
                  Metaverse (Coming Soon)
                </a>
              </motion.div>
            )}
          </div>
        </div>

        {/* Logo */}
        <div className="hidden lg:flex items-center justify-center text-primary uppercase text-lg md:text-2xl max-w-[200px] sm:max-w-xs font-[1000]">
          <Link href={getHref("/")}>
           
           SI&HER
          </Link>
        </div>

        {/* About & Stay Connected */}
        <div className="flex items-center space-x-4 md:space-x-14 xl:space-x-36 font-medium">
          <div
            className="relative flex items-center gap-2 cursor-pointer"
            onMouseEnter={() => handleDropdown("about")}
            onMouseLeave={() => handleDropdown("about")}
          >
            <a href="#" className="hidden lg:inline text-white relative overflow-hidden font-semibold tracking-wider">
              ABOUT US
              {activeDropdown === "about" && (
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-white bg-opacity-30"
                />
              )}
            </a>
            <Image src="/arrow-down.svg" alt="Dropdown" width={24} height={24} className="w-6 h-6 hidden lg:inline" />
            {activeDropdown === "about" && (
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                animate={{ opacity: 1, scaleY: 1 }}
                transition={{ duration: 0.2 }}
                className="absolute mt-2 py-2 w-48 top-0 md:top-[17px] font-semibold tracking-wider bg-[#d3b4c2] bg-opacity-60 rounded-md shadow-lg z-10 hidden md:inline"
              >
                <Link href={getHref("#ourMission")} className="block px-4 py-2 text-white hover:text-[#4428f2]">
                  Our Mission
                </Link>
                <Link href={getHref("#testimonials")} className="block px-4 py-2 text-white hover:text-[#4428f2]">
                  Testimonials
                </Link>
              </motion.div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Image src="/bell.png" alt="Bell Icon" width={36} height={36} className="w-9 h-9" />
            <Link href={stayConnectedHref} target="_blank" className="block text-white">
              STAY CONNECTED
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="mobileNav fixed z-[99999999] backdrop-blur-md top-0 left-0 h-screen w-3/4 px-6 py-4 flex flex-col justify-start items-center text-2xl gap-6 md:hidden"
          >
            {/* Mobile STAY CONNECTED */}
            <div className="flex items-center gap-2">
              <Image src="/bell.png" alt="Bell Icon" width={28} height={28} className="w-7 h-7" />
              <Link href={stayConnectedHref} target="_blank" className="block text-white text-base font-medium">
                STAY CONNECTED
              </Link>
            </div>
            {/* Mobile dropdowns */}
            {/* Repeat same dropdown logic as above, using getHref() for each Link */}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
