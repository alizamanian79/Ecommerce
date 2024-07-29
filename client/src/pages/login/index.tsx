import React, { useEffect, useState } from "react";
import { setCookie, getCookie, removeCookie } from '../../../utils/cookie/cookieUtils';
import { useRouter } from "next/router";
const initFormData = {
  uName: "",
  uLastName: "",
  uPhone: "",
  uPassword: "",
  uGmail: "",
};


const MyForm: React.FC = () => {
  const [cookieValue, setCookieValue] = useState<any | undefined>(getCookie('Token'));
  const [formData, setFormData] = useState(initFormData);
  const [isWrong, setIsWrong] = useState<any>(undefined);
  const [isSignUp, setisSignUp] = useState(false);
  const router = useRouter();





  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(isSignUp===true){
       const resAdd = await fetch(
          `/api/user/add`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              uName: formData.uName,
              uLastName: formData.uLastName,
              uPhone: formData.uPhone,
              uPassword: formData.uPassword,
            }),
          }
        );
        if (resAdd.ok) {
          setisSignUp(false)
          alert("Your account created successfuly");
          setIsWrong(false)
          return
        } else {
          setIsWrong(true);
          console.error("Error:", resAdd.statusText);
          return null
        }
    }
    else{
      handleSignIn()
    }
  };


const handleSignIn=async()=>{


  const res = await fetch(
    `/api/user/authorization`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "headerLock":`${process.env.VALID_API_KEY}`
      },
      body: JSON.stringify({
        uPhone: formData.uPhone,
        uPassword: formData.uPassword,
      }),
    }
  );
  if (res.ok) {
    const data = await res.json();
    setCookie('Token', data.Token, { maxAge: 86400 });
    router.push(`/login/admin-pannel`);





  } else {
    setIsWrong(false);
    console.error("Error:", res.statusText);
  }
}



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


useEffect(() => {
  cookieValue!=undefined ?router.push("/login/admin-pannel"):undefined
}, [])


  return (
    <div className="w-100 h-screen bg-[#efefef] flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-[90%] md:w-[30%] border-[#484848] border-[2px] rounded-md px-[10px] py-[10px] flex flex-col"
      >
        <h1 className="text-[black] font-bold text-[31px]">
          {isSignUp === false ? "Login" : "SignUp"}
        </h1>
        <h2 className="mb-5">
          {isSignUp === false
            ? "Enter your Phone and Password to access your account."
            : "Lets create your account"}
        </h2>

        {isSignUp && (
          <>
            <label className="flex flex-col">
              Name:
              <input
                type="text"
                name="uName"
                value={formData.uName || ""}
                className="outline-none h-[34px] px-2 rounded-md"
                onChange={handleChange}
              />
            </label>

            <label className="flex flex-col">
              lastName:
              <input
                type="text"
                name="uLastName"
                value={formData.uLastName || ""}
                className="outline-none h-[34px] px-2 rounded-md"
                onChange={handleChange}
              />
            </label>
          </>
        )}

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

        {isSignUp === false && <h4 className="mt-3">Forgot password?</h4>}

        <h4
          className="mt-3 cursor-pointer text-[blue]"
          onClick={() => setisSignUp(!isSignUp)}
        >
          {isSignUp === false ? "Doesnt have an account ? signup" : "Signin"}
        </h4>

        <input
          className="h-[44px] rounded-md bg-[black] text-[white] mt-4 cursor-pointer"
          type="submit"
          value={isSignUp === false ? "SignIn" : "SignUp"}
        />
          
      
      </form>
    </div>
  );
};

export default MyForm;
