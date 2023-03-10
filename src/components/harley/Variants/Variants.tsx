import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
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
    <section
      className="suits-wrapper w-screen h-screen text-[#e7b200] flex items-center justify-center"
      data-variants
    >
      <Swiper
        className="w-full h-full"
        pagination={{
          clickable: true,
          enabled: true,
        }}
        modules={[Pagination]}
      >

        <SwiperSlide className="w-full h-full">
          <div className="flex justify-center items-center w-full h-full">
            <div
              className="img-container relative w-[70%] h-[55%] lg:w-[35%] lg:h-[80%]"
              onMouseMove={parallex}
            >
              <div className="imgs-wrapper relative w-[100%] h-[100%] flex items-center justify-center">
                <div>
                  <Image
                    alt="bg"
                    src="/assets/images/harley/updown/bg.png"
                    quality={100}
                    className="absolute"
                    fill
                  />
                </div>
                <div
                  className="character-img relative w-full h-full"
                  ref={(e: HTMLDivElement) => {
                    sliderList.current[0] = e;
                  }}
                >
                  <Image
                    alt="bg"
                    src="/assets/images/harley/updown/variant.png"
                    quality={100}
                    className=""
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="w-full h-full">
          <div className="flex justify-center items-center w-full h-full">
            <div
              className="img-container relative w-[85%] h-[30%] lg:w-[60%] lg:h-[70%] flex justify-center"
              onMouseMove={parallex}
            >
              <div className="imgs-wrapper relative w-[100%] h-[100%] flex items-center justify-center">
                <div className="absolute left-0 top-0 w-full h-full">
                  <Image
                    alt="bg"
                    src="/assets/images/harley/hammer/bg.png"
                    quality={100}
                    className="absolute"
                    fill
                  />
                  <h1 className="text-lg lg:text-[100px] text-white absolute z-[1] top-[20%] right-[95%] lg:right-[88%] rotate-[-90deg]">
                    Harley
                  </h1>
                  <h1 className="text-xl lg:text-[100px] text-[#781312] z-[1] absolute bottom-[20%] left-[95%] lg:left-[88%] rotate-[90deg]">
                    Quinn
                  </h1>
                </div>
                <div
                  className="character-img relative w-[100%] h-[100%]"
                  ref={(e: HTMLDivElement) => {
                    sliderList.current[1] = e;
                  }}
                >
                  <Image
                    alt="variant"
                    src="/assets/images/harley/hammer/variant.png"
                    quality={100}
                    className="bat"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Variants;
