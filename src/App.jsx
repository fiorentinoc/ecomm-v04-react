import NavBar from './components/NavBar';
import Home from './components/Home';
import Store from './components/Store';
import Contact from './components/Contact';
import Help from './components/Help';
import Cart from './components/Cart';
import FetchData from './utils/FetchData';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';

function App() {

  /* const [state, setState] = useState([])

  useEffect(()=>{
    FetchData().then(()=>{
      setState(peticionAPI)
    })
    
  },[]) */

  return (
    <Router>
      <NavBar />
          
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/store' element={<Store />} />
        <Route exact path='/contacto' element={<Contact />} />
        <Route exact path='/ayuda' element={<Help />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/store/detalle/:prodId' element={<ItemDetailContainer />} />
        <Route exact path='/store/categoria/:catId' element={<ItemListContainer />} />
        
      </Routes>
    </Router>
  );
}

export default App;
