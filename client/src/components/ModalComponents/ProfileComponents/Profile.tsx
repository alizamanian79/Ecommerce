import React, { useState } from "react";
import ImageComponent from "./ImageComponent";
import Form from "./Form";
import { IoClose } from "react-icons/io5";
import Button from "@/components/GlobalComponents/Button/Button";

const ModalProfile: React.FC = () => {
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState<any>({
    name: "Ali",
    lastName: "Zamanian",
    phone: "066",
  });

  const handleCallBackImage = (data: any) => {
    setImage(data);
  };
  const handleCallBackFormData = (data: any) => {
    setFormData(data);
  };

  function handleSubmit() {
    let arr = {
      uImage:image,
      uName: formData.name.value,
      uLastName: formData.lastName.value,
      uPhone: formData.phone.value,
    };

    console.log(arr);
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

        <Form callBack={handleCallBackFormData} fillData={formData} />
      </div>

      <Button  />

    </div>
  );
};

export default ModalProfile;
