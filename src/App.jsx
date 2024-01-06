import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartProvider } from './components/Context/CardContext';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/Navbar';
import { Home } from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>


          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          </Routes>

        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
