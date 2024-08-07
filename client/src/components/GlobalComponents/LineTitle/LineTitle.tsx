import React,{useState} from 'react'

interface LineTitle {
    tprops:string | undefined | null
    ,
    sprops:string | undefined | null
    ,
    dprops:string | undefined | null

}


const LineTitle:React.FC<LineTitle> = ({tprops,sprops,dprops}) => {

    const [title, setTitle] = useState<string>(tprops==null || undefined ? "دسته بندی" : tprops);
    const [spTitle, setSpTitle] = useState<string>(sprops==null || undefined ? "" : sprops);
    const [description, setDescription] = useState<string>(dprops== null || undefined ?"محصولات خود را به راحتی بیابید": dprops);
    
  return (
    <div className={`w-100 h-[6em] md:h-[9em] flex justify-center items-center relative`}>

   <div className='md:w-75 lg:w-44 md:flex sm:hidden h-[0.75px] bg-rmv'>
   </div>

    <div className={`absolute top-[50%] w-auto
     h-auto flex flex-col justify-center items-center translate-y-[-50%] bg-rmv px-10 py-3`}>
    <h3 className='font-[yekanBakhtBold] text-ctDesColor text-[37px] max-sm:text-[21px]'>{title} <span className={'text-[37px] text-ctDesColor max-sm:text-[21px] font-[yekanBakht]'}>{spTitle}</span></h3>
    <h5 className='font-[yekanBakht] text-ctDesColor text-[15px]  max-sm:text-[13px]'>{description}</h5>
    </div>
    


    </div>
  )
}

export default LineTitle