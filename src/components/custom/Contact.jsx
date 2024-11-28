import React from "react";
import CustomHeader from "./CustomHeader";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import Image from "next/image";
import { MailIcon, PhoneIcon } from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <section className="bg-black lg:py-16 py-10 group">
        <div className=" max-w-[100rem] mx-auto px-[5%]">
          <CustomHeader
            header1="Get in Touch"
            header2="Contact"
            className="before:-right-3 mb-20"
          />
          <div className="grid lg:grid-cols-2 lg:gap-20 gap-10 w-[90%] mx-auto">
            <div className="col-span-1 z-[3]">
              <div className="form p-8 bg-white rounded text-black flex items-center flex-col relative">
                <h1 className="text-2xl text-center mb-5 font-semibold relative w-fit before:w-20 before:h-1 before:rounded-full before:absolute before:bottom-0 before:-right-3 before:bg-[#ff5900]">
                  Contact
                </h1>
                <form className="w-full">
                  <div className="element mb-3">
                    <Label htmlFor="name">Name</Label>
                    <Input className="mt-1.5 shadow-md" name="name" />
                  </div>
                  <div className="element mb-3">
                    <Label htmlFor="email">Email</Label>
                    <Input className="mt-1.5 shadow-md" name="email" />
                  </div>
                  <div className="element mb-8">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      className="mt-1.5 shadow-md resize-none"
                      rows="5"
                    />
                  </div>
                  <div className="element flex justify-center items-center">
                    <Button className="text-white">Send</Button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-span-1 relative z-[1] flex md:flex-col md:items-end items-center md:justify-end justify-center">
              <div className="w-full lg:block hidden absolute top-0">
                <div className="h-full overflow-hidden">
                  <Image
                    width={1000}
                    height={1000}
                    alt=""
                    className="w-full h-full filter saturate-0 group-hover:scale-110 group-hover:saturate-100 ease-in-out duration-200 transition-all"
                    src="/assets/contact.webp"
                  />
                </div>
              </div>
              <div className="w-[90%] mx-auto">
                <ul className="flex">
                  <li className="w-fit mx-auto">
                    <a
                      href="tel:+7985322738"
                      target="_blank"
                      className="bg-black flex flex-col justify-center items-center"
                    >
                      <div className="md:w-20 w-16 md:h-20 h-16 grid place-items-center rounded-full border border-[#ff5900] mb-3">
                        <PhoneIcon
                          fill="#ff5900"
                          className="text-black w-8 h-8"
                        />
                      </div>
                      <p className="text-xs">+91 79853 22738</p>
                    </a>
                  </li>
                  <li className="w-fit mx-auto">
                    <a
                      href="mailto:contact.us@befog.in"
                      target="_blank"
                      className="bg-black flex flex-col justify-center items-center "
                    >
                      <div className="bg-black md:w-20 w-16 md:h-20 h-16 grid place-items-center rounded-full border border-[#ff5900] mb-3">
                        <MailIcon
                          fill="#ff5900"
                          className="text-black w-8 h-8"
                        />
                      </div>
                      <p className="text-xs">contact.us@befog.in</p>
                    </a>
                  </li>
                  <li className="w-fit mx-auto">
                    <a
                      href="https://www.instagram.com/befogtech/"
                      target="_blank"
                      className="bg-black flex flex-col justify-center items-center "
                    >
                      <div className="bg-black md:w-20 w-16 md:h-20 h-16 grid place-items-center rounded-full border border-[#ff5900] mb-3">
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 25 25"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13.785 0C15.1912 0.00374991 15.9049 0.0112497 16.5211 0.0287493L16.7636 0.0374991C17.0436 0.0474988 17.3198 0.0599985 17.6536 0.0749981C18.9835 0.137497 19.891 0.347492 20.6872 0.656234C21.5121 0.973727 22.2071 1.40372 22.9021 2.09745C23.5379 2.7221 24.0297 3.47801 24.3432 4.3124C24.652 5.10863 24.862 6.0161 24.9245 7.34732C24.9395 7.67981 24.952 7.95606 24.962 8.2373L24.9694 8.4798C24.9882 9.09478 24.9957 9.80851 24.9982 11.2147L24.9994 12.1472V13.7847C25.0025 14.6964 24.9929 15.6081 24.9707 16.5196L24.9632 16.7621C24.9532 17.0433 24.9407 17.3196 24.9257 17.6521C24.8632 18.9833 24.6507 19.8895 24.3432 20.687C24.0297 21.5214 23.5379 22.2773 22.9021 22.9019C22.2774 23.5378 21.5215 24.0296 20.6872 24.3432C19.891 24.6519 18.9835 24.8619 17.6536 24.9244L16.7636 24.9619L16.5211 24.9694C15.9049 24.9869 15.1912 24.9956 13.785 24.9981L12.8526 24.9994H11.2164C10.3043 25.0026 9.39214 24.993 8.48028 24.9706L8.2378 24.9631C7.94107 24.9519 7.64442 24.939 7.34784 24.9244C6.01791 24.8619 5.11045 24.6519 4.31299 24.3432C3.47907 24.0295 2.72363 23.5376 2.09935 22.9019C1.46307 22.2774 0.970798 21.5215 0.656928 20.687C0.348194 19.8908 0.138204 18.9833 0.0757071 17.6521L0.038209 16.7621L0.0319595 16.5196C0.00891822 15.6081 -0.00149904 14.6964 0.00071096 13.7847V11.2147C-0.00274873 10.303 0.00641844 9.39127 0.0282097 8.4798L0.0369592 8.2373C0.0469587 7.95606 0.059458 7.67981 0.0744573 7.34732C0.136954 6.0161 0.346943 5.10988 0.655678 4.3124C0.97028 3.47766 1.46342 2.72173 2.10061 2.09745C2.72452 1.4619 3.47952 0.970068 4.31299 0.656234C5.11045 0.347492 6.01666 0.137497 7.34784 0.0749981C7.68032 0.0599985 7.95781 0.0474988 8.2378 0.0374991L8.48028 0.0299992C9.39173 0.00779069 10.3034 -0.00179333 11.2151 0.00124988L13.785 0ZM12.5001 6.24985C10.8426 6.24985 9.25293 6.90831 8.08089 8.08039C6.90884 9.25246 6.2504 10.8421 6.2504 12.4997C6.2504 14.1573 6.90884 15.7469 8.08089 16.919C9.25293 18.0911 10.8426 18.7495 12.5001 18.7495C14.1576 18.7495 15.7472 18.0911 16.9193 16.919C18.0913 15.7469 18.7498 14.1573 18.7498 12.4997C18.7498 10.8421 18.0913 9.25246 16.9193 8.08039C15.7472 6.90831 14.1576 6.24985 12.5001 6.24985ZM12.5001 8.74979C12.9925 8.74971 13.4801 8.84662 13.9351 9.03499C14.3901 9.22337 14.8035 9.49952 15.1518 9.84767C15.5 10.1958 15.7763 10.6092 15.9648 11.0641C16.1534 11.519 16.2504 12.0066 16.2505 12.4991C16.2506 12.9915 16.1537 13.4792 15.9653 13.9341C15.7769 14.3891 15.5008 14.8026 15.1527 15.1508C14.8045 15.4991 14.3912 15.7754 13.9363 15.9639C13.4814 16.1524 12.9938 16.2495 12.5013 16.2496C11.5068 16.2496 10.553 15.8545 9.84981 15.1513C9.14659 14.448 8.75152 13.4942 8.75152 12.4997C8.75152 11.5052 9.14659 10.5514 9.84981 9.84811C10.553 9.14487 11.5068 8.74979 12.5013 8.74979M19.0635 4.37489C18.6491 4.37489 18.2517 4.53951 17.9587 4.83253C17.6657 5.12555 17.5011 5.52297 17.5011 5.93736C17.5011 6.35175 17.6657 6.74917 17.9587 7.04218C18.2517 7.3352 18.6491 7.49982 19.0635 7.49982C19.4779 7.49982 19.8753 7.3352 20.1683 7.04218C20.4613 6.74917 20.6259 6.35175 20.6259 5.93736C20.6259 5.52297 20.4613 5.12555 20.1683 4.83253C19.8753 4.53951 19.4779 4.37489 19.0635 4.37489Z"
                            fill="#FF5900"
                          />
                        </svg>
                      </div>
                      <p className="text-xs">@befogtech</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <p className="text-center mt-16">
            Get the info you’re looking right Now
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
