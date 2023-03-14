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
          className="img-container top-[40%] lg:top-[20%] w-[95%] h-[30%] lg:w-[70%] lg:h-[70%] flex justify-center border-[10px] border-[#be8198]"
          onMouseMove={parallex}
        >
          <div className="imgs-wrapper relative w-[100%] h-[100%] flex items-center justify-center">
            <div className="absolute left-0 top-0 w-full h-full">
              <Image
                alt="bg"
                src="/assets/images/joker_variants/killing_joker/bg.png"
                quality={100}
                className="absolute"
                fill
              />
              <h1 className="lg:text-[60px] text-sm text-[#0dd859]  absolute bottom-[10%] z-[2] right-0">
                THE Joker
              </h1>
            </div>
            <div
              className="character-img relative w-[87%] h-[100%] translate-x-[-7%]"
              ref={(e: HTMLDivElement) => {
                sliderList.current[0] = e;
              }}
            >
              <Image
                alt="variant"
                src="/assets/images/joker_variants/killing_joker/variant.png"
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
          className="img-container top-[40%] lg:top-[20%] w-[94%] h-[30%] lg:w-[70%] lg:h-[70%] flex justify-center border-[10px] border-[#817091]"
          onMouseMove={parallex}
        >
          <div className="imgs-wrapper  relative w-[100%] h-[100%] flex items-center justify-center">
            <div>
              <Image
                alt="bg"
                src="/assets/images/joker_variants/heath/bg.png"
                quality={100}
                className="absolute"
                fill
              />
            </div>
            <div
              className="character-img relative w-[42%] translate-x-[6%] h-full"
              ref={(e: HTMLDivElement) => {
                sliderList.current[1] = e;
              }}
            >
              <Image
                alt="variant"
                src="/assets/images/joker_variants/heath/variant.png"
                quality={100}
                fill
              />
            </div>
            <h1 className="text-lg lg:text-[60px] text-[#817091] absolute top-[5%] left-[15%] h-[40px] lg:leading-10">
              <span>The</span>
              <span className="block ml-5">Joker</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="main-img-container">
        <div
          className="img-container top-[40%] lg:top-[20%] w-[95%] h-[30%] lg:w-[70%] lg:h-[70%] flex justify-center border-[10px] border-[#0dd859]"
          onMouseMove={parallex}
        >
          <div className="imgs-wrapper relative w-[100%] h-[100%] flex items-center justify-center">
            <div className="absolute left-0 top-0 w-[45%] h-full">
              <h1 className="text-2xl lg:text-[60px] text-[#0dd859] absolute top-[40%] left-[10%]">
                The
              </h1>
              <h1 className="text-2xl lg:text-[60px] text-[#470aa7] absolute top-[50%] left-[20%]">
                Joker
              </h1>
            </div>
            <div
              className="character-img relative w-[45%] ml-auto right-0 h-[100%]"
              ref={(e: HTMLDivElement) => {
                sliderList.current[2] = e;
              }}
            >
              <Image
                alt="variant"
                src="/assets/images/joker_variants/death_of_family/variant.png"
                quality={100}
                className="bat"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Variants;
