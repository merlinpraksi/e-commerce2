import React from 'react'
import Cartitem from '../components/Cartitem';
import {useSelector} from "react-redux"
const Cart = () => {
    const productData = useSelector((state) => state.bazar.productData);
    console.log(productData)
  return (


    <div className="max-w-screen-xl mx-auto py-20 flex">
        <Cartitem />
        <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
<div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
    <h2>Cart totals</h2>
    <p className='flex items-center gap-4'>
        Subtotal{""}
        <span>
            $200
        </span>
    </p>
    <p>
        Shipping{""}
    </p>
</div>
<p>
    {""}
    Total <span>$20</span>
</p>
<button className='bg-black text-white w-full py-3 mt--6'>Proceed to checkout</button>
        </div>
    </div>
  )
}

export default Cart
