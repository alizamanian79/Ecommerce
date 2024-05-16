import React, { useState } from "react";
import ImageComponent from "./ImageComponent";
import Form from "./Form";
import { IoClose } from "react-icons/io5";

function ModalProfile() {
  // Image

  return (
    <div
      className={`w-50 rounded-md h-[auto] bg-[#ffffff] fixed z-[42] px-3 py-5`}
    >
      <div
        className={`w-100 h-[auto] bg-[#ffffff] flex justify-between items-center`}
      >
        <IoClose className={`text-[20px]`} />
        <p className={`font-[yekanBakhtBold] text-[21px]`}>پروفایل من</p>
      </div>

      <div className={`w-100 h-auto bg-[#ffffff] flex flex-wrap`}>
        <ImageComponent />

        <Form />
      </div>
    </div>
  );
}

export default ModalProfile;
