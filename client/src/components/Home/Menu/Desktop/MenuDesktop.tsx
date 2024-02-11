import React,{ReactEventHandler, useState} from 'react'

import Nav from './Nav'
import Logo from './Logo'
import Icons from './Icons'


function MenuDesktop() {

   

  return (
    <div
      className={`w-100 h-62 bg-[red] absolute z-10 top-0 md:flex max-sm:hidden flex justify-center items-center`}
      style={{direction:'rtl'}}
    >
      <div
        className={`w-94 h-[100%] bg-[white] absolute top-0 flex flex-wrap items-center`}
      >
        
        <Logo />
        <Nav />
        <Icons />
       



      </div>
    </div>
  )
}

export default MenuDesktop