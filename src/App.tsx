import React, { useEffect, useState } from 'react';

import Header from './components/Header/Header';
import Catalog from './components/Catalog/Catalog';
import {useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/store';




import './App.scss';
import { fetchPiazzas, fetchPiazzasByCriteria } from './redux/slices/pizzaSlice';
import { Ttags } from './interfaces';


function App() {
  //const [sortType, setSortType] = useState<'all'|'meat' | 'hot' | 'cheese'>()
  const dispatch = useDispatch()<any>


  useEffect(()=>{
    dispatch (fetchPiazzas())
  },[])
  
  const pizzaData = useSelector ((state:RootState)=> state.pizza)
  return (
      <div className="App">
        <Header 
        onPizzaTypeSelected={(tag, sortType)=>{dispatch(fetchPiazzasByCriteria({tag, sortType}))}}
        />
        <Catalog data={pizzaData.data} loading={pizzaData.loading}/>
      </div>
  );
}

export default App;
