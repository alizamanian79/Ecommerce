import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { increase,decrease } from '@/redux/actions/testRedux'
export default function Redux() {
 const dispatch=useDispatch();
  const numberSelector:any =useSelector((state:any)=>state.testRedux.number);
  
const increaseNumber = ()=>{
  dispatch(increase({}))
}
const decreaseNumber = ()=>{
  dispatch(decrease({}))
}

  return (
    <div className={`bg-red`}>
      {numberSelector}
      <button onClick={increaseNumber}>Increase</button>
      <button onClick={decreaseNumber}>Decrease</button>

    </div>
  )
}
