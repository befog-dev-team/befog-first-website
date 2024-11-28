import React from "react";
import CustomHeader from "./CustomHeader";
import { Button } from "../ui/button";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { setTargetSection } from "@/redux/slice/scroll";
import Link from "next/link";

const Founder = () => {
  const dispatch = useDispatch();

  return (
    <>
      <section className="founder bg-black lg:py-28 md:py-20 py-12">
        <div className="max-w-[100rem] mx-auto px-[5%] grid lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2 lg:order-1 order-2 flex justify-center items-start">
            <div className="md:mt-16 mt-8 xl:block flex flex-col items-center justify-center">
              <CustomHeader
                header1="Sanjay Mehrotra"
                header2="Founder"
                className="before:-right-3 xl:mr-[60%] lg:mr-[45%] md:mr-[40%] sm:mr-[50%] mx-auto mb-10 lg:block hidden"
              />
              <p className="xl:mb-10 mb-5 xl:ml-[15%] lg:text-left text-center lg:text-base text-sm">
                It is with great enthusiasm and pride that I welcome you to
                Befog. As the founder of this innovative IT startup, I am
                excited to share our vision and the journey that has brought us
                here. At Befog, we are dedicated to pushing the boundaries of
                technology to deliver solutions that not only meet the needs of
                today but anticipate the challenges of tomorrow.
                <br />
                <br />
                Our story began with a simple yet profound belief: technology
                holds the key to transforming businesses and enriching lives.
                With this conviction at our core, we have assembled a team of
                exceptional individuals who share a common passion for
                innovation and excellence. Together, we are committed to
                creating a future where technology empowers organizations to
                achieve their fullest potential.
              </p>
              <Button
                className="xl:ml-[15%] w-fit p-0"
                onClick={() => {
                  dispatch(setTargetSection("founder"));
                }}
              >
                <Link href="/about-us" className="px-4 py-2 flex justify-center items-center">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-1 lg:order-2 order-1">
            <CustomHeader
              header1="Sanjay Mehrotra"
              header2="Founder"
              className="before:-right-3 xl:mr-[60%] mx-auto md:mb-12 mb-8 lg:hidden block"
            />
            <div className="lg:w-full w-fit mx-auto h-[32rem] relative after:h-[110%] after:w-[30%] md:after:block after:hidden after:bg-[#ff5900] after:absolute after:-right-10 after:top-1/2 after:translate after:-translate-y-1/2 after:z-0">
              <Image
                alt=""
                width={1000}
                height={1000}
                className=" w-full h-full object-cover relative z-[1]"
                src="/assets/sanjay-sir.webp"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Founder;
