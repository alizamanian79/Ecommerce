

import React from 'react'

export default function ProductCard() {
  return (
    <div className={`w-100 h-[500px] bg-[red] flex flex-wrap`}>
        
        <div className={'w-2/4 h-[1/2] max-sm:w-[50%] bg-[black]'}>
de
        </div>

        <div className={'w-1/4 h-[1/2] max-sm:w-[50%] bg-[#2e62a5]'}>
           de 
        </div>

        <div className={'w-1/4 h-[1/2] max-sm:w-[50%] bg-[#7937bb]'}>
        de    
        </div>

        <div className={'w-2/4 h-[1/2] max-sm:w-[50%] bg-mainColor'}>
     ded       
        </div>

        <div className={'w-2/4 h-[1/2] max-sm:w-full bg-mainColor'}>
            de
        </div>
        
    </div>
  )
}
