import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// components
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import ProductPage from './pages/product/productPage';
import Login from "./pages/auth/login/login";
import SignUp from "./pages/auth/signUp/signUp";
import Contact from "./pages/contact/contact";
import ShoppingCart from "./pages/product/cart";
import CheckOutForm from "./pages/checkOutForm";
import ProductDetails from "./pages/product/productDetails";
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

const AppContent = () => {
  const { pathname } = useLocation();

  const showHeaderFooter  = pathname !== '/login' && pathname !== '/signup'  && pathname !== '/checkout';


  return (
    <>
      {showHeaderFooter  && <Header/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<ProductPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/product/:id"  element={<ProductDetails />} />
        <Route path="/checkOut" element={<CheckOutForm />} />
      </Routes>
      {showHeaderFooter  && <Footer/>}
    </>
  );
}

export default App;
