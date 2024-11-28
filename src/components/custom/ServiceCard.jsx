import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
// import Image from "next/image";
import Link from "next/link";
import { MoveRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useDispatch } from "react-redux";
import { setTargetSection } from "@/redux/slice/scroll";

const ServiceCard = ({ service, className }) => {
  const dispatch = useDispatch()
  return (
    <Card
      className={cn(
        `border-[#FFB6B6] relative xl:w-[350px] sm:w-full w-[350px] max-w-[350px] mx-auto group overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.50)] rounded-none bg-[#1B1B1B] cursor-pointer `,
        // className
      )}
    >
      <div className="z-[2] group-hover:backdrop-blur-sm">
        <CardHeader className="group-hover:scale-105 ease-in-out transition-all duration-200">
          <h1 className="sm:text-xl text-lg font-semibold text-white z-[3]">
            {service.title}
          </h1>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-white group-hover:scale-105 ease-in-out transition-all duration-200 h-16 z-[3]">
            {service.description}
          </CardDescription>
        </CardContent>
        <CardFooter className="relative px-0">
          <div className="relative w-full h-64">
            <p className="text-sm mt-8 text-white font-medium w-[80%] absolute ease-in-out transition-all duration-200 opacity-0 group-hover:opacity-100 z-[3] left-16">
              {service.p}
            </p>
            <div
              style={{
                // linear-gradient(${service.blend}),
                backgroundImage: `url(${service.image})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundBlendMode: "hue",
              }}
              className={cn(
                `w-full relative h-[16rem] transition-all duration-200 ease-in-out group-hover:blur-lg z-[1] before:h-[120%] before:absolute before:-top-5 before:left-0 before:bg-transparent before:w-full group-hover:scale-90 `
              )}
            ></div>
          </div>
          <Link
          onClick={()=>{
            dispatch(setTargetSection(service.id))
          }}
            href="/services"
            className=" flex items-center justify-center absolute -bottom-5 right-5 group-hover:bottom-5 ease-in-out duration-200 transition-all text-white z-[3]"
          >
            Expand <MoveRightIcon className="w-5 h-5 ml-2 animate-pulse" />
          </Link>
        </CardFooter>
      </div>
    </Card>
  );
};

export default ServiceCard;
