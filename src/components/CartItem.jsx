import {AiFillDelete} from 'react-icons/ai'
import {toast} from 'react-hot-toast'
import { useDispatch } from 'react-redux';
import {remove} from '../redux/Slices/cartSlice'

const CartItem = ({item,itemIndex}) => { 
    const dispatch = useDispatch()

    const removeFromCart = () => {
    dispatch(remove(item.id))
    toast.success("Item Removed")
  }

  return (
  <div className='mt-10'>
    <div className='flex justify-center flex-wrap md:flex-nowrap max-w-4xl items-center gap-8 rounded-xl p-5 border border-black shadow-2xl'>
      <div className='max-w-[160px]'><img src={item.image}/></div>


      <div>
        <h1 className='font-bold text-lg'>{item.title}</h1>
        <h1>{`${item.description.slice(0,100)}...`}</h1>

        <div className='flex justify-between max-w-[98%] mt-6'>
          <div className='text-2xl text-sky-700 font-bold'>${item.price}</div>
          <button onClick={removeFromCart} className=' bg-red-300 hover:bg-red-200 text-red-900 rounded-full p-3'><AiFillDelete /></button>
        </div>

      </div>

     

    </div>
  </div>);
};

export default CartItem;
