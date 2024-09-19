
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import grocery_banner from './Components/Assets/grocery-banner1.jpeg';
import fastfood_banner from './Components/Assets/fastfood-banner.jpg';
import fruit_banner from './Components/Assets/fruits-banner.png';
import Product from './Pages/Product';
import Cart from './Pages/Cart';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Shop/>}/>
        <Route path='/grocery' element={<ShopCategory banner={grocery_banner} category="grocery"/>}/>
        <Route path='/fastfood' element={<ShopCategory  banner={fastfood_banner} category="fastfood"/>}/>
        <Route path='/fruits' element={<ShopCategory banner={fruit_banner} category="fruits"/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
          <Route path='/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
