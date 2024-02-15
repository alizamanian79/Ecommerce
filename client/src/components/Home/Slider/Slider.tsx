import React, { useState , useRef , useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import Buttons from "./Buttons";

import first from "../../../../public/Sliders/1.png";
import seccond from "../../../../public/Sliders/2.jpg";
import third from "../../../../public/Sliders/1.png";

interface SliderIF {
  title: string;
  src: StaticImageData;
}




const Slider = () => {
  const [data, setData] = useState<SliderIF[]>([
    { title: "salam", src: first },
    { title: "salam", src: seccond },
    { title: "salam", src: third },
  ]);



  const [scrollX, setScrollX] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);


const [screenSize, setScreenSize] = useState<number>(0)




  const handleBTN = (value: string) => {
    switch (value) {
      case "prev":
        if (scrollX >= 0) {
          setScrollX(data.length * - screenSize +screenSize);
          return;
        }
        const plus = scrollX + screenSize;
        setScrollX(plus);
        break;

      case "after":
        if (scrollX <= data.length *-screenSize +screenSize ) {
          setScrollX(0);
          return;
        }
        const num = scrollX - screenSize;
        setScrollX(num);
        break;

      default:
        break;
    }
  };
  useEffect(() => {
    if (scrollX !== null && containerRef.current) {
      containerRef.current.scrollTo({
        left: scrollX,
        behavior: "smooth",
      });
   
      setScreenSize(window.innerWidth)
    }
  }, [scrollX]);

  return (
    <>
      <div
        className={"relative w-100 mt-[0rem]"}
      >
        <Buttons cb ={handleBTN}/>
        <div>
          <div
            ref={containerRef}
            className={
              "flex overflow-hidden justify-start items-center"
            }
          >
            {data.map((item, index) => (
              <Image
                src={item.src}
                height={0}
                width={0}
                alt={""}
                className={"w-100 h-[50%] "}
              />
            ))}
          </div>
        </div>
      </div>

     </>
  );
};

export default Slider;