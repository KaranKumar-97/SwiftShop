import React from 'react'
import { NavLink } from "react-router-dom";
import footer from '../assets/footer.png'

const Footer = () => {
  return (
    <div className='bg-gray-900 flex justify-center'>
    <div className='w-[80%] flex flex-wrap lg:flex-nowrap gap-2 justify-center text-white font-medium py-4 bg-gray-900'>
      <div>Made with ❤️ By <NavLink className="text-sky-400" to="https://www.github.com/KaranKumar-97">KARAN KUMAR</NavLink></div>
      <div>Using</div>
      <div> <img src={footer} className='max-w-[3rem]' /></div>
    </div>
    </div>
  )
}

export default Footer
