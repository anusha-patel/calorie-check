import React, { useState } from 'react';
import logo from '../images/logo.avif';
import {HiMenuAlt3} from 'react-icons/hi';
import { AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [open, setOpen] = useState(false);
  return (
    <header className='w-full fixed z-20 bg-black opacity-90 text-lg p-3 '>
        <nav className='flex justify-around items-center'>
            <a href="" className='text-lg text-white flex ml-4 items-center cursor-pointer'>
                <img src={logo} width={60} height={60} className='p-2  rounded-xl ' alt="" srcset="" /> food
            </a>
            <ul className='hidden  md:flex text-white gap-9 '>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">Explore</a>
                </li>
                <li>
                    <a href="/">Favourite</a>
                </li>
            </ul>

            <button className='text-white hidden md:flex border-white border rounded-lg px-3 py-1 hover:text-black hover:bg-white hover:border-black' >sing in</button>
            <button className='block md:hidden text-white '
              onClick={()=> setOpen(prev => !prev)}>
                {open? <AiOutlineClose/> : <HiMenuAlt3/>}
             </button>
        </nav>
        <div className={` ${open ? 'flex' : "hidden"}`} >
            <ul className='flex flex-col gap-6 text-white items-center justify-center mx-auto mt-10' >
                <li className='text-lg'>
                    <a href="">Home</a>
                </li>
                <li className='text-lg'>
                    <a href="">Explore</a>
                </li>
                <li className='text-lg'>
                    <a href="">Favourite</a>
                </li>
            </ul>


        </div>


    </header>
    
  

  )
}

export default Navbar