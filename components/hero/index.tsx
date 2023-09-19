import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="relative flex flex-col gap-5 items-center">
      <div className="absolute left-0 right-0 top-[200px] bottom-0 w-full bg-[url('/Gradient.svg')]" />
      <div className=" pt-[260px] px-[242px] pb-[109px] w-full text-center items-center flex flex-col gap-[72px]">
        <div className="flex flex-col gap-[28px] text-center items-center">
          <Image
            src="/hero-image.svg"
            alt="hero-image"
            width={1028}
            height={166}
            className=""
          />
          <span className="text-[24px] text-[#ECECEE] font-[400]">
            We’re on a mission to make it smooth and simple
          </span>
        </div>
        <Button
          className="text-[#000000] text-[24px] font-[600] bg-[#FFFFFF] hidden px-4 py-[14px] rounded-[100px] h-[58px] md:flex z-10"
          variant="outline"
        >
          Get Started for Free
        </Button>
      </div>
      <Image
        src="/hero.svg"
        alt="hero"
        width={1078}
        height={600}
        className="z-10"
      />
    </div>
  );
};

export default Hero;
