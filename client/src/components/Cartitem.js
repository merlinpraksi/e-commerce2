import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineClose } from 'react-icons/md';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { deleteItem, resetCart } from '../redux/bazarSlice';

const CartItem = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const dispatch = useDispatch();

  const handleDeleteItem = (itemId) => {
    dispatch(deleteItem(itemId));
  };

  return (
    <div className='w-2/3 pr-10'>
      <div className='w-full'>
        <h2>Shopping Cart</h2>
      </div>
      <div>
        {productData.map((item) => (
          <div key={item._id} className='flex items-center justify-between gap-6 mt-6'>

            <div className='flex items-center gap-2'>
              <MdOutlineClose onClick={() =>dispatch(deleteItem(item._id))&TransformStream.error} />
              <img
                className='w-32 h-32 object-cover'
                src={item.image}
                alt='productImg'
              />
              <h2 className='w-52'>{item.title}</h2>
              <h2 className='w-52'>{item.price}</h2>
              <p>Quantity</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={()=>dispatch(resetCart() )} className="bg-red-500 text-white mt-8 ml-7 py-1 px-6">Reset Cart</button>
    </div>
  );
};

export default CartItem;
