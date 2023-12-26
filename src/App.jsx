import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/Navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';

import Cart from './components/Cart/Cart';
import { CartProvider } from './Components/Context/CardContext';

function App() {
  return (
    <>
      <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />

          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

            