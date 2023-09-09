import { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {add,remove} from '../redux/Slices/cartSlice'

const Product = ({product}) => {

  const {cart} = useSelector((state) => state)
  const dispatch = useDispatch()

  function addToCart() {
    dispatch(add(product))
    toast.success("Item Added to Cart")
  }

  function removeFromCart() {
    dispatch(remove(product.id))
    toast.error("Item removed from Cart")
  }


  return (
    <div className="flex flex-col justify-around items-center aspect-[3/4] p-3 rounded-xl shadow-gray-300 shadow-xl gap-y-4 max-w-[17rem] hover:scale-105 transition-all duration-500 hover:shadow-gray-950 group hover:shadow-2xl shadow- border border-gray-500">
    
      <div className="text-center font-bold">{product.title.length > 40 ? (<div>{`${product.title.slice(0,40)}...`}</div>) : (<div>{product.title}</div>)}</div>
      <div className="text-gray-500 text-xs">{`${product.description.slice(0,80)}...`}</div>
      <div className="w-[8rem]"><img src={product.image} alt="" /></div>

      <div className="flex justify-between items-end w-full">
        <div className="text-green-700 text-lg font-bold">{`$${product.price}`}</div>
        {
          cart.some(p => p.id == product.id) ? (<div><button onClick={removeFromCart} className="py-1 px-2 rounded-full border border-gray-800 font-medium group-hover:bg-gray-700 group-hover:text-white transition-all duration-500">Remove Item</button></div>) : (<div><button onClick={addToCart}
            className="py-1 px-2 rounded-full border border-gray-800  font-medium group-hover:bg-gray-700 group-hover:text-white transition-all duration-500">ADD TO CART</button></div>)
        }
        
        
      </div>
  </div>);
};

export default Product;
