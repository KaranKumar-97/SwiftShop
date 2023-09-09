import {useEffect, useState} from "react"
import  axios  from "axios";
import Product from "../components/Product";
import Spinner from "../components/Spinner";


const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading,setLoading] = useState(false)
  const [itemData,setItemData] = useState([])

  async function fetchProductData() {
    setLoading(true)
    const res=await fetch(API_URL)
    const data=await res.json()
    setItemData(data)
    setLoading(false)
  }


  useEffect( ()=> {
    fetchProductData()
  },[])

  return (
  <div className="w-screen flex justify-center">
    {
      loading ? (<Spinner />) : itemData.length > 0 ? 
      (<div className="flex justify-center flex-wrap gap-8 my-16 w-11/12">{
        itemData.map( (product)=> (
          <Product key={product.id} product={product} />
        ))}</div>) : (<div><p>NO DATA FOUND</p></div>)
    } 
  </div>);
};

export default Home;
