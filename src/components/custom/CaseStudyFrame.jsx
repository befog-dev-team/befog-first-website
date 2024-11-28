import Image from "next/image";
import React from "react";

const CaseStudyFrame = () => {
  return (
    <>
      <div className="ultimate-frame flex items-end">
        <div className="img relative left-12 z-[1]">
          <div className="island bg-[#2F2E41] w-8 h-3 rounded-full absolute top-3 z-[2] left-1/2 transform -translate-x-1/2"></div>
          <div className="img-cont-frame w-[153px] h-[332px] py-0 rounded-2xl bg-white absolute top-1.5 left-1.5 overflow-y-scroll">
            <Image
              width={1000}
              height={1000}
              alt="lego_house"
              src="/assets/projects/lego_house.webp"
              className=" h-[28rem] w-full rounded-3xl"
            />
          </div>
          <svg
            width="167"
            height="345"
            viewBox="0 0 167 345"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M139.491 344.749H26.6622C11.9607 344.749 0 332.777 0 318.061V26.6886C0 11.9724 11.9607 0 26.6622 0H139.491C154.193 0 166.153 11.9724 166.153 26.6886V318.061C166.153 332.777 154.193 344.749 139.491 344.749Z"
              fill="#2F2E41"
            />
          </svg>
        </div>
        <div className="frame-container relative w-fit z-[0]">
          <iframe
            src="https://indiestreet.shop/"
            className={`absolute`}
            style={{
              width: `1155px`,
              height: `655px`,
              border: "none",
              overflow: "hidden",
              transform: "scale(0.5,0.5) translate(-550px,-303px)",
              // borderRadius: "8px",
              backgroundColor: "white",
            }}
            sandbox="allow-scripts allow-same-origin allow-forms"
          ></iframe>
          <svg
            width="605"
            height="469"
            viewBox="0 0 605 469"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 467.19C4 467.85 4.53 468.38 5.19 468.38H598.45C599.11 468.38 599.64 467.85 599.64 467.19C599.64 466.53 599.11 466 598.45 466H5.19C4.53 466 4 466.53 4 467.19Z"
              fill="#FF5900"
            />
            <path
              d="M322.818 349.945C321.189 359.819 312.597 367.375 302.269 367.375C291.941 367.375 283.349 359.819 281.72 349.945H229.146V463.881H375.392V349.945H322.818Z"
              fill="#B6B3C5"
            />
            <path
              d="M246.152 463.456H231.697V466.006H246.152V463.456Z"
              fill="#B6B3C5"
            />
            <path
              d="M374.116 463.88H359.662V466.431H374.116V463.88Z"
              fill="#B6B3C5"
            />
            <path
              d="M375.817 454.854H229.571V458.82H375.817V454.854Z"
              fill="#2F2E41"
            />
            <path
              d="M596.385 352.921H8.15307C3.65742 352.921 0 349.263 0 344.768V9.06445C0 4.56901 3.65742 0.911377 8.15307 0.911377H596.385C600.88 0.911377 604.538 4.56901 604.538 9.06445V344.768C604.538 349.263 600.88 352.921 596.385 352.921Z"
              fill="#2F2E41"
            />
          </svg>
        </div>
        <div className="img relative right-12 z-[1]">
          <div className="island bg-[#2F2E41] w-8 h-3 rounded-full absolute top-3 z-[2] left-1/2 transform -translate-x-1/2"></div>
          <div className="img-cont-frame w-[153px] h-[332px] rounded-2xl bg-white absolute top-1.5 left-1.5 overflow-y-scroll py-0">
            <Image
              width={1000}
              height={1000}
              alt="foot_loose"
              src="/assets/projects/foot_loose.webp"
              className=" h-[50rem] w-full rounded-3xl"
            />
          </div>
          <svg
            width="167"
            height="345"
            viewBox="0 0 167 345"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M139.491 344.749H26.6622C11.9607 344.749 0 332.777 0 318.061V26.6886C0 11.9724 11.9607 0 26.6622 0H139.491C154.193 0 166.153 11.9724 166.153 26.6886V318.061C166.153 332.777 154.193 344.749 139.491 344.749Z"
              fill="#2F2E41"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default CaseStudyFrame;
