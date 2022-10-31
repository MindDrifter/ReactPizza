import React, { ReactNode, useEffect, useState } from 'react';
import Card from '../Card/Card';
//import CatalogData from '../../static/catalog.json'
import './Catalog.scss'
import { IPizzaData, Ttags, ICatalogProps } from '../../interfaces';
import useOptionData from '../Hooks/useOptionData';

import {useSelector} from 'react-redux'

import { RootState } from '../../redux/store';
import { fetchPiazzas } from '../../redux/slices/pizzaSlice';


//import { test } from '../../redux/slices/pizzaSlice';


// #TODO
function Catalog({data}:ICatalogProps) {
  
  //console.log(data);
  //const pizzaData = useSelector ((state:RootState)=> state.pizza)
  const selectedPizzaType = useSelector((state:RootState)=> state.sortTag)
  const [tagForSort, setTagForSort] = useState<Ttags>({tag:'all'})
 
  // useEffect(()=>{
  //   setTagForSort(selectedPizzaType)
  // }, [selectedPizzaType.tag])
  // const pizzaTypes:Ttags = {
  //   tag:
  // }

  useEffect(()=>{
 
    
  },[data])

  //const pizzaData: IPizzaData[] = []
  //console.log(selectedPizzaType.tag, 'asdasdasdasd');
  //selectedPizzaType.tag as string === 'all'? console.log('test'):console.log('fail')
  return (
    <div className='container'>
      <h1>Пицца</h1>
      <div className="container__pizzas">
        {
          
          data.map(({id, title, imageUrl, size, dough, tags}:IPizzaData)=>{
              return <Card size={size} dough={dough} key={id} id={id} title={title} imageUrl={imageUrl}></Card>
          })
          
        }
      </div>
    </div >
  );
}

export default Catalog;
