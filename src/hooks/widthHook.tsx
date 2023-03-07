import { useEffect, useState } from "react";

const useWidth = () => {
  const [state, setState] = useState<number | undefined>();

  const handleResize = () => {
    setState(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();


    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return state
};

export default useWidth;
