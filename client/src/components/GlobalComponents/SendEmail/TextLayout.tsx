import React from 'react'

export default function TextLayout() {

const handleSubmit = (e:any) =>{
    e.preventDefault();
    alert(1)
}

  return (
    <div
    className={`absolute top-[0%] z-[0]  w-100 h-[100%] bg-[#1a1a1abd] rounded-lg`}
  >

<h4 className={`w-56 h-auto font-[yekanBakhtBold] text-[50px]
absolute top-[5rem] right-[5rem]
z-[2] text-[#ffffff]
translate-x-[0]


lg:w-56
lg:text-[50px]
lg:top-[5rem]
lg:right-[5rem]


md:w-60
md:text-[26px]
md:top-[3.5rem]
md:right-[2rem]


max-sm:w-95
max-sm:text-[20px]
max-sm:top-[3.5rem]
max-sm:right-[2.5%]
max-sm:translate-x-[-2.5%]
`}>در خانه بمانید و نیازهای خود را از فروشگاه ما دریافت کنید</h4>


<h5 className={`w-100 h-auto font-[yekanBakht] text-[17px]
absolute top-[15rem] right-[5rem] z-[2] text-[#ffffff]


lg:w-100
lg:text-[17px]
lg:top-[15rem]
lg:right-[5rem]


md:w-60
md:text-[17px]
md:top-[9rem]
md:right-[2rem]


max-sm:w-50
max-sm:text-[13px]
max-sm:top-[6rem]
max-sm:right-[25%]


`}>در اولین سفارش خود تا 50% تخفیف بگیرید</h5>



<div className='w-44 h-[50px] bg-rmv top-[21rem] absolute right-[5rem] rounded-md flex justify-center items-center


lg:w-44
lg:text-[50px]
lg:top-[19rem]
lg:right-[5rem]


md:w-50
md:text-[17px]
md:top-[12rem]
md:right-[2rem]


max-sm:w-80
max-sm:text-[13px]
max-sm:top-[10rem]
max-sm:right-[10%]


'>


<form action="" onSubmit={(e)=>handleSubmit(e)} className='w-100 h-full flex flex-wrap justify-between'>
    <input className='w-74 h-full outline-none lg:text-[20px] font-[yekanBakht] rounded-md px-2' type="text" placeholder='برای ما ایمیل بفرستید' />
    <input className='w-24 h-full outline-none lg:text-[20px] text-[white] bg-mainColor
    font-[yekanBakhtBold] text-center rounded-md' value={'ارسال'} type="submit" placeholder='ارسال' />
</form>


</div>


  </div>
  )
}
