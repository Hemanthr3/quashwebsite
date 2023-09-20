import { ArrowRight, ClipboardText } from "@/lib/icons";
import Image from "next/image";
import React, { useState } from "react";

const OS = [
  {
    label: "Android",
    value: "android",
  },
  {
    label: "IOS",
    value: "iOS",
  },
  {
    label: "Flutter",
    value: "flutter",
  },
];

const CodeSection = () => {
  const [isOs, setIsOs] = useState("android");

  return (
    <div className="px-4 py-[96px] md:px-[275px] md:py-[250px] flex flex-col gap-8 justify-center items-center text-center">
      <span className="w-[282px] text-[18px] md:text-[42px] md:w-full text-[#FFFFFF] font-[500] leading-normal">
        Integrate Quash SDK in less than a minute
      </span>
      <div className="relative w-full">
        {/* <ClipboardText
          size={34}
          className="
          absolute top-2 right-2 md:top-[18px] md:right-[18px]"
        /> */}
        <div className="w-full  rounded-2xl md:rounded-3xl bg-[#0D0D0D]">
          <div className="px-4 pt-[6px] gap-3 flex justify-start items-center border-b border-[#4A4B50] text-[12px] font-[400]">
            {OS.map((item, index) => (
              <span
                onClick={() => {
                  setIsOs(item.value);
                }}
                key={index}
                className={`${
                  isOs === item.value
                    ? "text-[#ECECEE] border-b"
                    : "text-[#ECECEE99]"
                }   border-[rgba(255, 255, 255, 0.06)] mb-[-0.2px]`}
              >
                {item.label}
              </span>
            ))}

            {/* <span className="text-[#ECECEE99]"></span>
            <span className="text-[#ECECEE99]"></span> */}
          </div>
          <div className="w-full overflow-x-scroll flex md:item-center gap-[12px] p-4">
            <div className="numbers flex flex-col ">
              <p>1</p>
              <p>2</p>
              <p>3</p>
              <p>4</p>
              <p>5</p>
            </div>
            <div className="border-l border-[#4A4B50]" />
            {isOs === "android" ? (
              <div className=" md:my-0 md:mx-0 flex flex-col items-start w-[370px] md:w-auto">
                <p className="quick">{`Quash.begin (`}</p>
                <div className="flex flex-col ml-[50px] md:gap-[6px]">
                  <div className="flex">
                    <p className="key">{`withToken: `}</p>
                    <p className="value">“YOUR_APP_TOKEN_HERE”</p>
                  </div>
                  <div className="flex">
                    <p className="key">{`shouldCollectCrashLogs`}</p>
                    <p className="value">=true</p>
                  </div>
                  <div className="flex">
                    <p className="key">{`triggerType`}</p>
                    <p className="value">{`=[Quash.FAB, Quash.SHAKE]`}</p>
                  </div>
                </div>
                <p className="quick">{`)`}</p>
              </div>
            ) : isOs === "ios" ? (
              <div
                className={`my-[28px] mx-[15px] md:my-0 md:mx-0 flex flex-col items-start ${
                  !isOs ? "w-[321px]" : "w-[365px]"
                } md:w-auto`}
              >
                <p className="quick">{`Quash.begin (`}</p>
                <div className="flex flex-col ml-[50px] md:gap-[6px]">
                  <div className="flex">
                    <p className="key">{`withKey: `}</p>
                    <p className="value">“YOUR_APP_TOKEN_HERE”</p>
                  </div>
                  <div className="flex">
                    <p className="key">{`shouldCollectCrashLogs`}</p>
                    <p className="value">:true</p>
                  </div>
                  <div className="flex">
                    <p className="key">{`triggerType`}</p>
                    <p className="value">{`:[.floatingAction, .shake]`}</p>
                  </div>
                </div>
                <p className="quick">{`)`}</p>
              </div>
            ) : (
              isOs === "flutter" && (
                <div
                  className={`my-[28px] mx-[15px] md:my-0 md:mx-0 flex flex-col items-start ${
                    !isOs ? "w-[321px]" : "w-[365px]"
                  } md:w-auto`}
                >
                  <p className="quick">{`Quash.begin (`}</p>
                  <div className="flex flex-col ml-[50px] md:gap-[6px]">
                    <div className="flex">
                      <p className="key">{`withKey: `}</p>
                      <p className="value">“YOUR_APP_TOKEN_HERE”</p>
                    </div>
                    <div className="flex">
                      <p className="key">{`shouldCollectCrashLogs`}</p>
                      <p className="value">:true</p>
                    </div>
                    <div className="flex">
                      <p className="key">{`triggerType`}</p>
                      <p className="value">{`:[.floatingAction, .shake]`}</p>
                    </div>
                  </div>
                  <p className="quick">{`)`}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <a
        href=""
        className="text-[16px] md:text-[42px] font-[300] text-white flex gap-2 justify-center items-center"
      >
        <span>Learn more</span>
        <ArrowRight size={16} color="#ffffff" />
      </a>
    </div>
  );
};

export default CodeSection;
