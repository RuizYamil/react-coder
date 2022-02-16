import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartContextProvider } from './components/Context/cartContext';
import ItemList from './components/ItemListContainer/ItemList/ItemList';
import Checkout from './components/Cart/Checkout';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
          <div className="App">
            <NavBar />
            <Routes>
              <Route exact path='/' element={<ItemList greeting='Productos' />} />
              <Route exact path='/category/:idCategory' element={<ItemList greeting='Productos' />} />
              <Route exact path='/detail/:idDetail' element={<ItemDetailContainer />} />
              <Route exact path='/cart' element={<Cart />} />
              <Route exact path='/checkout' element={<Checkout/>} />
            </Routes>
          </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
