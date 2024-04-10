import React, { useState, useEffect } from "react";
import axios from "axios";
import Menu from "../GlobalComponents/Menu/Menu";
import SendEmail from "../GlobalComponents/SendEmail/SendEmail";
import AddressBar from "../GlobalComponents/AddressBar/AddressBar";
interface ProfileComponentIF {
  param: any;
}

const ProfileComponent: React.FC<ProfileComponentIF> = ({ param }) => {
  
  return <>
      <div
        className={`relative w-100 min-h-screen flex bg-hBack flex-col blur-[0] items-center`}
        style={{ direction: "rtl" }}
      >
       
        <Menu />
        <AddressBar />
        
        <div className={"w-94 h-auto flex items-center flex-col"}>
     
        </div>
        <SendEmail />

      </div>
  {param}
  </>;
};

export default ProfileComponent;
