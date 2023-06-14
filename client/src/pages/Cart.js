import React from 'react'
import Cartitem from '../components/Cartitem';
import {useSelector} from "react-redux"
const Cart = () => {
const productData = useSelector((state) => state.bazar.productData);

  return (

<div className="max-w-screen-xl mx-auto py-20 flex">
<Cartitem />
















<div className='w-1/3 bg-[#fafafa] py-6 px-4'>
    <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
<h2 className='text-2xl font-medium'>cart totals</h2>
<p className="flex items-center gap-4 text-base">
    Subtotal{""}
    <span className="font-titleFont font-bold text-lg">
$200
    </span>
    <p className="flex items-start gap-4 text-base">
Shipping{""}
<span>
    lorem, ipsum dolor sit amet, consectetur adipiscing elit
</span>
    </p>
</p>
    </div>
<p className="font-titleFont font-semibold flex justify-betweem mt-6">
    Total <span className='text-xl font-bold'>$22</span>
</p>
<button text-base bg-black text-white w-full py-3 mt-6>Proceed to checkout</button>
</div>
</div>

  )
}

export default Cart
