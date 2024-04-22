import React, { useState } from "react";
import ColorComponent from "./ColorComponent/Color";
import SizeComponent from "./SizeComponent/Size";

interface INFORMATIONPROPSIF {
  id?:string;
  title?: string;
  description?: string;
  color?: string;
  introduce?: string;
  size?: any;
}

const InformationComponent: React.FC<INFORMATIONPROPSIF> = ({
  id,
  description,
  color,
  introduce,
  size,
  title,
}) => {


  const [counter, setCounter] = useState(1)

  const handleAddToBasket = ()=>{
    const item = []
    const object ={
     pID:id,
     value:counter
    }
    alert(`کالا ${title} با رنگ ${color} تعداد ${counter} به سبد خرید شما افزوده شد`)
  }


  return (
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
        <div onClick={handleAddToBasket}
          className="w-60 md:w-70 h-auto bg-rmv hover:bg-[#ef491b] border-[0.5px] border-[#ef491b]
         rounded-md flex justify-center items-center font-[yekanBakhtBold] text-[#ef491b]
          hover:text-[white]
          hover:cursor-pointer
          "
        >
          افزودن
        </div>

        <div
          className="w-35 md:w-25 h-auto bg-rmv border-[0.5px] border-[#ef491b]
         rounded-md flex justify-center items-center font-[yekanBakhtBold] text-[#ef491b]
         
          hover:cursor-pointer"
        >
          <button onClick={() => setCounter(counter+1)}
            className={`w-2/6 h-[100%] bg-rmv text-[#ef491b] hover:bg-[#ef491b]
         text-[20px] rounded-md  hover:text-[white]`}
          >
            +
          </button>
          <input
  className={`w-2/6 h-[40%] bg-rmv text-center text-[20px] outline-none`}
  type="number"
  value={counter}
  min={1}
  max={10}
  onChange={(e) => {
    e.preventDefault();
    setCounter(parseInt(e.target.value, 10));
  }}
/>
          <button onClick={() => setCounter(counter-1)}
            className={`w-2/6 h-[100%] bg-rmv hover:bg-[#ef491b]
         text-[20px] text-[#ef491b] rounded-md  hover:text-[white]`}
          >
            -
          </button>
        </div>
      </div>




    </div>
  );
};

export default InformationComponent;
