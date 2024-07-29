import React, { useState, useEffect } from "react";  
import Menu from "../GlobalComponents/Menu/Menu";  
import SendEmail from "../GlobalComponents/SendEmail/SendEmail";  
import AddressBar from "../GlobalComponents/AddressBar/AddressBar";  
import { setCookie, getCookie, removeCookie } from '../../../utils/cookie/cookieUtils';  
import { decodeJwt } from "../../../utils/jwt/decodeJwt";  
import { useRouter } from "next/router";  

const ProfileComponent: React.FC = () => {  
  const [data, setData] = useState<any>(undefined);  
  const router = useRouter();  

  useEffect(() => {  
    const checkCookie = async () => {  
      const token = getCookie('Token');  
      if (token) {  
        const dt = decodeJwt(token);  
        setData(dt);  
      } else {  
        alert("Access Denied");  
        router.push("/login");  
        setData(undefined);  
      }  
    };  

    // Initial check  
    checkCookie();  

    const interval = setInterval(checkCookie, 10000);  

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