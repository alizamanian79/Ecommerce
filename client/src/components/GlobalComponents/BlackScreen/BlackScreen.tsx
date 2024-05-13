import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { blackScreenChanger } from "@/redux/actions/blackScreen";


//Modal Components
import Profile from "@/components/ModalComponents/Profile";
import Heart from "@/components/ModalComponents/Heart";
import Search from "@/components/ModalComponents/Search";
import Basket from "@/components/ModalComponents/Basket";


function BlackScreen() {
  const modalShow = useSelector<any>((state) => state.blackScreen.modalShow);


  const dispatch = useDispatch();
  const statusBlackScreen = useSelector<any>((state) => state.blackScreen.stScreen);

  const handleClick = () => {
    dispatch(blackScreenChanger({ modalShow:"Profile" }));
  };


const handleChangeModal =()=>{
switch (modalShow) {
  
  case "Profile":
   return  <Profile />
    break;

    case "Heart":
      return <Heart />
      break;

      case "Search":
      
       return  <Search />
        break;
    
        case "Basket":
          return <Basket />
          break;

  default:
    break;
}
}

  return (
    <>
      {statusBlackScreen ? (
        <div
          onClick={handleClick}
          className={`bg-[#000000b8] w-100 h-[100%] fixed z-[7] flex justify-center items-center`}
        >
          {handleChangeModal()}
        </div>
      ) : null}
    </>
  );
}

export default BlackScreen;