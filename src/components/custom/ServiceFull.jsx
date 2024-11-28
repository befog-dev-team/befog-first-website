"use client";
import React, { useEffect, useRef } from "react";
import { Button, buttonVariants } from "../ui/button";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useDispatch, useSelector } from "react-redux";
import { clearTargetSection } from "@/redux/slice/scroll";

gsap.registerPlugin(ScrollTrigger);

const ServiceFull = () => {
  const serviceRef = useRef();
  const service = useSelector((state) => state.scroll.targetSection);
  const dispatch = useDispatch();
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section, index) => {
      gsap.fromTo(
        section,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "top 65%",
            scrub: true,
            once: true,
            // markers:true,
            onEnter: () => {
              gsap.fromTo(
                section,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.3 }
              );
            },
            onLeaveBack: () => {
              gsap.set(section, { y: 0, opacity: 1 });
            },
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    if (service) {
      const element = document.getElementById(service);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        dispatch(clearTargetSection());
      }
    }
  }, [service, dispatch]);

  const serviceData = [
    {
      header: "Website Development",
      content:
        "Enhance your online presence with our state-of-the-art website development services. We excel in crafting responsive, intuitive, and visually captivating websites tailored to meet your business objectives. Whether you need an e-commerce platform or a corporate site, our skilled team will ensure your website not only stands out but also provides a seamless user experience, boosting engagement and driving conversions.",
      img: "/assets/service-page/service-full/web.webp",
      id: "web",
    },
    {
      header: "Mobile Application Development",
      content:
        "Connect with your audience anywhere with our bespoke app development services. Whether you need a mobile or web application, our team creates apps that are intuitive, scalable, and feature-rich. We prioritize delivering high-performance applications that align with your business objectives, offering users an outstanding experience on all devices.",
      img: "/assets/service-page/service-full/app.webp",
      id: "app",
    },
    {
      header: "Artifical Intelligence",
      content:
        "Harness the potential of artificial intelligence to fuel innovation and enhance efficiency in your business. Our AI services encompass predictive analytics, machine learning, and natural language processing, customized to automate workflows, uncover valuable insights, and support data-driven decision-making. Collaborate with us to stay ahead of the curve by implementing AI solutions that drive your business forward.",
      img: "/assets/service-page/service-full/ai.webp",
      id: "ai",
    },

    {
      header: "IOT Service",
      content:
        "Bridge the gap between the physical and digital realms with our IoT services. We enable you to leverage the Internet of Things by designing and deploying intelligent solutions that streamline operations, boost data collection, and deliver real-time insights. Whether it's smart home devices or industrial IoT systems, our tailored solutions cater to your unique requirements, driving innovation and efficiency in your business.",
      img: "/assets/service-page/hover-content/iot.webp",
      id: "iot",
    },
    // {
    //   header: "AR/VR Development",
    //   content:
    //     "Bring your vision to reality with our cutting-edge AR/VR services. We craft immersive experiences that captivate your audience beyond the capabilities of traditional media. From virtual reality training modules to augmented reality apps and interactive 3D environments, our AR/VR solutions elevate user engagement and create unforgettable experiences, making your brand stand out.",
    //   img: "/assets/service-page/hover-content/arvr.svg",
    //   id: "ar",
    // },
    {
      header: "Chatbot Development",
      content:
        "Enhance customer service and boost engagement with our intelligent chatbot solutions. Designed to manage customer inquiries, deliver personalized responses, and operate around the clock, our chatbots ensure your clients always have access to the information they need. By automating routine tasks, our chatbots allow your team to concentrate on more complex issues, ultimately improving efficiency and productivity.",
      img: "/assets/service-page/hover-content/chatbot.webp",
      id: "bot",
    },
  ];

  return (
    <>
      <div className="inner max-w-[100rem] mx-auto px-[7%] lg:py-0 py-10">
        {serviceData.map((item, index) => (
          <div
            key={index}
            id={item.id}
            ref={(el) => (sectionsRef.current[index] = el)}
            className="grid lg:grid-cols-3 grid-cols-2 lg:gap-20 gap-10 lg:py-12 py-8 my-10"
          >
            <div
              className={
                (index % 2 === 0
                  ? "lg:order-1 lg:justify-start "
                  : "lg:order-2 lg:justify-end ") +
                "col-span-2 flex items-center"
              }
            >
              <div
                className={
                  (index % 2 === 0
                    ? "lg:items-start lg:justify-start"
                    : "lg:items-end lg:justify-end") +
                  " content flex flex-col lg:w-[80%] w-full"
                }
              >
                <h1 className="md:text-3xl text-2xl font-medium lg:mb-10 mb-5">
                  {item.header}
                </h1>
                <p
                  className={
                    (index % 2 === 0 ? "lg:text-left" : "lg:text-right") +
                    " md:text-base text-sm"
                  }
                >
                  {item.content}
                </p>
                {/* <Button
                  className={
                    buttonVariants({ variant: "outline" }) +
                    " text-[#ff5900] w-fit lg:mt-10 mt-5"
                  }
                >
                  Contact
                </Button> */}
              </div>
            </div>
            <div
              className={
                (index % 2 === 0 ? "lg:order-2 " : "lg:order-1 ") +
                "lg:col-span-1 col-span-2 lg:w-full md:w-[50%] sm:w-[70%] w-full mx-auto"
              }
            >
              <Image
                alt=""
                width={1000}
                height={1000}
                src={item.img}
                className="w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServiceFull;
