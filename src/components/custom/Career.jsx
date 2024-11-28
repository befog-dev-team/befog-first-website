"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CustomHeader from "./CustomHeader";
import { Button } from "../ui/button";
import { ChevronRightIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AnimatedImage = () => {
  const wrapperRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);
  const contentRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    const wrapper = wrapperRef.current;
    const image = imageRef.current;
    const overlay = overlayRef.current;
    const content = contentRef.current;

    let tl;
    if (!isMobile) {
      tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "top 12%",
          end: "bottom 30%",
          scrub: true,
          pin: true,
        },
      });

      tl.fromTo(
        [image, overlay],
        { scale: 1, x: 0, width: "100vw", height: "100%" },
        { scale: 0.6, x: "-7vw", y: "0", width: "70vw", height: "100%" }
      ).fromTo(content, { opacity: 0, y: 100 }, { opacity: 1, y: 0 }, "<");
    } else {
      gsap.set([image, overlay], { clearProps: "all" });
      gsap.set(content, { clearProps: "all" });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <div
      ref={wrapperRef}
      className="relative w-full lg:h-screen overflow-hidden bg-black"
    >
      <div className="relative w-full h-full max-w-[100rem] mx-auto">
        {!isMobile && (
          <>
            <div
              ref={overlayRef}
              className="absolute top-0 left-0 w-full h-full bg-[#ffae00] opacity-25 z-[3]"
            />
            <Image
              ref={imageRef}
              alt=""
              src="/assets/career.webp"
              layout="fill"
              objectFit="cover"
              className="z-[2] w-full"
            />
          </>
        )}
        <div
          ref={contentRef}
          className={`flex flex-col justify-center ${
            isMobile
              ? "w-full mb-10 md:pt-20 pt-10 flex flex-col justify-center items-center"
              : "w-1/2 absolute right-0 top-1/2 -translate-y-1/2"
          } px-[5%]`}
        >
          <CustomHeader
            header1="We Provide"
            header2="Career"
            className={`lg:mb-16 mb-8 ${
              isMobile ? "" : "xl:right-28 lg:right-20 right-16"
            }`}
          />
          <p className="mb-6 lg:text-base text-sm lg:text-left text-center">
            Join A&W Technologies and shape the future of technology with us. We
            offer a collaborative environment and exciting growth opportunities.
            Explore our openings and be part of our innovative team!
          </p>
          <Button
            variant="outline"
            className="flex justify-between p-0 h-12 hover:scale-105 w-fit"
          >
            <span className="px-8">Join Us</span>
            <span className="h-full bg-[#ff5900] flex justify-center items-center px-3">
              <ChevronRightIcon />
            </span>
          </Button>
        </div>
        {isMobile && (
          <div className="w-full h-full md:mb-12 mb-3 relative">
            <div
              ref={overlayRef}
              className="absolute top-0 left-0 w-full h-full bg-[#ffae00] opacity-25 z-[3]"
            />
            <Image
              ref={imageRef}
              src="/assets/career.webp"
              layout="responsive"
              width={1000}
              alt=""
              height={500}
              objectFit="cover"
              className="w-full"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimatedImage;
