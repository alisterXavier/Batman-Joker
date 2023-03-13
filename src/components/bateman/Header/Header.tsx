import { useSelector } from "react-redux";
import { StoreInterface } from "@/types/types";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { useTransform, useScroll, useSpring, motion } from "framer-motion";
import useWidth from "@/hooks/widthHook";

const Header = () => {
  const mobileSize = useWidth();
  const batmanTitleRef = useRef<HTMLHeadingElement>(null);
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
    const element = batmanTitleRef.current;
    const onResize = () => {
      if (element) {
        setElementTop(
          (element.getBoundingClientRect().top - 500) + window.scrollY ||
            window.pageYOffset
        );
        setClientHeight(window.innerHeight);
      }
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [batmanTitleRef]);

  useEffect(() => {}, []);
  return (
    <main
      className={`hero-section min-w-[100vw] h-[100vh] bg-black relative flex items-center justify-center ${
        isTransitionActive && "activate-glitch"
      } `}
      data-hero
    >
      <motion.h1
        className="character-name text-[#e7b200] left-5 z-[1] text-[50px] lg:text-[100px] font-bold absolute"
        ref={batmanTitleRef}
        style={{ x }}
      >
        Batman
      </motion.h1>

      <motion.div className={`glitch lg:translate-x-[25%]`} style={{ opacity }}>
        <div className="glitch__img batman-img"></div>
        <div className="glitch__img batman-img"></div>
        <div className="glitch__img batman-img"></div>
        <div className="glitch__img batman-img"></div>
        <div className="glitch__img batman-img"></div>
      </motion.div>
    </main>
  );
};

export default Header;
