import {PiShoppingCartSimpleFill} from "react-icons/pi"
import logo from "../assets/logo.png"
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Navbar = () => {
  const {cart} = useSelector((state)=> state)

  return (
  <nav className="bg-gray-900 text-white shadow rounded-b-lg ">
    <div className="flex justify-between mx-auto max-w-[80%]">
      <NavLink className="flex items-center gap-2" to="/">
        <div className="w-[5rem]"><img src={logo} alt="logo" /></div>
        </NavLink>
      
      <div className="flex items-center gap-8">
        <NavLink to="/">
        <div className="font-semibold text-xl hover:text-sky-400">Home</div>
        </NavLink>
      <NavLink to="/cart" className="flex gap-x-2 items-center relative">
        <div>{cart.length > 0 ? (<div className="absolute flex justify-center items-center text-[0.75rem] font-bold bg-sky-700 w-[20px] h-[20px] rounded-full animate-bounce left-5 bottom-3">{cart.length}</div>) : (<div className="bg-transparent"></div>)}</div>
        <div className="flex items-center gap-2 group">
          <div className="text-3xl group-hover:text-sky-400"><PiShoppingCartSimpleFill /></div> 
          <div className="text-xl group-hover:text-sky-400 font-semibold">Cart</div>
        </div>
        
      </NavLink>
      </div>
    </div>
    
    

  </nav>);
};

export default Navbar;
