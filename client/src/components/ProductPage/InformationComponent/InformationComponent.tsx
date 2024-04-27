import React, { useState } from "react";
import ColorComponent from "./ColorComponent/Color";
import SizeComponent from "./SizeComponent/Size";

interface INFORMATIONPROPSIF {
  id?: string;
  title?: string;
  description?: string;
  color?: string;
  introduce?: string;
  size?: any;
  total?: number;
}

const InformationComponent: React.FC<INFORMATIONPROPSIF> = ({
  id,
  description,
  color,
  introduce,
  size,
  title,
  total,
}) => {
  const blackColor = `#1a1919`;
  const [counter, setCounter] = useState(1);

  const handleAddToBasket = () => {
    const item = [];
    const object = {
      pID: id,
      value: counter,
    };
    alert(
      `کالا ${title} با رنگ ${color} تعداد ${counter} به سبد خرید شما افزوده شد`
    );
  };

  const handleBtns = (mode: string) => {
    if (mode == "increase") {
      if (total) {
        if (counter + 1 <= total) {
          setCounter(counter + 1);
        }
        return;
      }
    } else {
      if (counter - 1 >= 1) {
        setCounter(counter - 1);
      }
      return;
    }
  };

  return (
    <>
      <div
        className={`w-100 lg:w-60 md:w-50
     md:h-[500px] flex justify-start flex-col
     px-[1rem]
     py-[1rem]
      min-h-[300px]
      max-h-[auto]
     `}
        style={{ direction: "rtl" }}
      >
        <h3 className={`font-["yekanBakhtBold"] text-[30px]`}>{title}</h3>
        <h4
          className={`font-["yekanBakht"] text-[15px] md:text-[19px] h-[150px]`}
        >
          {description}
        </h4>

        <div className="w-100 h-[80px]  justify-center items-center flex flex-wrap mt-[1.5rem] bg-rmv">
          <ColorComponent dataColor={color} />
          <SizeComponent dataSize={size} />
        </div>

        <div
          className={`w-100 h-[60px] mt-[2rem] flex justify-between flex-wrap`}
        >
          <div
            onClick={handleAddToBasket}
            className={`w-60 md:w-70 h-auto bg-rmv hover:bg-[#1a1919] border-[0.5px] border-[${blackColor}]
         rounded-md flex justify-center items-center font-[yekanBakhtBold] text-[${blackColor}]
          hover:text-[white]
          hover:cursor-pointer
          `}
          >
            افزودن
          </div>

          <div
            className={`w-35 md:w-25 h-auto bg-rmv border-[0.5px] border-[${blackColor}]
         rounded-md flex justify-center items-center font-[yekanBakhtBold] text-[${blackColor}]
         
          hover:cursor-pointer`}
          >
            <button
              onClick={() => handleBtns("increase")}
              className={`w-2/6 h-[100%] bg-rmv text-[${blackColor}] hover:bg-[${blackColor}]
         text-[20px] rounded-md  hover:text-[white]`}
            >
              +
            </button>
            <input
              className={`w-2/6 h-[40%] bg-rmv text-center text-[20px] outline-none`}
              type="number"
              value={counter}
              min={1}
              max={total}
              onChange={(e) => {
                e.preventDefault();
                setCounter(parseInt(e.target.value, 10));
              }}
            />
            <button
              onClick={() => handleBtns("decrease")}
              className={`w-2/6 h-[100%] bg-rmv hover:bg-[${blackColor}]
         text-[20px] text-[${blackColor}] rounded-md  hover:text-[white]`}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InformationComponent;
