"use client";
import { setTargetSection, toggleContactForm } from "@/redux/slice/scroll";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaLinkedin, FaSquareFacebook } from "react-icons/fa6";
import { useDispatch } from "react-redux";

const Footer = () => {
  const dispatch = useDispatch();
  const social = [
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/company/befogtech/mycompany/",
    },
    { icon: <FaInstagram />, link: "https://www.instagram.com/befogtech/" },
    { icon: <FaSquareFacebook />, link: "https://www.facebook.com/techapli" },
  ];

  const use_case = [
    {
      title: "Home",
      link: "/",
      id: "home",
    },
    {
      title: "Services",
      link: "/services",
      id: "service",
    },
    {
      title: "Contact Us",
      link: "/contact-us",
      id: "contact",
    },
    // {
    //   title: "Career",
    //   link: "/career",
    //   id:'career',
    // },
    {
      title: "Opportunity",
      link: "/career",
      id: "career",
    },
    {
      title: "Direct Contact",
      link: "/contact-us",
      id: "contact-form",
    },
  ];

  const services = [
    {
      title: "Website Development",
      link: "/services",
      id: "web",
    },
    {
      title: "App Development",
      link: "/services",
      id: "app",
    },
    {
      title: "Artificial Intelligence",
      link: "/services",
      id: "ai",
    },
    {
      title: "IOT Services",
      link: "/services",
      id: "iot",
    },
    // {
    //   title: "AR/VR Development",
    //   link: "/services",
    //   id: "ar",
    // },
    {
      title: "Chatbot Development",
      link: "/services",
      id: "bot",
    },
    // {
    //   title: "Support",
    //   link: "/",
    // },
    // {
    //   title: "Developers",
    //   link: "/",
    // },
  ];

  const explore = [
    {
      title: "About the Company",
      link: "/about-us",
      id: "about",
    },
    {
      title: "All Services",
      link: "/services",
      id: "service",
    },
    // {
    //   title: "Courses",
    //   link: "/",
    // },
    {
      title: "One to One Support",
      link: "/contact-us",
      id: "support",
    },
    // {
    //   title: "Contact",
    //   link: "/contact-us",
    //   id: "contact",
    // },
  ];

  return (
    <>
      <footer className="bg-black text-white px-[2%] mt-auto relative">
        <div className="line w-full mx-auto h-px bg-[#ff5900]" />
        <div className="footer-container max-w-[100rem] mx-auto px-[3%] py-12 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-5 gap-3">
          <div className="md:col-span-1 sm:col-span-2 block lg:mb-0 md:mb-5 mb-3">
            <div className="logo-cont w-fit">
              <Link href="/">
                <Image
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-40"
                  src="/assets/befog_logo.svg"
                />
                <p className="text-center mt-1">A&W Technologies</p>
              </Link>
            </div>
            <div className="social mt-5 block">
              <ul className="flex text-2xl">
                {social.map((media, index) => (
                  <li key={index} className="mx-2">
                    <a href={media.link} target="_blank">
                      {media.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:col-span-1 sm:col-span-2 lg:mb-0 md:mb-5 mb-3">
            <h1 className=" font-semibold text-[#ff5900] mb-5">Quick Links</h1>
            <ul>
              {use_case.map((link, index) => (
                <li key={index} className="md:my-1.5 my-0 md:text-base text-sm">
                  <Link
                    href={link.link}
                    onClick={() => {
                      if (link.title === "Direct Contact")
                        dispatch(toggleContactForm(true));
                      else if (link.title === "Contact Us")
                        dispatch(toggleContactForm(false));
                      dispatch(setTargetSection(link.id));
                    }}
                    className="py-0.5 block w-full hover:text-[#ffae83] duration-200 ease-in-out transition-all"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-1 sm:col-span-2 lg:mb-0 md:mb-5 mb-3">
            <h1 className=" font-semibold text-[#ff5900] mb-5">Services</h1>
            <ul>
              {services.map((link, index) => (
                <li key={index} className="md:my-1.5 my-0 md:text-base text-sm">
                  <Link
                    href={link.link}
                    onClick={() => {
                      dispatch(setTargetSection(link.id));
                    }}
                    className="py-0.5 block w-full hover:text-[#ffae83] duration-200 ease-in-out transition-all"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-1 sm:col-span-2">
            <h1 className=" font-semibold text-[#ff5900] mb-5">Explore</h1>
            <ul>
              {explore.map((link, index) => (
                <li key={index} className="md:my-1.5 my-0 md:text-base text-sm">
                  <Link
                    href={link.link}
                    className="py-0.5 block w-full hover:text-[#ffae83] duration-200 ease-in-out transition-all"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
              <li className="md:my-1.5 my-0 md:text-base text-sm cursor-pointer">
                <p
                  onClick={() => {
                    dispatch(setTargetSection("back-top-top"));
                  }}
                  className="py-0.5 block w-full hover:text-[#ffae83] duration-200 ease-in-out transition-all"
                >
                  Go to Top
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
