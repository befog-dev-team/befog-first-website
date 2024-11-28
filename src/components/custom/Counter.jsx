'use client'
import React, { useState, useEffect } from "react";
// import Image from "next/image";

const Counter = () => {
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [reviews, setReviews] = useState(0);

  useEffect(() => {
    const incrementCounters = () => {
      let projectCount = 0;
      let clientCount = 0;
      let reviewCount = 0;
      const projectTarget = 10;
      const clientTarget = 15;
      const reviewTarget = 50;

      const interval = setInterval(() => {
        if (projectCount < projectTarget) {
          projectCount++;
          setProjects(projectCount);
        }
        if (clientCount < clientTarget) {
          clientCount++;
          setClients(clientCount);
        }
        if (reviewCount < reviewTarget) {
          reviewCount++;
          setReviews(reviewCount);
        }
        if (projectCount === projectTarget && clientCount === clientTarget && reviewCount === reviewTarget) {
          clearInterval(interval);
        }
      }, 50); // Adjust this value to control the speed of the counting
    };

    incrementCounters();
  }, []);

  return (
    <div className="numbers bg-[#FF5900] py-6 mx-auto max-w-[100rem] flex justify-center items-center relative">
      {/* <Image
        width={1000}
        height={1000}
        className="object-cover w-full"
        src="/assets/wave.webp"
        alt="Background"
      /> */}
      <div className="counter-cont md:w-[75%] w-[90%] flex md:flex-row flex-col justify-between items-center">
        <div className="projects flex flex-col items-center justify-center w-36 py-4">
          <span className="lg:text-7xl text-5xl font-semibold">{projects}+</span>
          <span>Projects</span>
        </div>
        <div className="clients flex flex-col items-center justify-center w-36 py-4">
          <span className="lg:text-7xl text-5xl font-semibold">{clients}+</span>
          <span>Clients</span>
        </div>
        <div className="reviews flex flex-col items-center justify-center w-36 py-4">
          <span className="lg:text-7xl text-5xl font-semibold">{reviews}+</span>
          <span>Reviews</span>
        </div>
      </div>
    </div>
  );
};

export default Counter;
