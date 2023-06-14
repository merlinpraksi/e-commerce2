import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { deleteItem, resetCart } from '../redux/bazarSlice';

import {addToCart} from "../redux/bazarSlice"


const Cartitem = () => {
    let [baseQty, setBaseQty] = useState(1);
    const dispatch = useDispatch();
    const productData = useSelector((state) => state.bazar.productData)
  return (

    <div className="w-2/3 pr-10">
    <div>
<h2 className="font-titleFont text-2xl">shopping cart</h2>
    </div>
    <div>
        {
productData.map((item)=>(
    <div
    key={item._id}
    className="flex items-center justify-between gap-6"
    >
<div className="flex items-center gap-2">
<MdClose onClick={()=>dispatch(deleteItem(item._id))}/>
<img className="w-32 h-32 object-cover"
src={item.image}
alt="productImg"
/>
</div>
<h2 className="w-52">{item.title}</h2>
<p className='w-10'>${item.price}</p>

<div className="flex items-center gap-4 text-sm font-semibold border p-3">
              <p>Quantity</p>
              <button
                onClick={() => setBaseQty(baseQty === 1 ? 1 : baseQty - 1)}
                className="border h-5"
              >
                -
              </button>
              <span>{baseQty}</span>
              <button onClick={() => setBaseQty(baseQty + 1)} className="border h-5">
                +
              </button>
            </div>

            <button
          onClick={() =>
           dispatch(
             addToCart({
             _id: item._id,
             title: item.title,
               image: item.image,
                 price: item.price,
                  quantity: baseQty,
                   description: item.description,
                  })
               )
              }
            >
              Add to Cart
            </button>


    </div>

))}
<button onClick={() =>dispatch(resetCart())} className='bg-red-500 text-white mt-8 ml-7 py-1'>Reset Cart</button>
    </div>
    </div>
  )
}

export default Cartitem
