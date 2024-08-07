import React from "react";
import Menu from "../Menu/Menu";
import AddressBar from "../../GlobalComponents/AddressBar/AddressBar";
interface SpacingProps {
  children: React.ReactNode;
}

const Spacing: React.FC<SpacingProps> = ({ children }) => {
  return (
    <>
   
    <div
      className={
        "w-98 h-auto flex items-center justify-center bg-rmv flex-col"
      }
    >
      <div className="w-94 md:w-[100%] flex justify-center items-end flex-col">
        {children}
      </div>
    </div>
    </>

  );
};

export default Spacing;
