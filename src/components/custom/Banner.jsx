"use client";
import React, { lazy, useRef } from "react";
import { Button, buttonVariants } from "../ui/button";
import Image from "next/image";
// import Globe from "./Globe";
import Link from "next/link";
import CustomHeader from "./CustomHeader";
import ServiceCard from "./ServiceCard";
import { useDispatch } from "react-redux";
import { setTargetSection, toggleContactForm } from "@/redux/slice/scroll";
const Counter = lazy(() => import("@/components/custom/Counter"));

const Banner = () => {
  const service = useRef();
  const dispatch = useDispatch();

  const services = [
    {
      title: "App Developement",
      description: "Innovative mobile apps for iOS and Android platforms.",
      p: "Our team develops feature-rich, intuitive mobile applications to give your business a competitive edge in the digital market.",
      image: "/assets/card_image/app.webp",
      bg: `bg-gradient-to-b from-[#1B0000] to-[#1B0000]`,
      blend: "#ff5900,#ff5900",
      id: "app",
      // blend: "#1B0000,#1B0000",
    },
    {
      title: "Website Developement",
      description: " Custom websites tailored to your business needs.",
      p: "We create responsive, user-friendly websites designed to enhance your online presence and engage your audience.",
      image: "/assets/card_image/web.webp",
      bg: "bg-gradient-to-b from-[#130000] to-[#130000]",
      blend: "#ff5900,#ff5900",
      id: "web",
      // blend: "#130000 ,#130000",
    },
    {
      title: "Artificial Intelligence",
      description: "Advanced AI solutions for smarter business operations.",
      p: "We offer cutting-edge AI technologies that automate processes, improve decision-making, and provide personalized user experiences.",
      image: "/assets/card_image/ai.webp",
      bg: "bg-gradient-to-b from-[#100202] to-[#100202]",
      blend: "#ff5900,#ff5900",
      id: "ai",
      // blend: "#100202 ,#100202",
    },
    {
      title: "IOT Service",
      description: "Seamless IoT integration for smarter connectivity.",
      p: "Our IoT services connect devices and systems, enabling real-time data sharing and automation to optimize your business processes.",
      image: "/assets/card_image/iot.webp",
      bg: "bg-gradient-to-b from-[#1F0003] to-[#2F0005]",
      blend: "#ff5900,#ff5900",
      id: "iot",
      // blend: "#1F0003 10%,#2F0005 90%",
    },
    // {
    //   title: "AR/VR Service",
    //   description: "Intelligent chatbots for 24/7 customer support.",
    //   p: "Our AR/VR solutions create interactive, immersive environments, revolutionizing how customers experience your products and services.",
    //   image: "/assets/card_image/ar-vr.webp",
    //   bg: "bg-gradient-to-b from-[#1C0003] to-[#37000F]",
    //   blend: "#ff5900,#ff5900",
    //   id: "ar",
    //   // blend: "#1C0003 10%,#37000F 100%",
    // },
    {
      title: "Chatbot Service",
      description: " Immersive AR/VR experiences for enhanced engagement.",
      p: "We develop AI-powered chatbots that provide instant, accurate responses, enhancing customer satisfaction and reducing operational costs.",
      image: "/assets/card_image/chatbot.webp",
      bg: "bg-gradient-to-b from-[#37000E] from-[32.39%] via-[#470013] via-[87.14%] to-[#36000E] to-[100%]",
      blend: "#ff5900,#ff5900",
      id: "bot",
      // "#470013 80%,#36000E 100%"
    },
  ];

  const scrollToService = () => {
    if (service.current) {
      service.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section className="banner w-full lg:text-left text-center">
        <div className="max-w-[100rem] mx-auto px-[5%] lg:py-0 py-10 grid lg:grid-cols-2 min-h-[35rem] lg:mb-20 mb-10 mt-10">
          <div className="content grid-cols-1 h-full flex flex-col justify-center">
            <p className="md:text-3xl text-xl text-transparent font-semibold lg:mb-8 mb-1.5 bg-gradient-to-r from-[#ff5900] to-white bg-clip-text lg:w-fit w-full">
              Design Your Digital Identity
            </p>
            <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold mb-5">
              Next Generation software{" "}
              <span className="text-[#FF5900]">services</span> for your{" "}
              <span className="text-[#FF5900]">business</span>.{" "}
            </h1>
            <p className="mb-6 md:text-base text-sm">
              We are committed towards transforming ideas into tangible
              solutions
            </p>
            <div className="btns lg:block hidden">
              <Button
                className=" mx-2.5"
                onClick={() => {
                  service.current.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Explore Now
              </Button>
              <Button
                className={
                  buttonVariants({ variant: "outline" }) + "  mx-2.5 p-0 h-fit"
                }
              >
                <Link
                  href="/services"
                  className="px-4 py-2 h-10 flex justify-center items-center"
                >
                  Our Services
                </Link>
              </Button>
            </div>
          </div>
          <div className="col-span-1 lg:mt-0 mt-8 h-full flex flex-col items-center justify-center relative">
            <div className="video_overlay w-full h-full absolute z-[2]"></div>
            <video
              className="md:h-[90%] h-full w-full object-cover z-[1]"
              muted
              loop
              autoPlay
            >
              <source src="/assets/globe.mp4" type="video/mp4" />
            </video>
            {/* <Image width={1000} height={1000} src="/assets/globe.gif" /> */}
            {/* <Globe /> */}
            <div className="btns lg:hidden block mt-8">
              <Button
                className=" mx-2.5"
                onClick={() =>
                  service.current.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Explore Now
              </Button>
              <Button
                className={
                  buttonVariants({ variant: "outline" }) + "  mx-2.5 p-0 h-fit"
                }
              >
                <Link
                  href="/services"
                  className="px-4 py-2 h-10 flex justify-center items-center"
                >
                  Our Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <Counter />
      <section className="services lg:py-32 py-20 bg-[#000]">
        <div className="inner-services max-w-[100rem] mx-auto px-[5%] grid lg:grid-cols-2 lg:mb-60 mb-28">
          <div className="service-content col-span-1 flex justify-center items-center lg:mb-0 mb-16">
            <div className="content lg:pr-[10%] flex flex-col lg:items-start items-center">
              <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl lg:mb-12 mb-5 heading2-semibold">
                <span className="text-[#FF5900] font-medium">Services</span> We{" "}
                <span className="after:h-1 after:w-[80%] w-full after:absolute relative after:block after:bottom-0 after:-right-3 after:bg-[#FF5900] after:rounded-full">
                  Provide
                </span>
              </h1>
              <p className="mb-5 lg:text-left text-center md:text-base text-sm">
                At Befog(A&W Technology), we blend innovation with precision to
                deliver tailored IT solutions. From crafting seamless web
                experiences to harnessing cutting-edge technologies, our expert
                team is dedicated towards transforming ideas into impactful
                reality. Discover how we enhance your digital journey...
              </p>
              <Button
                onClick={() => {
                  dispatch(setTargetSection("contact-form"));
                  dispatch(toggleContactForm(true));
                }}
                className="w-fit lg:block hidden p-0"
              >
                <Link
                  href="/contact-us"
                  className="px-4 py-2 flex justify-center items-center"
                >
                  Connect with Us
                </Link>
              </Button>
            </div>
          </div>
          <div className="col-span-1 lg:px-0 md:px-[15%] flex items-center justify-center flex-col">
            <Image
              alt=""
              width={1000}
              height={1000}
              className="object-cover"
              src="/assets/services.webp"
            />
            <Button
              onClick={() => {
                dispatch(setTargetSection("contact-form"));
                dispatch(toggleContactForm(true));
              }}
              className="w-fit lg:hidden block p-0"
            >
              <Link
                href="/contact-us"
                className="px-4 py-2 flex justify-center items-center"
              >
                Connect with Us
              </Link>
            </Button>
          </div>
        </div>
        <div
          ref={service}
          className="service-category max-w-[100rem] mx-auto px-[5%]"
        >
          <div className="hed lg:mb-20 mb-8">
            <CustomHeader
              header1="Categories"
              header2="Service"
              className="before:-left-3"
            />
            <p className="text-center md:text-base text-sm kalam-regular italic">
              "Streamlined Web solutions for seamless online experiences."
            </p>
          </div>
          <div className="cards w-fit mx-auto grid lg:grid-cols-3 sm:grid-cols-2 xl:gap-8 md:gap-5 gap-2 mb-8">
            {services.slice(0, 3).map((service, index) => (
              <div
                className="service-cont col-span-1 md:scale-100 sm:scale-85"
                key={index}
              >
                <ServiceCard service={service} className={service.bg} />
              </div>
            ))}
          </div>
          <div className="cards w-fit mx-auto grid md:grid-cols-2 xl:gap-8 md:gap-5 gap-2">
            {services.slice(3).map((service, index) => (
              <div
                className="service-cont col-span-1 md:scale-100 sm:scale-85"
                key={index}
              >
                <ServiceCard service={service} className={service.bg} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
