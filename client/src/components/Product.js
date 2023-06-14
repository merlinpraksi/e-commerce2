import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import {useDispatch} from "react-redux"
import {addToCart} from "../redux/bazarSlice"

const Product = () => {
    const dispatch = useDispatch()
    const [details, setDetails] = useState({})
    let [baseQty, setBaseQty] = useState(1);
    const Location = useLocation()
    useEffect(() =>{
setDetails(Location.state.item)
    }, [])
  return (
    <div>
<div className="max-w-screen-xl mx-auto my-10 flex gap-10">
    <div>
        <img
className="w-full h-[550px] object-cover"
src={details.image}
alt="productImg"

/>
    </div>
    <div className='w-3/5'>
<div>
    <h2 className='text-4xl font-semibold'>{details.title}</h2>
    <div>
<p className='text-2xl font-medium text-gray-900'
>${details.price}</p>
<div>
    <p>{details.description}</p>
</div>
<div className='flex items-center gap-4 text-sm font-semibold border p-3'>
    <p>Quantity</p>
    <button onClick={() => setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty -1)} className='border h-5'>-</button>
<span>{baseQty}</span>
<button onClick={() => setBaseQty(baseQty + 1)} className='border h-5'>+</button>
</div>
    </div>
    <button onClick={()=> dispatch(addToCart({

            _id: details._id,
            title: details.title,
            image: details.image,
            price: details.price,
            quantity: baseQty,
            description: details.description,
    }))}
    className='bg-black text-white py-3 px-6 active:bg-gray-800'>add to cart</button>
</div>
    </div>
</div>
    </div>
  )
}

export default Product
