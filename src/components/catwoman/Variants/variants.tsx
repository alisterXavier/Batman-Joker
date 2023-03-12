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
      className="suits-wrapper w-screen h-screen flex items-center justify-center"
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
        <SwiperSlide className="lg:w-full lg:h-full">
          <div className="flex justify-center items-center w-full h-full">
            <div
              className="img-container relative w-[80%] h-[20%] lg:w-[25%] lg:h-[70%] flex justify-center"
              onMouseMove={parallex}
            >
              <div className="imgs-wrapper relative w-[100%] h-[100%] flex items-center justify-center">
                <div className="absolute z-[1] left-0 top-0 w-full h-[45%] mb-auto">
                  <Image
                    alt="bg"
                    src="/assets/images/catwoman/headshot/bg.png"
                    quality={100}
                    className="absolute"
                    fill
                  />
                </div>
                <div
                  className="character-img relative w-[100%] h-[100%] "
                  ref={(e: HTMLDivElement) => {
                    sliderList.current[0] = e;
                  }}
                >
                  <Image
                    alt="variant"
                    src="/assets/images/catwoman/headshot/variant.png"
                    quality={100}
                    className="bat"
                    fill
                  />
                </div>
                <h1 className="lg:text-[50px] text-sm absolute bottom-[10%]">
                  Catwoman
                </h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full h-full">
          <div className="flex justify-center items-center w-full h-full">
            <div
              className="img-container relative w-[80%] h-[20%] lg:w-[70%] lg:h-[70%]"
              onMouseMove={parallex}
            >
              <div className="imgs-wrapper relative w-[100%] h-[100%] flex items-center justify-center">
                <div>
                  <Image
                    alt="bg"
                    src="/assets/images/catwoman/origins/bg.png"
                    quality={100}
                    className="absolute "
                    fill
                  />
                  <h1 className="text-lg lg:text-[60px] text-red-600 absolute top-[5%] left-[5%]">
                    Catwoman
                  </h1>
                </div>
                <div
                  className="character-img relative w-[100%] h-full"
                  ref={(e: HTMLDivElement) => {
                    sliderList.current[1] = e;
                  }}
                >
                  <Image
                    alt="variant"
                    src="/assets/images/catwoman/origins/variant.png"
                    quality={100}
                    className=""
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
