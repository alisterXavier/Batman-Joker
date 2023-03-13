import { useEffect, useRef } from "react";

const Catch = () => {
  return (
    <div className="quote relative z-[1] h-[400vh] text-2xl lg:text-7xl">
      <div className="quote-container w-screen h-screen bg-[#e7b200] flex items-center justify-center absolute top-0 z-[1] overflow-hidden">
        <div className="fixed z-[1] top-[50%] overflow-hidden w-[70%]">
          <h1 className="text-black">I am vengeance.</h1>
        </div>
      </div>

      <div className="quote-container w-screen h-screen bg-black flex items-center justify-center absolute top-[100vh] z-[2] overflow-hidden">
        <div className="fixed z-[2] top-[50%] overflow-hidden w-[70%]">
          <h1 className="text-[#e7b200]">I am the night.</h1>
        </div>
      </div>

      <div className="quote-container w-screen h-screen bg-[#e7b200] flex items-center justify-center absolute top-[200vh] z-[3] overflow-hidden">
        <div className="fixed z-[3] top-[50%] overflow-hidden text-center w-[70%]">
          <h1 className="text-black">I am</h1>
        </div>
      </div>

      <div className="quote-container w-screen h-screen bg-black flex items-center justify-center absolute top-[300vh] z-[3] overflow-hidden">
        <div className="fixed z-[3] top-[50%] overflow-hidden text-center w-[70%]">
          <h1 className="text-[#e7b200]">BATMAN</h1>
        </div>
      </div>
    </div>
  );
};

{
  /* He's the hero Gotham deserves, but not the one it needs right now. 
  We all wear masks. */
}

export default Catch;
