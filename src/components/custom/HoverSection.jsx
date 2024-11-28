import React, { useEffect, useLayoutEffect, useState } from "react";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const HoverSection = ({ link, link_content }) => {
  const [activeLinkId, setActiveLinkId] = useState(null);
  const [permanentLinkId, setPermanentLinkId] = useState(null);
  const [career, setCareer] = useState(false);

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      const currentUrl = window.location.href;
      if (currentUrl.includes("career")) {
        setCareer(true);
      } else {
        setCareer(false);
      }
    }
  }, []);

  return (
    <>
      <div className="services grid lg:grid-cols-2 gap-8">
        <div className="links-cont col-span-1">
          <ul>
            {link.map((item) => (
              <li
                key={item.id}
                onMouseEnter={() => {
                  setPermanentLinkId(null);
                  setActiveLinkId(item.id);
                }}
                onMouseLeave={() => {
                  setActiveLinkId(null);
                }}
                onClick={() => setPermanentLinkId(item.id)}
                className="lg:text-3xl text-2xl font-semibold lg:py-6 py-4 flex items-center group cursor-pointer md:max-w-[30rem]"
              >
                <div
                  className={
                    (permanentLinkId === item.id ? `w-4` : `w-0`) +
                    ` h-4 mr-5 bg-[#ff5900] group-hover:w-4 ease-in-out duration-200 transition-all`
                  }
                />
                <span
                  className={
                    (permanentLinkId === item.id ? "text-white" : "") +
                    `text-white/50 group-hover:text-white ease-in-out duration-200 transition-all`
                  }
                >
                  {item.link}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-1 justify-center items-center relative lg:flex hidden">
          <div
            className={`default transition-opacity duration-200 ${
              activeLinkId || permanentLinkId ? "opacity-0" : "opacity-100"
            } ${career ? "hidden" : "block"}`}
          >
            <Image
              alt=""
              width={1000}
              height={1000}
              src="/assets/service-page/coding.webp"
            />
          </div>
          <div className="hover-items absolute w-full h-full">
            {link_content.map((link, index) => (
              <div
                className={`link-cont relative transition-opacity duration-200 ${
                  activeLinkId === link.id || permanentLinkId === link.id
                    ? "opacity-100"
                    : "opacity-0"
                }`}
                key={index}
              >
                <div className="absolute h-full">
                  <div className="content">
                    <h1 className="text-2xl font-medium flex items-center mb-3">
                      <span className="w-2.5 h-2.5 block bg-[#ff5900] mr-5" />
                      {link.head}
                    </h1>
                    <p className="h-40">{link.content}</p>
                    {career ? (
                      <></>
                    ) : (
                      <Link
                        href={link.cont_link}
                        className=" flex items-center"
                      >
                        Get in Touch <MoveRight className=" w-7 h-7 ml-5" />
                      </Link>
                    )}
                  </div>
                  {career ? (
                    <></>
                  ) : (
                    <div className="img-cont w-2/3 bottom-0 h-full ml-auto mr-5">
                      <Image
                        alt=""
                        width={1000}
                        height={1000}
                        src={link.img}
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HoverSection;
