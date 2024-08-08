import React, { useState } from "react";
import { setCookie, getCookie } from '../../../utils/cookie/cookieUtils';
import { useRouter } from "next/router";

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
    if (isSignUp) {
      await handleSignUp();
    } else {
      await handleSignIn();
    }
  };

  const handleSignUp = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/user/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "headerLock": `${process.env.NEXT_PUBLIC_VALID_API_KEY_USER}`,
        },
        body: JSON.stringify({
          uName: formData.uName,
          uLastName: formData.uLastName,
          uPhone: formData.uPhone,
          uPassword: formData.uPassword,
        }),
      });

      if (res.ok) {
        setIsSignUp(false);
        alert("Your account was created successfully.");
        setIsWrong(false);
      } else {
        setIsWrong(true);
        console.error("Error creating account:", res.statusText, "Status Code:", res.status);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      setIsWrong(true);
    }
  };

  const handleSignIn = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/user/authorization`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uPhone: formData.uPhone,
          uPassword: formData.uPassword,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setCookie('Token', data.Token, { maxAge: 86400 });
        router.push(`/login/admin-pannel`);
      } else {
        setIsWrong(true);
        console.error("Error signing in:", res.statusText, "Status Code:", res.status);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      setIsWrong(true);
    }
  };

  return (
    <div className="w-full h-screen bg-[#efefef] flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-[90%] md:w-[30%] border-[#484848] border-[2px] rounded-md px-[10px] py-[10px] flex flex-col"
      >
        <h1 className="text-black font-bold text-[31px]">
          {isSignUp ? "SignUp" : "Login"}
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
          />
        </label>

        {isWrong && (
          <h4 className="mt-3 text-red-500">Wrong Phone number or Password</h4>
        )}

        {!isSignUp && <h4 className="mt-3 cursor-pointer text-blue-500">Forgot password?</h4>}

        <h4
          className="mt-3 cursor-pointer text-blue-500"
          onClick={() => {
            setIsSignUp(!isSignUp);
            setIsWrong(false);
          }}
        >
          {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
        </h4>

        <input
          className="h-[44px] rounded-md bg-black text-white mt-4 cursor-pointer"
          type="submit"
          value={isSignUp ? "SignUp" : "SignIn"}
        />
      </form>
    </div>
  );
};

export default MyForm;
