import React, { useState } from "react";
import ImageComponent from "./ImageComponent";
import Form from "./Form";
import { IoClose } from "react-icons/io5";



const ModalProfile: React.FC = () => {
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState(null)

  const handleCallBackImage = (data: any) => {
    setImage(data);
  };
  const handleCallBackFormData = (data: any) => {
    setFormData(data);
  };

  function handleSubmit() {
    alert(formData);
  }

  return (
    <div
      className={`w-90 md:w-83 lg:w-50 rounded-md h-[auto] bg-[#ffffff] fixed z-[42] px-3 py-5`}
    >
      <div
        className={`w-100 h-[auto] bg-[#ffffff] flex justify-between items-center`}
      >
        <IoClose className={`text-[20px]`} />
        <p className={`font-[yekanBakhtBold] text-[21px]`}>پروفایل من</p>
      </div>

      <div className={`w-100 h-auto bg-[#ffffff] flex flex-wrap`}>
        <ImageComponent callBack={handleCallBackImage} />

        <Form callBack={handleCallBackFormData} />
       
      </div>

      <button onClick={handleSubmit}>sssss</button>

    </div>
  );
};

export default ModalProfile;
