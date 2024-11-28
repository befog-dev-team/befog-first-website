"use client";
import CustomHeader from "@/components/custom/CustomHeader";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";

import React, { useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import CaseStudyFrame from "@/components/custom/CaseStudyFrame";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useDispatch, useSelector } from "react-redux";
import { clearTargetSection } from "@/redux/slice/scroll";

const AboutUs = () => {
  const detailsRef = useRef();
  const founder = useSelector((state) => state.scroll.targetSection);
  const dispatch = useDispatch();

  useEffect(() => {
    if (founder) {
      const element = document.getElementById(founder);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        dispatch(clearTargetSection());
      }
    }
  }, [founder, dispatch]);

  const scrollToDetails = () => {
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const accordion_content = [
    {
      title: "Ethical Technology Practices",
      content:
        "We adhere to a strict Code of Business Ethics, ensuring that our technological advancements and business practices are conducted with integrity and transparency.",
      image: "/assets/accordion-img/ethical.webp",
      alt: "Ethical Technology Practices",
    },
    {
      title: "Sustainable IT Solutions",
      content:
        "Our sustainability efforts focus on reducing the environmental impact of our technology solutions. We are dedicated to creating eco-friendly products and services that contribute to a greener future.",
      image: "/assets/accordion-img/sustainable.webp",
      alt: "Sustainable IT Solutions",
    },
    {
      title: "Diversity and Inclusion in Tech",
      content:
        "We believe that diversity drives innovation. Our inclusive culture fosters creativity and encourages different perspectives to come together, building a stronger, more resilient tech community.",
      image: "/assets/accordion-img/diversity.webp",
      alt: "Diversity and Inclusion in Tech",
    },
    {
      title: "Responsible AI Development",
      content:
        "As pioneers in AI, we are committed to developing AI systems that are ethical, unbiased, and beneficial to society. We focus on responsible AI development to ensure our innovations are used for the greater good.",
      image: "/assets/accordion-img/responsible.webp",
      alt: "Responsible AI Development",
    },
    {
      title: "Technology Apprenticeship Programs",
      content:
        "We offer apprenticeship programs designed to nurture the next generation of tech leaders. Our programs provide hands-on experience and mentorship in cutting-edge technologies.",
      image: "/assets/accordion-img/technology.webp",
      alt: "Technology Apprenticeship Programs",
    },
    // {
    //   title: "Technology Apprenticeship Programs",
    //   content:
    //     "We offer apprenticeship programs designed to nurture the next generation of tech leaders. Our programs provide hands-on experience and mentorship in cutting-edge technologies.",
    //   image: "/assets/accordion-img/technology.jpeg",
    //   alt: "Technology Apprenticeship Programs",
    // },
  ];

  const members = [
    {
      image: "/assets/team/anushree.webp",
      name: "Anushree Saxena",
      position: "HR Manager",
      alt: "Anushree Saxena",
    },
    {
      image: "/assets/team/nikhil.webp",
      name: "Nikhil Kumar Gupta",
      position: "Frontend Developer",
      alt: "Nikhil Kumar Gupta",
    },
    {
      image: "/assets/team/aditya.webp",
      name: "Aditya Kannaujiya",
      position: "UI/UX Designer",
      alt: "Aditya Kannaujiya",
    },
  ];

  return (
    <>
      <section className="about-us w-full bg-black">
        <div className="max-w-[100rem] mx-auto px-[5%]">
          <div className="intro py-12">
            <div className="header mb-16">
              <h1 className=" lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-black text-center text-[#FF590026]">
                Who we are
              </h1>
              <CustomHeader
                header1="About Us"
                header2=""
                className="before:hidden -mt-8"
              />
            </div>
            <div className="grid grid-cols-2 gap-10">
              <div className="col-span-1 flex justify-center items-center">
                <div className="content">
                  <p className="mb-6">
                    Befog (A&W Technology) is a leading tech solutions provider
                    established in 2023, specializing in innovative software
                    development and digital transformation services. Our mission
                    is to empower businesses through cutting-edge technology and
                    tailored solutions
                  </p>
                  <Button
                    onClick={scrollToDetails}
                    className={
                      buttonVariants({ variant: "outline" }) + "  mx-2.5"
                    }
                  >
                    More Details
                  </Button>
                </div>
              </div>
              <div className="col-span-1">
                <Image
                  alt=""
                  src="/assets/about-us/about-banner.webp"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>

          <div ref={detailsRef} className="accordion py-28">
            <div className="content mb-16">
              <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold mb-8 heading2-bold">
                <p>Driving Innovation and Responsibility in</p>
                <p className="text-[#ff5900]">Technology</p>
              </h1>
              <p className="lg:w-[50%]">
                We’re committed to driving innovation and creating positive
                change in the tech industry. We strive to act as responsible
                technology leaders for our team, our clients, and the
                communities we serve.
              </p>
            </div>
            <div className="accord-cont mb-44">
              <Accordion type="single" collapsible>
                {accordion_content.map((content, index) => (
                  <AccordionItem
                    value={`item-${index}`}
                    key={index}
                    className="border-y border-gray-400/30 hover:border-[#ff5900] duration-200 transition-all ease-in-out"
                  >
                    <AccordionTrigger className="text-gray-400 hover:text-white ease-in-out transition-all duration-200 px-2.5">
                      {content.title}
                    </AccordionTrigger>
                    <AccordionContent className="px-10">
                      <div className="grid grid-cols-4 gap-10">
                        <div className="content col-span-2 flex justify-center items-center flex-col relative">
                          <p>{content.content}</p>
                          <Button className="bg-transparent border-0 mr-auto absolute bottom-0 left-0">
                            Expand <MoveRight className="w-5 h-5 ml-3" />
                          </Button>
                        </div>
                        <div className="col-span-1"></div>
                        <div className="col-span-1 h-52">
                          <Image
                            className="w-full h-full"
                            src={content.image}
                            width={1000}
                            height={1000}
                            alt={content.alt}
                          />
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="header relative mb-40 w-[55%] mx-auto">
              <h1 className="lg:text-5xl md:text-4xl text-3xl font-bold text-center heading2-bold">
                We help many of Professionals be more effective at their
                <span className="text-[#ff5900] ml-5">Bussiness</span>
              </h1>
              <div className="img-cont w-80 absolute -right-20">
                <Image
                  alt=""
                  width={1000}
                  height={1000}
                  src="/assets/about-us/header-bg.webp"
                />
              </div>
            </div>
          </div>

          <div className="values py-24">
            <div className="header mb-24">
              <h1 className=" lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-black text-center text-[#FF590026]">
                Core Values
              </h1>
              <CustomHeader
                header1="Your Trust"
                header2=""
                className="before:hidden -mt-8"
              />
              <p className="text-center">
                {" "}
                We are committed to delivering top-notch services that exceed
                our clients' expectations
              </p>
            </div>
            <div className="cards flex justify-between">
              <div className="col-1 w-full mx-1.5">
                <div className="h-20 bg-gradient-to-t from-[#ff5900] from-10% to-transparent to-90% rounded-2xl mb-3 p-0.5">
                  <div className="w-full h-full bg-black rounded-2xl">
                    <div className="h-full w-full bg-gradient-to-t from-[#ff59000b] from-10% to-transparent to-90% rounded-2xl"></div>
                  </div>
                </div>
                <div className="value-card w-full border-2 border-[#ff5900] bg-[#ff590007] rounded-2xl py-24 px-10 mb-3 relative group overflow-hidden">
                  <h1 className="text-center text-xl mb-5">Sustainability</h1>
                  <p className="text-center mb-3">
                    We are committed to sustainable practices that benefit our
                    clients
                  </p>
                  <p className="h-36 text-center relative group-hover:left-0 left-[120%] group-hover:bottom-0 -bottom-20 ease-in-out duration-200 transition-all">
                    Our solutions are tailored to meet the unique requirements
                    of each client, ensuring maximum value and impact
                  </p>
                  <Link
                    href="/about-us"
                    className="flex items-center absolute group-hover:bottom-8 -bottom-20 right-10 ease-in-out duration-200 transition-all"
                  >
                    Expand <MoveRight className="ml-1.5 w-5 h-5" />
                  </Link>
                </div>
                <div className="h-32 bg-gradient-to-b from-[#ff5900] from-10% to-transparent to-90% rounded-2xl mb-3 p-0.5">
                  <div className="w-full h-full bg-black rounded-2xl">
                    <div className="h-full w-full bg-gradient-to-b from-[#ff59000b] from-10% to-transparent to-90% rounded-2xl"></div>
                  </div>
                </div>
              </div>
              <div className="col-2 w-full mx-1.5">
                <div className="h-16 bg-gradient-to-t from-[#ff5900] from-10% to-transparent to-90% rounded-2xl mb-3 p-0.5">
                  <div className="w-full h-full bg-black rounded-2xl">
                    <div className="h-full w-full bg-gradient-to-t from-[#ff59000b] from-10% to-transparent to-90% rounded-2xl"></div>
                  </div>
                </div>
                <div className="border-2 border-[#ff5900] bg-[#ff59000b] rounded-2xl mb-3 py-10 px-10">
                  <h1 className="text-center text-xl mb-5">Innovation</h1>
                  <p className="text-center">
                    Innovation is at the heart of everything we do
                  </p>
                </div>
                <div className="border-2 border-[#ff5900] bg-[#ff59000b] rounded-2xl mb-3 py-16 px-10 core-value relative overflow-hidden">
                  {/* <span className="w-10 h-10 absolute bg-[#ff59001f] shadow-2xl shadow-[#ff59001f] rounded-full"/> */}
                  <span className="w-40 h-40 absolute block -right-8 rounded-full" />
                  <h1 className="text-center text-2xl">Core Values</h1>
                </div>
                <div className="border-2 border-[#ff5900] bg-[#ff59000b] rounded-2xl mb-3 py-10 px-10">
                  <h1 className="text-center text-xl mb-5">Innovation</h1>
                  <p className="text-center">
                    Innovation is at the heart of everything we do
                  </p>
                </div>
                <div className="h-16 bg-gradient-to-b from-[#ff5900] from-10% to-transparent to-90% rounded-2xl mb-3 p-0.5">
                  <div className="w-full h-full bg-black rounded-2xl">
                    <div className="h-full w-full bg-gradient-to-b from-[#ff59000b] from-10% to-transparent to-90% rounded-2xl"></div>
                  </div>
                </div>
              </div>
              <div className="col-3 w-full mx-1.5">
                <div className="h-32 bg-gradient-to-t from-[#ff5900] from-10% to-transparent to-90% rounded-2xl mb-3 p-0.5">
                  <div className="w-full h-full bg-black rounded-2xl">
                    <div className="h-full w-full bg-gradient-to-t from-[#ff59000b] from-10% to-transparent to-90% rounded-2xl"></div>
                  </div>
                </div>
                <div className="value-card w-full border-2 border-[#ff5900] bg-[#ff59000b] rounded-2xl py-24 px-10 mb-3 relative group overflow-hidden">
                  <h1 className="text-center text-xl mb-5">
                    Customer-Centricity
                  </h1>
                  <p className="text-center mb-3">
                    We prioritize our customers' needs and satisfaction above
                    all clients
                  </p>
                  <p className="h-36 text-center relative group-hover:left-0 left-[120%] group-hover:bottom-0 -bottom-20 ease-in-out duration-200 transition-all">
                    Our solutions are tailored to meet the unique requirements
                    of each client, ensuring maximum value and impact
                  </p>
                  <Link
                    href="/about-us"
                    className="flex items-center absolute group-hover:bottom-8 -bottom-20 right-10 ease-in-out duration-200 transition-all"
                  >
                    Expand <MoveRight className="ml-1.5 w-5 h-5" />
                  </Link>
                </div>
                <div className="h-20 bg-gradient-to-b from-[#ff5900] from-10% to-transparent to-90% rounded-2xl mb-3 p-0.5">
                  <div className="w-full h-full bg-black rounded-2xl">
                    <div className="h-full w-full bg-gradient-to-b from-[#ff59000b] from-10% to-transparent to-90% rounded-2xl"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="" id="founder"></div>
          <div className="team py-12">
            <div className="header mb-5">
              <CustomHeader
                header1="Leadership Team"
                header2="Team"
                className="before:hidden"
              />
            </div>
            <div className="founder grid grid-cols-7 gap-16 mx-auto mb-40">
              <div className="sanjay-photo col-span-2 rounded-tr-3xl overflow-hidden">
                <Image
                  width={1000}
                  height={1000}
                  src="/assets/sanjay-sir.jpg"
                  className="w-full h-full"
                  alt="Sanjay Mehrotra"
                />
              </div>
              <div className="sanjay-intro col-span-5 flex items-center justify-center">
                <div className="inner">
                  <h1 className="text-[#ff5900] font-semibold mb-5">
                    Founder & Director
                  </h1>
                  <h1 className="text-4xl font-medium mb-3 heading2-bold">
                    Mr. Sanjay Mehrotra
                  </h1>
                  <div className="mb-10">
                    <p className="mb-3">
                      Welcome to Befog! As the founder of this innovative IT
                      startup, I'm thrilled to share our vision and journey. At
                      Befog, we strive to push the boundaries of technology,
                      delivering solutions that meet today's needs and
                      anticipate tomorrow's challenges.
                    </p>
                    <p>
                      Our story began with a belief that technology can
                      transform businesses and enrich lives. We've built a team
                      of passionate and talented individuals who are dedicated
                      to innovation and excellence. Together, we're committed to
                      empowering organizations to reach their fullest potential
                      through the power of technology.
                    </p>
                  </div>
                  <Button
                    className={
                      buttonVariants({ variant: "outline" }) + "  p-0 h-fit"
                    }
                  >
                    <a
                      href="https://www.linkedin.com/in/mehrotra30"
                      target="_blank"
                      className="px-4 py-2 h-10 flex justify-center items-center"
                    >
                      Explore Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            {/* <div className="team-members">
              <div className="team-intro mb-16">
                <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold mb-5 heading2-bold">
                  Meet <span className="text-[#ff5900]">Our Team</span>
                </h1>
                <p>
                  Meet our dynamic team of passionate innovators, dedicated
                  towards bringing you cutting-edge solutions and exceptional
                  service.
                </p>
              </div>
              <div className="members grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {members.map((member, index) => (
                  <div className="col-span-1" key={index}>
                    <div className="w-fit mx-auto">
                      <div className="img-cont w-64 h-[19rem] rounded-tr-3xl overflow-hidden mb-5 relative">
                        <Image
                          width={1000}
                          height={1000}
                          src={member.image}
                          alt={member.alt}
                        />
                      </div>
                      <div className="member-info">
                        <h1 className="font-semibold text-xl text-center mb-1.5">
                          {member.name}
                        </h1>
                        <p className="text-center text-[#ff5900] font-semibold">
                          {member.position}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>

          <div
          // mt-20
          className="case-study py-20  grid grid-cols-6 gap-10">
            <div className="header col-span-2 flex justify-center flex-col">
              <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold mb-5 heading2-bold">
                <p>View Our</p>
                <p className="text-[#ff5900]">Case Study</p>
              </h1>
            </div>
            <div className="col-span-4">
              <CaseStudyFrame />
            </div>
          </div>

          <div className="contact py-20 flex flex-col justify-center items-center">
            <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold mb-16 heading2-bold text-center">
              Contact
            </h1>
            <div className="w-1/3 mb-16">
              <form>
                <Input placeholder="Email" className="w-full text-black mb-5" />
                <Textarea
                  placeholder="Message"
                  className="mt-1.5 shadow-md resize-none text-black mb-5"
                  rows="5"
                />
                <Button
                  className={
                    buttonVariants({ variant: "outline" }) +
                    " relative left-1/2 transform -translate-x-1/2"
                  }
                >
                  Submit
                </Button>
              </form>
            </div>
            <p className="text-center w-1/2 mb-8">
              Ready to transform your business? Get in touch with us today to
              discuss how Befog (A&W Technology) can help you achieve your
              goals.
            </p>
            <Button className='p-0'>
              <Link href="/contact-us" className="py-2 px-4">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
