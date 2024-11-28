'use client';
import CustomHeader from "@/components/custom/CustomHeader";
import { Button, buttonVariants } from "@/components/ui/button";
import { toggleContactForm } from "@/redux/slice/scroll";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic"; 
import { useDispatch } from "react-redux";

// Use dynamic imports for components that can be loaded on demand
const ServiceFull = dynamic(() => import("@/components/custom/ServiceFull"), { 
  ssr: false,
  loading: () => {}
});
const ServiceHover = dynamic(() => import("@/components/custom/ServiceHover"), { 
  ssr: false,
  loading: () =>{}
});

const Services = () => {
  const dispatch = useDispatch();
  const link = [
    { link: "Website Development", id: 1 },
    { link: "Mobile App Development", id: 2 },
    { link: "Artificial Intelligence", id: 3 },
    { link: "IOT Services", id: 4 },
    { link: "Chatbot Development", id: 5 },
  ];

  const link_content = [
    {
      id: 1,
      head: "Website Development",
      content: "Transform your online presence with our cutting-edge website development services...",
      cont_link: "/contact-us",
      img: "/assets/service-page/hover-content/web.webp",
      // priority,
      placeholder:"blur",
      blurDataURL:"/assets/service-brain-small.webp", // Low-quality placeholder
    },
    // ... other service objects
  ];

  return (
    <section className="services bg-black">
      <div className="inner max-w-[100rem] mx-auto px-[5%] lg:pt-0 lg:pb-20 pt-10 pb-20">
        <div className="intro grid md:grid-cols-2 lg:gap-10 md:gap-5">
          <div className="content grid-cols-1 h-full flex flex-col justify-center">
            <p className="md:text-3xl text-xl font-semibold lg:mb-8 mb-1.5">
              Innovating Tomorrow,
              <span className="text-[#ff5900]">Today</span>
            </p>
            <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold mb-5">
              Transforming Ideas into{" "}
              <span className="text-[#FF5900] text-transparent bg-gradient-to-r from-[#ff5900] to-[#ff9b66] bg-clip-text">
                Digital Reality
              </span>
            </h1>
            <p className="mb-6 md:text-base text-sm">
              Befog (A&W Technology) is an innovative IT startup offering web development...
            </p>
            <div className="btns lg:block hidden">
              <Button className={buttonVariants({ variant: "outline" }) + " mx-2.5 p-0 h-fit"}>
                <Link
                  href="/contact-us"
                  onClick={() => dispatch(toggleContactForm(false))}
                  className="px-4 py-2 h-10 flex justify-center items-center"
                >
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
          <div className="col-span-1 h-full flex flex-col items-center justify-center">
            <Image
              alt="Service illustration"
              width={1000}
              height={1000}
              src="/assets/service-brain.webp"
              className="object-cover"
              priority // Load this image first
            />
            <div className="btns lg:hidden block mt-5">
              <Button className={buttonVariants({ variant: "outline" }) + " mx-2.5"}>
                <Link
                  href="/contact-us"
                  onClick={() => dispatch(toggleContactForm(false))}
                  className="px-4 py-2 h-10 flex justify-center items-center"
                >
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:pb-20 pb-10">
        <ServiceHover link={link} link_content={link_content} />
      </div>
      <div className="lg:py-10 pb-20 mb-28">
        <ServiceFull />
      </div>
      <div className="lg:py-10 pb-20">
        <div className="flex flex-col justify-center items-center">
          <CustomHeader
            header1="Innovate, Collaborate, Succeed Together."
            header2="Career"
            className="before:hidden"
          />
          <p className="text-center mt-20 mb-10">
            Grow your careers at the heart of change
          </p>
          <Button className={buttonVariants({ variant: "outline" }) + " mx-2.5 p-0 h-fit"}>
            <Link href="/contact-us" className="px-4 py-2 h-10 flex justify-center items-center">
              Contact
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
