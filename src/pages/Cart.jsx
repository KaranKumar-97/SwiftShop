import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {
  const {cart} = useSelector((state)=> state)
  const navigate=useNavigate()
  const [totalAmount,setTotalAmount] = useState(0)

  useEffect( ()=> {
    setTotalAmount(cart.reduce( (acc,curr) => acc + curr.price,0))
  },[cart])

  return (
  <div className="flex h-screen justify-center">
    <div className="flex justify-around w-11/12 mb-12">
    { 
      cart.length > 0 ? 
      (<div className="flex justify-evenly flex-wrap gap-8">

        <div className="lg:basis-[60%] basis-[95%]">{cart.map((item,index) => (<CartItem className="border-b border-black" key={item.id} item={item} itemIndex={index} />))}</div>

        <div className="flex flex-col mt-20 top-20">
          <div className="text-sky-700 font-semibold text-2xl">YOUR CART</div>
          <div className="text-5xl font-bold text-sky-800 mb-8">SUMMARY</div>
          <div className="font-semibold text-xl">Total Items : {cart.length}</div>

          <div className="">
           <p className="font-bold text-2xl">Total Amount : <span className="text-sky-800">${totalAmount}</span></p>
          </div>
          <div><button className="w-full  hover:bg-white hover:border-2 border-sky-700 cursor-pointer bg-sky-700 justify-center mt-5 py-3 rounded-3xl text-white hover:text-sky-700 text-lg font-bold">CHECKOUT NOW</button></div>  
        </div>

      </div>) : 
      (<div className="w-screen h-screen flex flex-col justify-center items-center gap-y-8">
      <p className="font-semibold text-3xl">Your Cart is empty!</p>
      <button onClick={() => navigate("/")} className="bg-sky-900 font-semibold text-white text-3xl px-8 py-4 rounded-full">SHOP NOW</button>
    </div>)
      
    }
  </div>
  </div>);
};

export default Cart;
