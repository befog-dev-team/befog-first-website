"use client";
import { lazy, Suspense, } from "react";
const Banner = lazy(() => import("@/components/custom/Banner"));
// const Services = lazy(() => import("@/components/custom/Services"));
const AboutUs = lazy(() => import("@/components/custom/AboutUs"));
const Founder = lazy(() => import("@/components/custom/Founder"));
// const Career = lazy(() => import("@/components/custom/Career"));
// const Testimonial = lazy(() => import("@/components/custom/Testimonial"));
const Contact = lazy(() => import("@/components/custom/Contact"));
// const Counter = lazy(() => import("@/components/custom/Counter"));

export default function Home() {
  return (
    <>
      <Suspense fallback={null}>
        <Banner />
        {/* <Counter />
        <Services /> */}
        <AboutUs />
        <Founder />
        {/* <Career />
        <Testimonial /> */}
        <Contact />
      </Suspense>
    </>
  );
}
