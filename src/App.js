
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Service from"./pages/Service";
import NotFoundPage from "./pages/NotFoundPage";
import CustomNavBar from "./components/CustomNavBar"
import Footer from "./components/Footer"
import Products from "./pages/Products";
import ProductsDetail from "./pages/ProductsDetail";
function App() {
  return (

    <BRouter>
        <CustomNavBar/>
    <Routes>
  
      <Route path="/" index element ={<HomePage/>} />
      <Route path="/aboutus" element ={<AboutUs/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/products" element={<Products/>} />
      <Route path="/products/:id" element={<ProductsDetail/>}/>
       <Route path="*" element={<NotFoundPage/>}/>
     

    </Routes>
     <Footer/>
    </BRouter>
    
  );
}

export default App;
