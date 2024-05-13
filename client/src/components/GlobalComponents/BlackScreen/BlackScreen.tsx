import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { blackScreenChanger } from "@/redux/actions/blackScreen";
function BlackScreen() {
  const dispatch = useDispatch();
  const statusBlackScreen = useSelector<any>(
    (state) => state.blackScreen.stScreen
  );

  const handleClick = () => {
    dispatch(blackScreenChanger(statusBlackScreen));
  };

  return (
    <>
      {statusBlackScreen ? (
        <>
          <div
            onClick={handleClick}
            className={
              statusBlackScreen == true
                ? `bg-[#000000b8] w-100 h-[100%] fixed z-40`
                : `bg-[#000000b8] w-100 h-[100%] fixed z-[-3]`
            }
          ></div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}

export default BlackScreen;
