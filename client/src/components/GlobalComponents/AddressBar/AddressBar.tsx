import React from "react";
import { IoHomeOutline } from "react-icons/io5";

function AddressBar() {
    
  return (
    <div className={`w-100 h-[55px] border-t-2 border-b-2 border-[#cecece] border-indigo-500 flex items-center justify-center`}>
  <ul className={`w-94 h-full flex items-center justify-start bg-rmv`}>
        <IoHomeOutline />
        
    <li className={`ml-2 md:ml-4 lg:ml-4 font-["yekanBakht"]`}>خانه</li>
    <li className={`ml-2 md:ml-4 lg:ml-4 font-["yekanBakht"]`}>ورود</li>
    <li className={`ml-2 md:ml-4 lg:ml-4 font-["yekanBakht"]`}>دشبورد</li>
  </ul>
</div>

  );
}

export default AddressBar;
