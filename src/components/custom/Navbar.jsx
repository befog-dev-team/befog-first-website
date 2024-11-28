"use client";
import axios from "axios";
import { ChevronDown, GlobeIcon, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef(); 

  useEffect(() => {
    
    const fetchCountries = async () => {
      const headers = {
        "X-CSCAPI-KEY": "RENsbnBxc3FHNGIxSG85ZlpnY3NLNFpFdTUzVW91WVA1QjdFUzlNeA==",
      };

      try {
        const response = await axios.get("https://api.countrystatecity.in/v1/countries", { headers });
        setCountries(response.data);

        const storedCountry = localStorage.getItem("selectedCountry");
        const india = response.data.find(country => country.name === "India");

        if (storedCountry) {
          const countryFromStorage = response.data.find(country => country.name === storedCountry);
          setSelectedCountry(countryFromStorage || india); 
        } else {
          setSelectedCountry(india); 
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchCountries();
  }, []);

  const links = [
    { link: "/services", title: "Services" },
    { link: "/about-us", title: "About Us" },
    { link: "/career", title: "Career" },
    { link: "/contact-us", title: "Contact Us" },
  ];

  const handleToggle = () => {
    setToggle(prev => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setToggle(false); 
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("click", handleClickOutside); 

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header>
      <nav className="bg-black/70 backdrop-blur-md w-full py-0 fixed top-0 text-white z-50">
        <div className="max-w-[100rem] mx-auto px-[5%] flex items-center justify-between">
          <Link
            onClick={() => {
              if (isMobile && toggle) {
                handleToggle();
              }
            }}
            href="/"
            className="block w-fit z-50"
          >
            <div className="w-[33%] py-5 hover:w-28 ease-in-out duration-500 transition-all overflow-hidden">
              <div className="w-28">
                <Image
                  src="/assets/befog_logo.svg"
                  width={1000}
                  height={1000}
                  alt="logo"
                  className="object-cover"
                />
              </div>
            </div>
          </Link>
          <div className={`${isMobile && toggle ? "!right-0" : "!-right-[104%]"} links lg:relative absolute lg:w-fit w-screen lg:h-auto h-screen top-0 right-0 ease-in-out duration-500 transition-all lg:bg-transparent bg-black flex justify-center items-center lg:!right-0 lg:backdrop-blur-none backdrop-blur-4px`}>
            <ul className="flex lg:flex-row flex-col items-center lg:text-base text-xl">
              {links.map((link, index) => (
                <li key={index} className="group">
                  <Link
                    onClick={() => {
                      if (isMobile) {
                        handleToggle();
                      }
                    }}
                    href={link.link}
                    className="flex items-center justify-center mx-3 py-2 px-2 group-hover:text-[#FF5900] transition-all ease-in-out duration-200"
                  >
                    {link.title}
                    <ChevronDown className="w-4 h-4 mt-0.5 ml-1 text-white/65" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center relative">
            <div className="region flex z-50">
              <GlobeIcon />
              <span className="flex items-center ml-2.5 text-sm cursor-pointer" onClick={handleToggle}>
                {selectedCountry ? selectedCountry.name : "Select Country"}
                <ChevronDown className="w-4 h-4 mt-0.5 ml-1 text-white/65" />
              </span>
            </div>
            <span
              onClick={handleToggle}
              className="toggle lg:hidden grid place-items-center relative w-8 h-8 bg-transparent ml-12 mt-9 cursor-pointer"
            >
              {toggle ? (
                <FaXmark className="text-xl absolute" />
              ) : (
                <MenuIcon className="w-6 h-6 absolute" />
              )}
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
