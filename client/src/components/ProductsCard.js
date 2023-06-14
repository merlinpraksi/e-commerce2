import React from 'react'
import {useNavigate} from "react-router-dom"
import {useDispatch} from "react-redux"
import {addToCart} from "../redux/bazarSlice"

const ProductsCard = ({product}) => {
const dispatch = useDispatch();
const navigate = useNavigate();

const _id = product.title;
const idString = (_id) => {
    return String(_id).toLowerCase().split("").join("");
};

const rootId = idString(_id);
console.log(rootId);

const handleDetails = () =>{
navigate(`/product/${rootId}`, {
state: {
    item: product,
}
})
}
  return (
    <div className='group'>
    <div onClick={handleDetails} className='w-full h-96 cursor-pointer overflow-hidden'>

    <img className="w-full h-full object-cover group-hover:scale-110 duration-500"
     src={product.image} alt="productImg" />
</div>
<div className="w-full border-[1px] px-2 py-4">
<div>
<h2>{product.title}</h2>
</div>
<div>
    <p>${product.price}</p>
</div>
<p on onClick={()=>dispatch(addToCart({
_id: product._id,
title: product.title,
image: product.image,
price: product.price,
quantity: 1,
description: product.description,
}))}>add to cart{""}

</p>
</div>
    </div>
  )
}

export default ProductsCard
