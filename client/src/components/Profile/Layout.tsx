import React, { useState, useEffect } from "react";
import Menu from "../GlobalComponents/Menu/Menu";
import SendEmail from "../GlobalComponents/SendEmail/SendEmail";
import AddressBar from "../GlobalComponents/AddressBar/AddressBar";
import { getCookie, removeCookie } from '../../../utils/cookie/cookieUtils';
import { decodeJwt } from "../../../utils/jwt/decodeJwt";
import { useRouter } from "next/router";

const ProfileComponent: React.FC = () => {
  const [data, setData] = useState<any>(undefined);
  const router = useRouter();

  useEffect(() => {
    const checkCookie = async () => {
      const token = getCookie('Token');
      if (token) {
        try {
          const decodedData = decodeJwt(token);
          console.log(decodedData)
          setData(decodedData)
        } catch (error) {
          console.error("Failed to decode JWT", error);
          removeCookie('Token'); // Remove invalid or expired token
          router.push("/login");
        }
      } else {
        console.log("Access Denied: No Token Found");
        router.push("/login");
        setData(undefined);
      }
    };

    // Initial check
    checkCookie();

    const interval = setInterval(checkCookie, 3600);

    return () => clearInterval(interval); // Clear the interval on unmount
  }, [router]);

  return (
    <>
      {data && (
        <div
          className="relative w-100 min-h-screen flex bg-hBack flex-col blur-[0] items-center"
          style={{ direction: "rtl" }}
        >
          <div className="w-100 bg-[white] h-auto flex items-center flex-col">
            salam {data.uName}
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileComponent;
