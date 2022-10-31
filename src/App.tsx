import React, { useEffect, useState } from 'react';

import Header from './components/Header/Header';
import Catalog from './components/Catalog/Catalog';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { RootState, store } from './redux/store';




import './App.scss';
import { fetchPiazzas } from './redux/slices/pizzaSlice';


function App() {
  const [sortType, setSortType] = useState<'all'|'meat' | 'hot' | 'cheese'>()
  const dispatch = useDispatch()<any>
  
  
  // useEffect (()=>{
  //   dispatch (fetchPiazzas)
  //   if (sortType === 'all'){
  //     // setSortType()
  //   }
  // }, [sortType]) 

  useEffect(()=>{
    dispatch (fetchPiazzas())
  },[])
  
  const pizzaData = useSelector ((state:RootState)=> state.pizza)
  //console.log({id:'12'});
  console.log(pizzaData);
  
  return (
      <div className="App">
        <Header 
        onPizzaTypeSelected={(tag)=>{setSortType(tag)}}
        ></Header>
        <Catalog data={pizzaData.data}  ></Catalog>
      </div>
  );
}

export default App;
