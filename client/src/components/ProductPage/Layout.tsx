import React from "react";

interface LAYOUTIF {
  param: any;
}

const Layout: React.FC<LAYOUTIF> = ({ param }) => {
  console.log(param)
  return (
    <>
    <p>
   xs   {param}
    </p>
    </>
  );
  
};


  

export default Layout;
