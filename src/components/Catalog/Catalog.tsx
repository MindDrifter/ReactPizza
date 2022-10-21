import React, { ReactNode } from 'react';
import Card from '../Card/Card';
//import CatalogData from '../../static/catalog.json'
import './Catalog.scss'
import { IPizzaData } from '../../interfaces';
import useOptionData from '../Hooks/useOptionData';

import {useSelector} from 'react-redux'
import { RootState } from '../../redux/store';


function Catalog() {

  const pizzaData = useSelector ((state:RootState)=> state.pizza)

  //const pizzaData: IPizzaData[] = []
  
  return (
    <div className='container'>
      <h1>Пицца</h1>
      <div className="container__pizzas">
        {
          pizzaData.map(({id, title, imageUrl, size, dough}:IPizzaData)=>{
              return <Card size={size} dough = {dough} key={id} id={id} title={title} imageUrl={imageUrl}></Card>
          })
        }
      </div>
    </div >
  );
}

export default Catalog;
