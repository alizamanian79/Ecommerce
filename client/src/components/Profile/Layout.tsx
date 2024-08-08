import React, { useState, useEffect } from "react";
import Menu from "../GlobalComponents/Menu/Menu";
import SendEmail from "../GlobalComponents/SendEmail/SendEmail";
import AddressBar from "../GlobalComponents/AddressBar/AddressBar";
import { getCookie, removeCookie } from "../../../utils/cookie/cookieUtils";
import { useRouter } from "next/router";

const ProfileComponent: React.FC = () => {
  const [data, setData] = useState<any>(undefined);
  const router = useRouter();

  useEffect(() => {
    const checkCookie = async () => {
      const token = getCookie("Token");

      if (token) {
        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_DOMAIN}/api/jwt/decode`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                headerLock: `${process.env.NEXT_PUBLIC_JWT_SECRET_KEY}`,
              },
              body: JSON.stringify({
                token,
              }),
            }
          );

          if (res.ok) {
            const decodedData = await res.json();
            setData(decodedData);
          } else {
            console.error("Failed to decode JWT: ", await res.text());
            router.push("/login");
          }
        } catch (error) {
          console.error("Error during fetch: ", error);
          router.push("/login");
        }
      } else {
        console.log("Token not found");
        router.push("/login");
      }
    };

    // Initial check
    checkCookie();

    // Set up interval to check cookie periodically
    const interval = setInterval(checkCookie, 3600);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, [router]);

  return (
    <>
      {data && (
        <div
          className="relative w-100 min-h-screen flex bg-hBack flex-col blur-[0] items-center"
          style={{ direction: "rtl" }}
        >
          <div className="w-100 bg-[white] h-auto flex items-center flex-col">
            Salam {data.uName}
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileComponent;
