import { MapPin, PaperPlaneTilt } from "@/lib/icons";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const footerNav = [
  {
    label: "Documentation",
    route: "",
  },
  {
    label: "Privacy Policy",
    route: "",
  },
  {
    label: "Support",
    route: "",
  },
];

const footerCareer = [
  {
    label: "Careers",
    route: "",
  },
  {
    label: "Contact Sales",
    route: "",
  },
];

const footerContact = [
  {
    label: "Bengaluru, India",
    route: "",
    icon: <MapPin size={20} color="#FFFFFF" className="opacity-50" />,
  },
  {
    label: "hello@quashbugs.com",
    route: "",
    icon: <PaperPlaneTilt size={20} color="#FFFFFF" className="opacity-50" />,
  },
];

const footerMedia = ["/linkedIn.svg", "/product-hunt.svg", "/x-logo.svg"];

const Footer = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col bottom-0 w-full gap-12 md:gap-16 pl-[30px] pt-[26px] pr-[122px] pb-[96px] md:pl-[122px] md:pt-[64px] md:pr-[200px] md:pb-[116px] text-[16px] font-[400] text-[#ECECEE] md:text-[24px] bg-[#0D0D0D]">
      <Image
        src="/logo-mobile.svg"
        alt="Quash Logo"
        width={95}
        height={24}
        priority
        className="flex md:hidden"
      />
      <Image
        src="/logo-mobile.svg"
        alt="Quash Logo"
        width={118}
        height={30}
        priority
        className="hidden md:flex"
      />
      <div className="flex flex-col gap-12 md:flex-row md:justify-between md:items-start">
        <div className="flex flex-col gap-6 md:gap-8 justify-center items-start text-center md:justify-start">
          {footerNav.map((nav, index) => (
            <a key={index} href={nav.route} target="_blank">
              {nav.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-6 md:gap-8 justify-center md:justify-start items-start text-center">
          {footerCareer.map((nav, index) => (
            <a key={index} href={nav.route} target="_blank">
              {nav.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-6 md:gap-8 justify-center items-start md:justify-start">
          <div className="flex gap-[22px] justify-start">
            {footerMedia.map((media, index) => (
              <>
                <Image
                  key={index}
                  src={media}
                  alt={media}
                  width={48}
                  height={48}
                  className="ml-[-5px] flex md:hidden"
                />
                <Image
                  key={index}
                  src={media}
                  alt={media}
                  width={71}
                  height={71}
                  className="ml-[-5px] hidden md:flex"
                />
              </>
            ))}
          </div>
          <div className="flex flex-col gap-6 md:gap-4 justify-center items-start text-center">
            {footerContact.map((nav, index) => (
              <div
                className="flex justify-start items-center gap-3"
                key={index}
              >
                {nav.icon}
                <a href={nav.route} target="_blank">
                  {nav.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
