
import React from 'react';
import banner1 from '../images/banner1.avif'
import banner2 from '../images/banner2.avif'
import banner3 from '../images/banner3.avif'
import banner4 from '../images/banner4.avif'
import banner5 from '../images/banner5.avif'

const images = [banner1, banner2, banner3, banner4, banner5];

const Header = ({title, image, type}) => {
  return (
    <div className='w-full h-[100vh]'>
        <div className='relative w-full h-full'>
            <img src={image ?? images[Math.floor(Math.random()*images.length)]} alt="recipes" srcSet="" className='w-full h-full object-cover' />
        </div>
        <div className='absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0 z-10 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4'>
            <h1 className='text-white text-4xl md:text-5xl font-bold text-center'>{title}</h1>

            {type && (
                    <p className='text-sm mt-4 text-center text-green-500 bg-[#00000090] px-6 py-4 rounded-full'>welcome to world of fantasy with a most wonderful dishes around the world 
                        <br className='hidden md:block'/> discover your faviourte if you can,because its more difficult than you think. welcome to world food festival.

                    </p>
                )
            }

        </div>   
    </div>
  )
}

export default Header