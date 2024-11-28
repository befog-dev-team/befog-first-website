'use client'
import React, { useEffect, useRef } from "react";
import { Label } from "../ui/label";
import CustomHeader from "./CustomHeader";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "../ui/button";
import { MoveLeft } from "lucide-react";
import { clearTargetSection, toggleContactForm } from "@/redux/slice/scroll";
import { useDispatch, useSelector } from "react-redux";

const ContactForm = () => {
  const contactRef = useRef();
  const contact = useSelector((state) => state.scroll.targetSection);
  const dispatch = useDispatch();

  useEffect(() => {
    if (contact) {
      const element = document.getElementById(contact);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        dispatch(clearTargetSection());
      }
    }
  }, [contact, dispatch]);

  return (
    <>
      <div
        ref={contactRef}
        id="contact-form"
        className="max-w-[100rem] mx-auto px-[5%] bg-black py-24 relative"
      >
        <Button
          onClick={() => dispatch(toggleContactForm(false))}
          className="bg-black text-white border hover:bg-white hover:text-black absolute top-10"
        >
          <MoveLeft className="mr-3 w-5 h-5" />
          Back
        </Button>
        <div className="header mb-20">
          <h1 className="lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold mb-10 heading2-bold text-center">
            Thank You
          </h1>
          <p className="text-center w-[70%] mx-auto">
            Thank you for your interest in Befog’s services. Please provide the
            following information about your business needs to help us serve you
            better. This information will enable us to route your request to the
            appropriate person. You should receive a response within one to two
            business days.
          </p>
        </div>
        <div className="form bg-white text-black py-10 px-10 rounded-lg max-w-6xl mx-auto">
          <CustomHeader
            header1="Contact Form"
            header2=""
            className=" before:-right-3"
          />
          <form className="mt-5">
            <div className="element mb-5">
              <Label htmlFor="name" className="font-semibold">
                Name
              </Label>
              <Input
                type="text"
                id="name"
                className="mt-1 rounded-none border-gray-300"
              />
            </div>
            <div className="element mb-5">
              <Label htmlFor="email" className="font-semibold">
                Business Email Address
              </Label>
              <Input
                type="email"
                id="email"
                className="mt-1 rounded-none border-gray-300"
              />
            </div>
            <div className="element mb-5">
              <Label htmlFor="org" className="font-semibold">
                Organization/Institute
              </Label>
              <Input
                type="text"
                id="org"
                className="mt-1 rounded-none border-gray-300"
              />
            </div>
            <div className="element mb-5">
              <Label htmlFor="phone" className="font-semibold">
                Phone/Mobile
              </Label>
              <Input
                type="text"
                id="phone"
                className="mt-1 rounded-none border-gray-300"
              />
            </div>
            <div className="element mb-5">
              <Label htmlFor="relation" className="font-semibold">
                Relation with Befog
              </Label>
              <Input
                type="text"
                id="relation"
                className="mt-1 rounded-none border-gray-300"
              />
            </div>
            <div className="element mb-5">
              <Label htmlFor="other" className="font-semibold">
                If other please specify
              </Label>
              <Input
                type="text"
                id="other"
                className="mt-1 rounded-none border-gray-300"
              />
            </div>
            <div className="element mb-5">
              <Label htmlFor="country" className="font-semibold">
                Country
              </Label>
              <Input
                type="text"
                id="country"
                className="mt-1 rounded-none border-gray-300"
              />
            </div>
            <div className="element mb-5">
              <Label htmlFor="message" className="font-semibold">
                How can we help you?
              </Label>
              <Textarea
                rows="8"
                id="message"
                className="mt-1 rounded-none border-gray-300 resize-none"
              />
            </div>
            <div className="element mb-8 flex items-center">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="font-semibold ml-2.5">
                I have read Befog’s Privacy Statement and agree to the terms of
                use
              </Label>
            </div>
            <div className="element">
              <Button className="text-white relative left-1/2 transform -translate-x-1/2">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
