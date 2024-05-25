import React, { useState } from "react";
import ImageComponent from "./ImageComponent";
import Form from "./Form";
import { IoClose } from "react-icons/io5";
import Button from "@/components/GlobalComponents/Button/Button";

import { useDispatch, useSelector } from "react-redux";
import { blackScreenChanger } from "@/redux/actions/blackScreen";

const ModalProfile: React.FC = () => {
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState<any>({
    name: "Ali",
    lastName: "Zamanian",
    phone: "066",
  });

  const dispatch = useDispatch();
  const statusBlackScreen = useSelector<any>(
    (state) => state.blackScreen.stScreen
  );
  const modalShow = useSelector<any>((state) => state.blackScreen.modalShow);

  const handleCallBackImage = (data: any) => {
    setImage(data);
  };
  const handleCallBackFormData = (data: any) => {
    setFormData(data);
  };

  function handleSubmit() {
    let arr = {
      uImage: image,
      uName: formData.name.value,
      uLastName: formData.lastName.value,
      uPhone: formData.phone.value,
    };

    console.log(arr);
  }

  const handleClose = () => {
    dispatch(blackScreenChanger({ modalShow: "Search" }));
  };

  return (
    <div
      className={`w-90 md:w-83 lg:w-50 rounded-md h-[auto] bg-[#ffffff] fixed z-[42] px-3 py-5`}
    >
      <div
        className={`w-100 h-[auto] bg-[#ffffff] flex justify-between items-center`}
      >
        <span className="hover:cursor-pointer" onClick={handleClose}>
          <IoClose className={`text-[20px]`} />
        </span>
        <p className={`font-[yekanBakhtBold] text-[21px]`}>پروفایل من</p>
      </div>

      <div className={`w-100 h-auto bg-[#ffffff] flex flex-wrap`}>
        <ImageComponent callBack={handleCallBackImage} />

        <Form callBack={handleCallBackFormData} fillData={formData} />
      </div>

      <div className="w-100 h-auto py-3 flex justify-end">
        <Button
          btnData={{
            title: "لغو",
            icon: "cancel",
            bgColor: "black",
            api: "api test",
            apiMethod: "POST",
            apiData: { name: "Hi" },
          }}
        />
        <Button
          btnData={{
            title: "ویرایش",
            icon: "edit",
            bgColor: "#8a57ea",
            mrg: "0 0 0 0.5rem",

            api: "apiCall",
            apiMethod: "POST",
            apiData: { name: "Hi" },
          }}
        />
      </div>
    </div>
  );
};

export default ModalProfile;
