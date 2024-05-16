import React, { useState } from "react";

interface MyFormProps {
  labels?: string[] | string;
}

const MyForm: React.FC<MyFormProps> = ({ labels }) => {
  const [formData, setFormData] = useState({
    name: { label: "نام", value: "" },
    lastName: { label: "نام خانوادگی", value: "" },
    number: { label: "شماره", value: "" },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: { ...prevData[name], value: value },
    }));
  };

  return (
    <div
      className={`w-2/3 h-auto flex justify-end flex-col `}
      style={{ direction: `rtl` }}
    >
      {Object.keys(formData).map((key) => (
        <div key={key} className="w-100 h-[auto] flex flex-wrap mt-3">
          <label className="w-100 text-[17px] font-[yekanBakhtBold]">
            {formData[key as keyof typeof formData].label}
          </label>
          <input
            className={`w-100 h-[38px] bg-rmv px-2 py-2 border-[0.6px]
             border-[#9e9e9e] outline-none rounded-sm font-[yekanBakht]`}
            type="text"
            name={key}
            value={formData[key as keyof typeof formData].value}
            onChange={handleChange}
            placeholder={formData[key as keyof typeof formData].label}
          />
        </div>
      ))}
      {/* <button onClick={() => alert(formData.name.value)}>
        test
      </button> */}
    </div>
  );
};

export default MyForm;
