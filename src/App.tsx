import React, { useEffect, useState } from 'react';

import Header from './components/Header/Header';
import Catalog from './components/Catalog/Catalog';
import {useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/store';




import './App.scss';
import { fetchPiazzas, fetchPiazzasByCategory } from './redux/slices/pizzaSlice';


function App() {
  const [sortType, setSortType] = useState<'all'|'meat' | 'hot' | 'cheese'>()
  const dispatch = useDispatch()<any>

  useEffect(()=>{
    dispatch (fetchPiazzas())
  },[])
  
  const pizzaData = useSelector ((state:RootState)=> state.pizza)

  return (
      <div className="App">
        <Header 
        onPizzaTypeSelected={(tag)=>{dispatch(fetchPiazzasByCategory(tag))}}
        />
        <Catalog data={pizzaData.data}/>
      </div>
  );
}

export default App;
