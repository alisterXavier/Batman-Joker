import React, { useRef } from "react";
import Image from "next/image";

const Variants = () => {
  const sliderList = useRef<HTMLDivElement[]>([]);
  const parallex = (e: React.MouseEvent) => {
    const { pageX, pageY } = e;

    const x = ((pageX - 1000) * -1) / 200;
    const y = ((pageY - 300) * -1) / 200;

    sliderList.current?.map((item) => {
      item.style.setProperty("--x", `${x}px`);
      item.style.setProperty("--y", `${y}px`);
    });
  };

  return (
    <section className="variant-wrapper h-[300vh]" data-variants>
      <div className="main-img-container">
        <div
          className="img-container top-[40%] w-[95%] h-[30%] lg:top-[20%] lg:w-[70%] lg:h-[70%] border-[10px] border-[#e7b200]"
          onMouseMove={parallex}
        >
          <div className="imgs-wrapper relative w-[100%] h-[100%] flex items-center justify-center">
            <div className="absolute left-0 top-0 w-full h-full">
              <Image
                alt="bg"
                src="/assets/images/batman_variants/original/bg.png"
                quality={100}
                className="absolute"
                fill
              />
              <h1 className="lg:text-[60px] text-sm text-[#e7b200] rotate-[-54deg] absolute top-[40%]">
                THE BATMAN
              </h1>
            </div>
            <div
              className="character-img relative w-[85%] h-[100%] translate-x-[9%]"
              ref={(e: HTMLDivElement) => {
                sliderList.current[0] = e;
              }}
            >
              <Image
                alt="variant"
                src="/assets/images/batman_variants/original/variant.png"
                quality={100}
                className="bat"
                fill
              />
            </div>
          </div>
        </div>
      </div>
      <div className="main-img-container">
        <div
          className="img-container top-[40%] w-[95%] h-[30%] lg:top-[20%] lg:w-[70%] lg:h-[70%] border-[10px] border-[#df0000]"
          onMouseMove={parallex}
        >
          <div className="imgs-wrapper relative w-[100%] h-[100%] flex items-center justify-center">
            <div>
              <Image
                alt="bg"
                src="/assets/images/batman_variants/beyond/bg.png"
                quality={100}
                className="absolute"
                fill
              />
              <h1 className="text-lg lg:text-[60px] text-red-600 absolute top-[5%] left-[5%]">
                BATMAN
              </h1>
            </div>
            <div
              className="character-img relative w-[76%] h-full translate-x-[-15%]"
              ref={(e: HTMLDivElement) => {
                sliderList.current[1] = e;
              }}
            >
              <Image
                alt="variant"
                src="/assets/images/batman_variants/beyond/variant.png"
                quality={100}
                className="beyond-suit"
                fill
              />
              <h1 className="text-lg lg:text-[60px] text-red-600 absolute top-[55%] right-[10%]">
                BEYOND
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="main-img-container">
        <div
          className="img-container top-[40%] w-[95%] h-[30%] lg:top-[20%] lg:w-[70%] lg:h-[70%] border-[10px] border-[#23313a]"
          onMouseMove={parallex}
        >
          <div className="imgs-wrapper relative w-[100%] h-[100%] flex justify-center items-center">
            <div className="absolute left-0 top-0 w-full h-full">
              <Image
                alt="bg"
                src="/assets/images/batman_variants/wholaughs/bg.png"
                quality={100}
                className="absolute"
                fill
              />
              <h1 className="text-sm lg:text-[60px] text-[#506877] absolute top-[5%] left-[10%]">
                THE BATMAN
              </h1>
            </div>
            <div
              className="character-img relative translate-x-[-10px] w-[75%] h-[100%]"
              ref={(e: HTMLDivElement) => {
                sliderList.current[2] = e;
              }}
            >
              <Image
                alt="variant"
                src="/assets/images/batman_variants/wholaughs/variant.png"
                quality={100}
                className="bat"
                fill
              />
              <h1 className="text-sm lg:text-[60px] text-[#630e0f] absolute right-[10%] top-[70%] lg:right-[-100px]">
                Who Laughs
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Variants;
