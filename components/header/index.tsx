import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { List, X } from "@/lib/icons";
import { LoaderDialog, LoaderDialogContent } from "../ui/overlay-loader";

const navButtons = ["Home", "Upcoming", "Team"];

const Header = () => {
  const [selected, setSelected] = useState("Home");
  const [open, setOpen] = useState(false);

  const mobileNav = [
    {
      label: "Home",
      value: "home",
    },
    {
      label: "UpComing",
      value: "upcoming",
    },
    {
      label: "Team",
      value: "team",
    },
    {
      label: "Sign in",
      value: "signin",
    },
  ];

  return (
    <div className="header fixed top-0 py-2 px-4 w-full flex justify-between items-center md:px-[120px] md:py-6 z-50">
      <Image
        src="/logo-mobile.svg"
        alt="Quash Logo"
        width={63}
        height={16}
        priority
        className="flex md:hidden"
      />
      <div className="flex gap-6 items-center">
        <Image
          src="/logo-mobile.svg"
          alt="Quash Logo"
          width={118}
          height={30}
          priority
          className="hidden md:flex"
        />
        <div className="hidden md:flex gap-6 items-center">
          {navButtons.map((nav, index) => (
            <Button
              key={index}
              className={`hover:text-gray-200 text-[16px] font-[500] leading-[20.8px] ${
                selected === nav ? "text-white" : "text-[#8A8894]"
              }`}
              variant="ghost"
              onClick={() => {
                setSelected(nav);
              }}
            >
              {nav}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex gap-3 md:gap-6 items-center text-center">
        <span className="text-[12px] md:text-[16px] text-[#FFFFFF] font-[600] leading-[15px] md:leading-5">
          Sign in
        </span>
        <Button
          className="text-[#000000] text-[12px] font-[600] leading-[15px] bg-[#FFFFFF] px-2 py-[6px] rounded-[100px] h-[28px] md:hidden"
          variant="outline"
        >
          Get Started
        </Button>
        <Button
          className="text-[#000000] text-[16px] font-[600] leading-[20px] bg-[#FFFFFF] hidden px-4 py-[14px] rounded-[100px] h-[48px] md:flex"
          variant="outline"
        >
          Get Started for Free
        </Button>
        <List
          size={24}
          color="#F7F8F8"
          className="flex md:hidden"
          onClick={() => {
            setOpen(true);
          }}
        />
      </div>
      {open && (
        <LoaderDialog open={true}>
          <LoaderDialogContent className="flex justify-center items-start p-0 h-full">
            <div className="w-full bg-black p-4 flex flex-col gap-1">
              <div className="flex justify-between items-center p-2">
                <span className="text-[12px] text-[#FFFFFF99] font-[500] leading-5">
                  MENU
                </span>
                <X
                  size={16}
                  color="#FFFFFF99"
                  onClick={() => {
                    setOpen(false);
                  }}
                />
              </div>
              {mobileNav.map((nav, index) => (
                <div
                  className="flex justify-start items-center p-2"
                  key={index}
                >
                  <span className="text-[12px] text-white font-[500] leading-5">
                    {nav.label}
                  </span>
                </div>
              ))}
              <div className="flex justify-between items-center p-2">
                <Button
                  className="text-[#000000] text-[12px] font-[600] leading-[15px] bg-[#FFFFFF] px-2 py-[6px] rounded-[100px] h-[28px] md:hidden"
                  variant="outline"
                >
                  Get Started for free
                </Button>
              </div>
            </div>
          </LoaderDialogContent>
        </LoaderDialog>
      )}
    </div>
  );
};

export default Header;
