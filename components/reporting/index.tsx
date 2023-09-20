import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const reportingMedia = ["/shake.svg", "/logs.svg", "/notes.svg"];

const Reporting = () => {
  return (
    <div className="flex px-4 pb-16 flex-col justify-center items-center">
      <div className="relative w-full flex justify-center items-center flex-col">
        {/* <Image
          src="/reporting-gradient.svg"
          alt="reporting-gradient"
          width={192}
          height={192}
          className=""
        /> */}
        <div className="grad-report h-[192px] w-[192px]"></div>
        <div className="w-full h-[48px] absolute top-0 bg-black"></div>
        <div className="absolute top-[48px] flex flex-col justify-center items-center gap-12">
          <div className="report-gradient-line" />
          <span className="report-gradient-text">Reporting</span>
        </div>
      </div>
      <Carousel
        // autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        interval={3000}
        centerMode={true}
        className=""
      >
        {reportingMedia.map((media, index) => (
          <Image
            key={index}
            src={media}
            alt={media}
            width={272}
            height={374}
            className=""
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Reporting;
