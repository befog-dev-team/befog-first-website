"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import HoverSection from "@/components/custom/HoverSection";
import Link from "next/link";

const page = () => {
  const link = [
    { link: "Start as a Student", id: 1 },
    { link: "Early career Professionals", id: 2 },
    // { link: "Experiences Professionals", id: 3 },
    // { link: "Executive leaders", id: 4 },
  ];

  const link_content = [
    {
      id: 1,
      head: "Start as a Student",
      content:
        "Embark on your journey with us by exploring various internship programs, training sessions, and mentorship opportunities tailored for students. Gain hands-on experience with cutting-edge technologies, work on real projects, and build a foundation for a successful career in the IT industry. We provide you with the resources and support needed to turn your academic knowledge into practical skills.",
      cont_link: "/",
    },
    {
      id: 2,
      head: "Early Career Professionals",
      content:
        "If you're an early career professional looking to accelerate your growth, our organization offers a dynamic environment where you can enhance your skills, take on new challenges, and contribute to meaningful projects. With access to ongoing training, mentorship, and a collaborative community, you'll quickly find yourself at the forefront of innovation and technology, making a significant impact from day one.",
      cont_link: "/",
    },
    // {
    //   id: 3,
    //   head: "Experienced Professionals",
    //   content:
    //     "For those with a wealth of experience, we offer the chance to leverage your expertise in a challenging and rewarding environment. Lead projects, mentor younger colleagues, and play a key role in driving technological advancements. At our company, your experience is valued, and we provide the platform for you to continue learning, growing, and achieving new heights in your career.",
    //   cont_link: "/",
    // },
    // {
    //   id: 4,
    //   head: "Executive Leaders",
    //   content:
    //     "As an executive leader, you'll have the opportunity to shape the future of our company and the industry. We seek visionary leaders who can drive strategic initiatives, inspire teams, and deliver impactful results. Your leadership will be instrumental in guiding our company through innovation and growth, ensuring we remain at the forefront of the IT sector.",
    //   cont_link: "/",
    // },
  ];

  const jobs = [
    {
      image: "/assets/sd.webp",
      title: "Backend Developer",
      description:
        "Join our team as a Backend Developer to build robust, scalable systems. You'll work with modern frameworks, primarily in JavaScript and Python, to develop and maintain server-side applications. Ideal candidates are problem-solvers with a deep understanding of databases and API design. Contribute to projects that make a difference!",
    },

    {
      image: "/assets/sd.webp",
      title: "Tech Lead",
      description:
        "We're seeking an experienced Tech Lead to drive innovation and lead our development team. You'll architect scalable systems, guide engineers, and ensure high-quality project delivery. Proficiency in multiple languages and frameworks, along with strong leadership and communication skills, is essential. Join us to shape the future of technology!",
    },
    {
      image: "/assets/sd.webp",
      title: "Frontend Developer",
      description:
        "We're looking for a Frontend Developer to create engaging, user-friendly web interfaces. You'll work with the latest technologies like React and Next.js to bring designs to life. If you're passionate about crafting seamless user experiences and have a strong grasp of HTML, CSS, and JavaScript, we want you on our team!",
    },
    {
      image: "/assets/sd.webp",
      title: "Software Developer",
      description:
        "Seeking a talented Software Developer with expertise in full-stack development, proficient in JavaScript,Python, and modern frameworks. Join our dynamic team to design, build, and maintain scalable applications.",
    },
  ];

  const connection = [
    {
      title: "Join Us",
      content: "Get career tips and industry-leading insights.",
      link: "/contact-us",
    },
    {
      title: "Stay in touch",
      content: "Get career tips and industry-leading insights.",
      link: "/contact-us",
    },
    {
      title: "Get job alert",
      content: "Get career tips and industry-leading insights.",
      link: "/contact-us",
    },
  ];

  return (
    <>
      <section className="about-us w-full bg-black">
        <div className="">
          <div className="intro pt-36 pb-12 max-w-[100rem] mx-auto px-[5%]">
            <div className="header mb-16 flex flex-col items-center">
              <h1 className="lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-bold mb-8 heading2-bold">
                Be a catalyst for change
              </h1>
              <p className="text-2xl text-center w-[70%] mb-8">
                Join us to grow, learn, and connect. We value and welcome
                everything that makes you unique
              </p>
              <Button className={buttonVariants({ variant: "outline" })}>
                <Link href="/contact-us">Search open Role</Link>
              </Button>
            </div>
          </div>

          <div className="carousel-container max-w-[100rem] mx-auto">
            <Carousel className="relative py-16">
              <CarouselContent className="mb-10">
                {jobs.map((job, index) => (
                  <CarouselItem className="basis-11/12 mr-10" key={index}>
                    <div className="grid grid-cols-2 gap-10">
                      <div className="col-span-1">
                        <Image
                          width={1000}
                          height={1000}
                          src={job.image}
                          alt="sw"
                        />
                      </div>
                      <div className="col-span-1 px-5 flex items-center">
                        <div className="content">
                          <h1 className="text-2xl font-semibold mb-16">
                            {job.title}
                          </h1>
                          <p className="mb-10">{job.description}</p>
                          <Button
                            className={
                              buttonVariants({ variant: "outline" }) +
                              " p-0 h-fit"
                            }
                          >
                            <Link href="/contact-us" className="px-4 py-2 h-10 flex items-center justify-center">
                              Apply Now
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="navigations">
                <CarouselPrevious className="rounded-none left-[90%] translate-y-0 top-[90%] w-7 h-7" />
                <CarouselNext className="rounded-none right-20 translate-y-0 top-[90%] w-7 h-7" />
              </div>
            </Carousel>
          </div>

          <div className="intro pt-20 pb-5 max-w-[100rem] mx-auto px-[5%]">
            <div className="header mb-16">
              <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold mb-8 heading2-bold">
                Regardless of your{" "}
                <span className="text-[#FF5900]">career</span> stage
              </h1>
              <p className="mb-8 w-[80%]">
                we offer opportunities for growth and development. Whether
                you're just starting out or are an experienced professional, our
                organization supports your ambitions and helps you achieve your
                career goals.
              </p>
            </div>
            <div className="lg:pb-20 pb-10">
              <HoverSection link={link} link_content={link_content} />
            </div>
          </div>

          <div className="intro pt-10 pb-20 max-w-[100rem] mx-auto px-[5%]">
            <div className="grid grid-cols-2 gap-10">
              <div className="header mb-16 col-span-1">
                <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold mb-8 heading2-bold">
                  Work with <span className="text-[#FF5900]">Us</span>
                </h1>
                <p className="mb-8">
                  Join Us and advance your career! We value innovation,
                  collaboration, and growth. Be part of a dynamic team and build
                  a rewarding future with us
                </p>
                <Button
                  className={
                    buttonVariants({ variant: "outline" }) + " p-0 h-fit"
                  }
                >
                  <Link href="/contact-us" className="px-4 py-2 h-10 flex justify-center items-center">
                    Apply Now
                  </Link>
                </Button>
              </div>
              <div className="col-span-1">
                <Image
                  width={1000}
                  height={1000}
                  src="/assets/work.webp"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="connection py-20 max-w-[100rem] mx-auto px-[5%]">
            <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold mb-16 heading2-bold text-center">
              Stay <span className="text-[#FF5900]">Connected</span>
            </h1>

            <div className="grid grid-cols-3 gap-10 py-10">
              {connection.map((connect, index) => (
                <div key={index} className="col-span-1">
                  <div className="w-fit mx-auto">
                    <div className="w-16 h-16 mb-8 relative -left-2">
                      <Image
                        width={1000}
                        height={1000}
                        src="/assets/finger-tap.webp"
                        alt="finger-tap"
                        className="w-full h-full"
                      />
                    </div>
                    <h1 className=" text-2xl font-bold mb-8">
                      {connect.title}
                    </h1>
                    <p className="mb-16 text-gray-500">{connect.content}</p>
                    <Link href={connect.link}>Learn More</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
