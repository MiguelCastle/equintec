import { Route, Routes } from "react-router-dom";
import Footer from "./components/common/footer/footer";
import {default as Header} from "./components/common/userHeader";
import AboutUs from "./screens/user/aboutUs";
import ContactUs from "./screens/user/contactUs";
import Home from "./screens/user/home";
import ProductDetails from "./screens/user/productDetails";
import Products from "./screens/user/products";
import './static/scss/screens/userStyle.css';

function App() {
  const handleAddToCartClick = (e:any) => {
    e.preventDefault();
    alert('APP adding to cart!')
  }
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path={'/acercade'} element={<AboutUs/>} />
        <Route path={'/products'} element={<Products handleAddToCart={handleAddToCartClick}/>} />
        <Route path={'/product/:id'} element={<ProductDetails handleAddToCart={handleAddToCartClick}/>}/>
        <Route path={'/contactus'} element={<ContactUs/>}/>
        <Route path={'/'} element={<Home/>} />
      </Routes>
      <Footer color={'#fff'} bckground={'#1e1e1e'}/>
    </div>
  );
}

export default App;
