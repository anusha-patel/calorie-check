import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className='text-white py-20 bg_gradient'>
      <div className=' container mx-auto px-20 lg:px-10 py-20 flex flex-col gap-10 md:flex-row justify-between border-t border-slate-800'>
        <div className='flex '>
          <p className='font-blod text-center'>
            Delicious<span className='text-green-500 text-xl'>
              Food
            </span>
          </p>
        </div>
        <div className=''>
          <p>QUICK LINKS</p>
         <div className='flex flex-col text-start mb-4 md:mb-0'>
          <a href="#" className='block md:inline-block py-2 hover:text-gray-500'>HOME</a>
          <a href="#" className='block md:inline-block py-2 hover:text-gray-500'>ABOUT</a>
          <a href="#" className='block md:inline-block py-2 hover:text-gray-500'>RECIPES</a>
          <a href="#" className='block md:inline-block py-2 hover:text-gray-500'>CONTACT</a>

         </div>


        </div>
        <div className=''>
          <p>LEGAL</p>
         <div className='flex flex-col text-start mb-4 md:mb-0'>
          <a href="#" className='block md:inline-block py-2 hover:text-gray-500'>Terms and conditions</a>
          <a href="#" className='block md:inline-block py-2 hover:text-gray-500'>licence agreement</a>
          <a href="#" className='block md:inline-block py-2 hover:text-gray-500'>Privacy Police</a>
          <a href="#" className='block md:inline-block py-2 hover:text-gray-500'>Cookie Police</a>

         </div>


        </div>
        <div className='flex flex-col'>
          <p>SOCIAL MEDIA</p>
          <div className='flex mt-4 gap-3'>
            <a href="#" className='bg-blue-600 p-1 rounded-sm text-white hover:text-gray-500 hover:scale-110'>
              <FaFacebook size={18}/>
            </a>
            <a href="#" className='bg-green-600 p-1 rounded-sm text-white hover:text-gray-500 hover:scale-110'>
              <FaTwitter size={18}/>
            </a>
            <a href="#" className=' bg-purple-600 p-1 rounded-sm text-white hover:text-gray-500 hover:scale-110'>
              <FaInstagram size={18}/>
            </a>
            <a href="#" className='bg-red-600 p-1 rounded-sm text-white hover:text-gray-500 hover:scale-110'>
              <FaYoutube size={18}/>
            </a>

          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer