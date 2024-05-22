import React, { useState } from "react";
import { CiSaveDown2 } from "react-icons/ci";
import { FaCheck } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { IoMdDownload } from "react-icons/io";

function Button() {
  const [text, setText] = useState("سلام");
  const [iconSelected, setIconSelected] = useState("download");

  const icons = [
    { name: "save", value: CiSaveDown2 },
    { name: "download", value: IoMdDownload },
    { name: "cancel", value: IoClose },
    { name: "check", value: FaCheck },
  ];

  const handleIcon = () => {
    const selectedIcon = icons.find((icon) => icon.name === iconSelected);
    return selectedIcon ? selectedIcon.value : null;
  };

  const IconComponent = handleIcon();

  return (
    <button
      className={`
        w-14 h-[auto]

        px-2 py-2
        font-[yekanBakht]
        rounded-sm
        bg-red flex justify-evenly items-center`}
      style={{ direction: `ltr` }}
    >
      <p>{text}</p>
      <span>{IconComponent && <IconComponent />}</span>
    </button>
  );
}

export default Button;
