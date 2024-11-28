"use client";
import React, { useState } from "react";
import CustomHeader from "./CustomHeader";
import { MoveRight } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
import HoverSection from "./HoverSection";

const ServiceHover = ({ link, link_content }) => {
  return (
    <>
      <div className="inner max-w-[100rem] mx-auto px-[5%] lg:py-0 py-10">
        <div className="header py-20 mb-40">
          <p className="text-center">Solutions for Your Success</p>
          <CustomHeader
            header1={
              <p className=" font-semibold text-4xl">
                Delivering tailored <span className="text-[#ff5900]">tech</span>{" "}
                solutions to drive your{" "}
                <span className="text-[#ff5900]">success</span>
              </p>
            }
            header2="Success"
            className="before:hidden"
          />
        </div>
        <div className="">
          <div className="header lg:mb-16 mb-10">
            <p className=" text-[#ff5900] font-medium mb-6">CAPABILITIES</p>
            <h1 className=" lg:text-6xl md:text-5xl text-4xl heading2-semibold">
              Capabilities to improve your{" "}
              <span className="text-[#ff5900]">Business</span>
            </h1>
          </div>
          <HoverSection link={link} link_content={link_content} />
        </div>
      </div>
    </>
  );
};

export default ServiceHover;
