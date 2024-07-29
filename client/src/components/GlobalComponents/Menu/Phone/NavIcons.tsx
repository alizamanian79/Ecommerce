import React, { useState } from "react";  
import { useRouter } from "next/router";
const iconWidth = "20px";  
const iconHeight = "20px";  

interface IconProps extends React.SVGProps<SVGSVGElement> {  
  colorChange?: string;  
}  

const HeartIcon: React.FC<IconProps> = ({ colorChange, ...props }) => {  
  const fill = colorChange ? colorChange : 'none';  
  const stroke = colorChange ? colorChange : 'currentColor';  

  return (  
    <svg  
      {...props}  
      xmlns="http://www.w3.org/2000/svg"  
      width={iconWidth}  
      height={iconHeight}  
      viewBox="0 0 24 24"  
      fill={fill}  
      stroke={stroke}  
      strokeWidth="2"  
      strokeLinecap="round"  
      strokeLinejoin="round"  
    >  
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />  
    </svg>  
  );  
};  

const SearchIcon: React.FC<IconProps> = ({ colorChange, ...props }) => {  
  const fill = colorChange ? colorChange : 'none';  
  const stroke = colorChange ? colorChange : 'currentColor';  

  return (  
    <svg  
      {...props}  
      xmlns="http://www.w3.org/2000/svg"  
      width={iconWidth}  
      height={iconHeight}  
      viewBox="0 0 24 24"  
      fill={fill}  
      stroke={stroke}  
      strokeWidth="2"  
      strokeLinecap="round"  
      strokeLinejoin="round"  
    >  
      <circle cx="11" cy="11" r="8" />  
      <path d="m21 21-4.3-4.3" />  
    </svg>  
  );  
};  

const ShoppingCartIcon: React.FC<IconProps> = ({ colorChange, ...props }) => {  
  const fill = colorChange ? colorChange : 'none';  
  const stroke = colorChange ? colorChange : 'currentColor';  

  return (  
    <svg  
      {...props}  
      xmlns="http://www.w3.org/2000/svg"  
      width={iconWidth}  
      height={iconHeight}  
      viewBox="0 0 24 24"  
      fill={fill}  
      stroke={stroke}  
      strokeWidth="2"  
      strokeLinecap="round"  
      strokeLinejoin="round"  
    >  
      <circle cx="8" cy="21" r="1" />  
      <circle cx="19" cy="21" r="1" />  
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />  
    </svg>  
  );  
};  

const UserIcon: React.FC<IconProps> = ({ colorChange, ...props }) => {  
  const fill = colorChange ? colorChange : 'none';  
  const stroke = colorChange ? colorChange : 'currentColor';  

  return (  
    <svg  
      {...props}  
      xmlns="http://www.w3.org/2000/svg"  
      width={iconWidth}  
      height={iconHeight}  
      viewBox="0 0 24 24"  
      fill={fill}  
      stroke={stroke}  
      strokeWidth="2"  
      strokeLinecap="round"  
      strokeLinejoin="round"  
    >  
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />  
      <circle cx="12" cy="7" r="4" />  
    </svg>  
  );  
};  

const NavIcons: React.FC = () => {  
  const [data] = useState([  
    { title: UserIcon, url: "/admin-pannel" },  
    { title: ShoppingCartIcon, url: "/" },  
    { title: SearchIcon, url: "/" },  
    { title: HeartIcon, url: "/" },  
  ]);  

  const router=useRouter();
  const [selected, setSelected] = useState<number | undefined>(undefined);  

  const handleClick = (index:any) => {  
    setSelected(selected === index ? undefined : index);  

    let mode = index.url

    switch (mode) {
      case "/admin-pannel":
        router.push("/login/admin-pannel")
        break;
    
      default:
        break;
    }

    
  };  

  return (  
    <div  
      style={{ direction: "ltr", boxShadow: "0px -2px 9px #e1e1e1" }}  
      className="
      h-[60px] 
      w-[100%]
      flex
      md:hidden
      lg:hidden
      sticky 
      bottom-[0%]
      bg-[#ffffff] 
       justify-center items-center border-none bg-white"  
    >  
      <ul className="flex justify-center items-center h-full w-full ">  
        {data.map((item, index) => (  
          <li  
            onClick={() => handleClick(index)}  
            key={index}  
            className={`flex justify-center items-center h-full w-1/4 cursor-pointer ${selected === index ? 'bg-gray-800' : ''}`}  
          >  
            <item.title onClick={()=>handleClick(item)} colorChange={selected === index ? 'black' : undefined} />  
          </li>  
        ))}  
      </ul>  
    </div>  
  );  
};  

export default NavIcons;