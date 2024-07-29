import React, { useState, useEffect } from "react";
import axios from "axios";
import Menu from "../GlobalComponents/Menu/Menu";
import SendEmail from "../GlobalComponents/SendEmail/SendEmail";
import AddressBar from "../GlobalComponents/AddressBar/AddressBar";
import { useRouter } from "next/router";

interface ProfileComponentIF {
  data: any;
}

const ProfileComponent: React.FC<ProfileComponentIF> = ({ data }) => {
  

  return (
    <>
      <div
        className={`relative w-100 min-h-screen flex bg-hBack flex-col blur-[0] items-center`}
        style={{ direction: "rtl" }}
      >
        <Menu />
        <AddressBar dataAddress={[{ title: "پروفایل", router: "/" }]} />

        <div className={"w-100 bg-[white] h-auto flex items-center flex-col"}>salam {data.uName}- {data.uLastName}</div>

        <SendEmail />
      </div>
    </>
  );
};

export default ProfileComponent;
