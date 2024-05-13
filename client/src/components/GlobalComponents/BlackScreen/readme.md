import

import { useDispatch,useSelector } from 'react-redux'
import blackScreen from '@/redux/actions/blackScreen'

functional

const dispatch = useDispatch();
const statusBlackScreen =useSelector<any>((state) => state.blackScreen.stScreen);
const modalShow =useSelector<any>((state) => state.blackScreen.modalShow);

const handleClick = ()=>{
  dispatch(blackScreenChanger({ modalShow:"Search" }));
}
