import React from "react";
import CustomHeader from "./CustomHeader";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <section className="aboutus bg-black lg:py-24 md:py-14 py-8">
        <div className="inner-about max-w-[100rem] mx-auto px-[5%]">
          <CustomHeader
            header1="About Us"
            header2="Company"
            className="before:-right-3 lg:mb-24 mb-8"
          />
          <div className="grid lg:grid-cols-2 xl:gap-20 md:gap-10 gap-0 group">
            <div className="img-cont col-span-1 lg:order-1 order-2 lg:w-full md:w-[80%] mx-auto relative lg:after:w-[25%] after:w-[20%] after:h-[120%] after:absolute md:after:block after:hidden lg:after:right-[80%] after:right-[90%] after:bg-[#ff5900] after:top-1/2 after:transform after:-translate-y-1/2 after:z-0 z-[1]">
              <div className="w-full h-full overflow-hidden relative z-[1] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-[#ffae00] before:opacity-25 before:z-[1]">
                <Image
                  width={1000}
                  height={1000}
                  alt=""
                  className="!w-full h-full group-hover:scale-125 group-hover:-translate-x-15 ease-in-out duration-500 transition-all"
                  src="/assets/company.webp"
                  priority
                />
              </div>
            </div>
            <div className="col-span-1 lg:order-2 order-1 flex justify-center items-center w-full mx-auto lg:mb-0 mb-10">
              <div className="flex flex-col justify-center">
                <p className="lg:mb-8 mb-4 lg:text-base text-sm lg:text-left text-center">
                  At Befog(A&W Technology), we specialize in delivering
                  innovative IT solutions tailored to meet your business needs.
                  From web and mobile app development to strategic IT
                  consulting, we are committed to driving your success through
                  cutting-edge technology and personalized service. Join us in
                  transforming ideas into reality and navigating the digital
                  landscape with confidence.{" "}
                </p>
                <Button className="w-fit p-0">
                  <Link
                    href="/about-us"
                    className="px-4 py-2 flex justify-center items-center"
                  >
                    See Details
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
