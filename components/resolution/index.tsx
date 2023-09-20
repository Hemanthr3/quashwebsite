import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const resoltionMedia = ["/context.svg", "/crash.svg", "/ai.svg"];

const Resolution = () => {
  return (
    <div className="flex px-4 pb-16 flex-col justify-center items-center">
      <div className="relative w-full flex justify-center items-center flex-col">
        <Image
          src="/resolution-gradient.svg"
          alt="resolution-gradient"
          width={192}
          height={192}
          className=""
        />
        <div className="w-full h-[48px] absolute top-0 bg-black"></div>
        <div className="absolute top-[48px] flex flex-col justify-center items-center">
          <div className="resolution-gradient-line" />
          <span className="resolution-gradient-text">Resolution</span>
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
        {resoltionMedia.map((media, index) => (
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

export default Resolution;
