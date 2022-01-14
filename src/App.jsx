import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route exact path='/' element={<ItemListContainer greeting='Hola Coder' />} />
            <Route exact path='/category/:idCategory' element={<ItemListContainer greeting='Hola Coder' />} />
            <Route exact path='/detail/:idDetail' element={<ItemDetailContainer />} />
            <Route exact path='/cart' element={<Cart />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
