import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './Components/Navbar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartProvider } from './Components/Context/CardContext';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';



function App() {
  return (
    <>   <CartProvider>
      <BrowserRouter>
   
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />

          <Route path="/cart" element={<Cart/>} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
        
      </BrowserRouter>
      </CartProvider>
    </>
    
  );
}

export default App;

            