import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom"
import Cart from "./pages/Cart";
import { Toaster,toast } from "react-hot-toast";
import Footer from "./components/Footer";

const App = () => {
  return (
  <div className="overflow-x-hidden">
    <div><Toaster/></div>
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>

    <Footer />
  </div>);
};

export default App;
