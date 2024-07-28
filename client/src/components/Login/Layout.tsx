import React, { useState } from "react";
import { useRouter } from "next/router";
const initFormData = {
  uName: "",
  uLastName: "",
  uPhone: "",
  uPassword: "",
  uGmail: "",
};

const MyForm: React.FC = () => {
  const [formData, setFormData] = useState(initFormData);
  const [isWrong, setIsWrong] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch(
      `${
        process.env.DOMAIN == undefined
          ? "http://localhost:3000"
          : process.env.DOMAIN
      }/api/user/authorization`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uPhone: formData.uPhone,
          uPassword: formData.uPassword,
        }),
      }
    );

    if (res.ok) {
      const data = await res.json();
      console.log(data.uID);
      router.push(`/login/${data.uID}`);
    } else {
      setIsWrong(!isWrong)
      console.error("Error:", res.statusText);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="w-100 h-screen bg-[#efefef] flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-[30%] border-[#484848] border-[2px] rounded-md px-[10px] py-[10px] flex flex-col"
      >
        <h1 className="text-[black] font-bold text-[31px]">Login</h1>
        <h2 className="mb-5">
          Enter your Phone and Password to access your account.
        </h2>

        <label className="flex flex-col">
          Phone:
          <input
            type="text"
            name="uPhone"
            value={formData.uPhone || ""}
            className="outline-none h-[34px] px-2 rounded-md"
            onChange={handleChange}
          />
        </label>

        <label className="flex flex-col">
          Password:
          <input
            type="text"
            name="uPassword"
            value={formData.uPassword || ""}
            className="outline-none h-[34px] px-2 rounded-md"
            onChange={handleChange}
          />
        </label>

        {isWrong && (
          <h4 className="mt-3 text-red">Wrong Phone number or Password</h4>
        )}

        <h4 className="mt-3">Forgot password?</h4>

        <button
          className="h-[44px] rounded-md bg-[black] text-[white] mt-4"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default MyForm;
