import React from 'react'
import { FullLogo, shoppingcart } from '../assets'
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux"

const Header = () => {
    const productData = useSelector((state) => state.bazar.productData)
    console.log(productData)
  return (
     <div className='w-full h-20 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50'>
    <div className="max-w-screen-x1 h-full mx-auto flex items-center justify-between">
        <Link to="/">
        <div>
        <img className="w-24" src={FullLogo} alt="logo"/>
        </div></Link>
        <div className='flex items-center gap-8'>
        <ul className='flex items-center gap-8'>
<li className='text-base text-black font bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Home</li>
<li className='text-base text-black font bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Pages</li>
<li className='text-base text-black font bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Shop</li>
<li className='text-base text-black font bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Element</li>
<li className='text-base text-black font bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Blog</li>
        </ul>
        <div className='relative'>
        <img className='w-6' src={shoppingcart} alt="shoppingcart" />

        <span className='absolute w-6 top-0 left-2 text-sm flex items-center'>{productData.length}</span>
        </div>
        <img className="w-8 h-8 rounded-full"src="https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
    </div>
    </div>

    </div>
    );
}

export default Header
