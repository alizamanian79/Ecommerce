import React, { useState } from "react";
import { CiSaveDown2 } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IoMdDownload } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";

interface BTNIFY {
  btnData:any
}


const Button:React.FC<BTNIFY> =({btnData})=> {
  const icons = [
    { name: "save", value: CiSaveDown2 },
    { name: "download", value: IoMdDownload },
    { name: "cancel", value: IoClose },
    { name: "check", value: FaCheck },
    {name: "edit", value:MdModeEdit}
  ];

  const [data, setData] = useState(btnData);

  const handleIcon = () => {
    const selectedIcon = icons.find((icon) => icon.name === data.icon);
    return selectedIcon ? selectedIcon.value : null;
  };

  const IconComponent = handleIcon();




  const handleClick=async()=>{
    console.log(`your api is ${data.api} , and method is ${data.apiMethod}, and data sender is ${data.apiData}`);
    
    try {
      
      const response = await fetch(data.api, {
        method: data.apiMethod || `POST`,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data.apiData)
      });
  
      if (!response.ok) {
        throw new Error('Failed to post data');
      }
      
      const responseData = await response.json();
      // console.log(`your api is ${data.api} , and method is ${data.apiMethod}, and data sender is ${data.apiData}`);
    
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <button
    onClick={handleClick}
      className={`
        w-10 h-[auto]

        text-[white]
        px-2 py-2
        font-[yekanBakht]
        rounded-sm
         flex justify-evenly items-center`}
      style={{ direction: `ltr`, backgroundColor: `${data.bgColor}` }}
    >
      <p>{data.title}</p>
      <span>{IconComponent && <IconComponent />}</span>
    </button>
  );
}

export default Button;
