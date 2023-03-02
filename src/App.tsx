import React, { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom'
import Main from './pages/Main';

import './App.scss';
import Cart from './pages/Cart/Cart';

function App() {

  
  return(
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='*' element={<h1>404</h1>}></Route>
    </Routes>
  )
}

export default App;
