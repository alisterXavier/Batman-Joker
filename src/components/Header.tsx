import { useSelector } from "react-redux";
import { StoreInterface } from "@/types/types";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { useTransform, useScroll, useSpring, motion } from "framer-motion";
import useWidth from "@/hooks/widthHook";

const Header = ({
  characterName,
  secondName,
}: {
  characterName: string;
  secondName?: string;
}) => {
  const mobileSize = useWidth();
  const TitleRef = useRef<HTMLHeadingElement>(null);
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const { scrollY } = useScroll();
  const initial = elementTop - clientHeight;

  const xRange = mobileSize && mobileSize <= 1024 ? [0, 0] : [300, 0];
  const opacityRange = [0, 1];

  const finalX = elementTop + xRange[0];
  const finalOpacity = elementTop + opacityRange[0];

  const xTransform = useTransform(scrollY, [initial, finalX], xRange);
  const opacity = useTransform(scrollY, [initial, finalOpacity], opacityRange);

  const x = useSpring(xTransform, { stiffness: 200, damping: 90 });

  const isTransitionActive = useSelector(
    (state: StoreInterface) => state.transition.jokerTransition
  );
  useLayoutEffect(() => {
    const element = TitleRef.current;
    const onResize = () => {
      if (element) {
        setElementTop(
          element.getBoundingClientRect().top - 500 + window.scrollY ||
            window.pageYOffset
        );
        setClientHeight(window.innerHeight);
      }
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [TitleRef]);

  useEffect(() => {}, []);
  return (
    <main
      className={`hero-section min-w-[100vw] h-[100vh] bg-black relative flex items-center justify-center ${
        isTransitionActive && "activate-glitch"
      } `}
      data-hero
    >
      <motion.h1
        className={`${
          characterName === "harley"
            ? " lg:text-[#781312] text-white left-[10%] text-[70px] lg:text-[110px] capitalize"
            : "left-5 text-[50px] lg:text-[100px]"
        } z-[1] font-bold absolute`}
        ref={TitleRef}
        style={{ x }}
      >
        {characterName}
      </motion.h1>
      {secondName && (
        <motion.h1
          className="character-name text-[#781312] lg:text-white z-[1] top-[50%] left-[40%] lg:left-[20%] 
      text-[70px] lg:text-[110px] font-bold absolute"
          style={{ x }}
        >
          {secondName}
        </motion.h1>
      )}
      <motion.div className={`glitch lg:translate-x-[25%]`} style={{ opacity }}>
        <div className={`glitch__img ${characterName.toLowerCase()}-img`}></div>
        <div className={`glitch__img ${characterName.toLowerCase()}-img`}></div>
        <div className={`glitch__img ${characterName.toLowerCase()}-img`}></div>
        <div className={`glitch__img ${characterName.toLowerCase()}-img`}></div>
        <div className={`glitch__img ${characterName.toLowerCase()}-img`}></div>
      </motion.div>
    </main>
  );
};

export default Header;
