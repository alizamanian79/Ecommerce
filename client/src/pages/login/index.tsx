import React, { useState } from "react";  
import { setCookie, getCookie } from '../../../utils/cookie/cookieUtils';  
import { useRouter } from "next/router";  
import axios from "axios";
const initFormData = {  
  uName: "",  
  uLastName: "",  
  uPhone: "",  
  uPassword: "",  
  uGmail: "",  
};  

const MyForm: React.FC = () => {  
  const [cookieValue, setCookieValue] = useState<string | undefined>(getCookie('Token') || undefined);  
  const [formData, setFormData] = useState(initFormData);  
  const [isWrong, setIsWrong] = useState<boolean>(false);  
  const [isSignUp, setIsSignUp] = useState<boolean>(false);  
  const router = useRouter();  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {  
    const { name, value } = e.target;  
    setFormData(prev => ({  
      ...prev,  
      [name]: value,  
    }));  
  };  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {  
    e.preventDefault();  
    setIsWrong(false);  // Reset error state on new submission  
    if (isSignUp) {  
      await handleSignUp();  
    } else {  
      await handleSignIn();  
    }  
  };  

  const handleSignUp = async () => {  
    try {  
      const response = await axios.post(`/api/user/add`, {  
        uName: formData.uName,  
        uLastName: formData.uLastName,  
        uPhone: formData.uPhone,  
        uPassword: formData.uPassword,  
      }, {  
        headers: {  
          "Content-Type": "application/json",  
          "headerLock": process.env.NEXT_PUBLIC_VALID_API_KEY_USER,  
        },  
      });  
  
      // Check for success response  
      if (response.status === 200) {  
        setFormData(initFormData); // Reset form data  
        setIsSignUp(false);  
        alert("Your account was created successfully.");  
      } else {  
        setIsWrong(true);  
        console.error("Error creating account:", response.statusText);  
      }  
    } catch (error) {  
      if (axios.isAxiosError(error)) {  
        const errorMessage = error.response?.data?.message || error.message;  
        setIsWrong(true);  
        console.error("Error creating account:", errorMessage);  
      } else {  
        console.error("Unexpected error:", error);  
        setIsWrong(true);  
      }  
    }  
  };  
  
  const handleSignIn = async () => {  
    try {  
      const response = await axios.post(`/api/user/authorization`, {  
        uPhone: formData.uPhone,  
        uPassword: formData.uPassword,  
      }, {  
        headers: {  
          "Content-Type": "application/json",  
        },  
      });  
  
      // Check for success response  
      if (response.status === 200) {  
        const data = response.data;  
        console.log(data)
        setCookie('Token', data.Token, { maxAge: 86400 });  
        setFormData(initFormData); // Reset form data  
        router.push(`/login/admin-panel`);  
      } else {  
        setIsWrong(true);  
        console.error("Error signing in:", response.statusText);  
      }  
    } catch (error) {  
      if (axios.isAxiosError(error)) {  
        const errorMessage = error.response?.data?.message || error.message;  
        setIsWrong(true);  
        console.error("Error signing in:", errorMessage);  
      } else {  
        console.error("Unexpected error:", error);  
        setIsWrong(true);  
      }  
    }  
  };  

  return (  
    <div className="w-full h-screen bg-[#efefef] flex justify-center items-center">  
      <form  
        onSubmit={handleSubmit}  
        className="w-[90%] md:w-[30%] border-[#484848] border-[2px] rounded-md px-[10px] py-[10px] flex flex-col"  
      >  
        <h1 className="text-black font-bold text-[31px]">  
          {isSignUp ? "Sign Up" : "Login"}  
        </h1>  
        <h2 className="mb-5">  
          {isSignUp   
            ? "Let's create your account"   
            : "Enter your Phone and Password to access your account."}  
        </h2>  

        {isSignUp && (  
          <>  
            <label className="flex flex-col">  
              Name:  
              <input  
                type="text"  
                name="uName"  
                value={formData.uName}  
                className="outline-none h-[34px] px-2 rounded-md"  
                onChange={handleChange}  
                required  // Add required attribute  
              />  
            </label>  

            <label className="flex flex-col">  
              Last Name:  
              <input  
                type="text"  
                name="uLastName"  
                value={formData.uLastName}  
                className="outline-none h-[34px] px-2 rounded-md"  
                onChange={handleChange}  
                required  // Add required attribute  
              />  
            </label>  
          </>  
        )}  

        <label className="flex flex-col">  
          Phone:  
          <input  
            type="text"  
            name="uPhone"  
            value={formData.uPhone}  
            className="outline-none h-[34px] px-2 rounded-md"  
            onChange={handleChange}  
            required  // Add required attribute  
          />  
        </label>  

        <label className="flex flex-col">  
          Password:  
          <input  
            type="password"  
            name="uPassword"  
            value={formData.uPassword}  
            className="outline-none h-[34px] px-2 rounded-md"  
            onChange={handleChange}  
            required  // Add required attribute  
          />  
        </label>  

        {isWrong && (  
          <h4 className="mt-3 text-red-500">Incorrect Phone number or Password. Please try again.</h4>  
        )}  

        {!isSignUp && <h4 className="mt-3 cursor-pointer text-blue-500">Forgot password?</h4>}  

        <h4  
          className="mt-3 cursor-pointer text-blue-500"  
          onClick={() => {  
            setIsSignUp(!isSignUp);  
            setIsWrong(false); // Reset error state on switch  
          }}  
        >  
          {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}  
        </h4>  

        <input  
          className="h-[44px] rounded-md bg-black text-[white] mt-4 cursor-pointer"  
          type="submit"  
          value={isSignUp ? "Sign Up" : "Sign In"}  
        />  
      </form>  
    </div>  
  );  
};  

export default MyForm;