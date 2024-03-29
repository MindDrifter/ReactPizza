import React, {} from 'react';
import Card from '../Card/Card';

import { useSelector } from 'react-redux';

import './Catalog.scss'
import { IPizzaData, ICatalogProps } from '../../interfaces';
import CardSkeleton from '../Card/CardSkeleton';



// #TODO
function Catalog({data, loading, onModalOpened}:ICatalogProps) {

  return (
    <div className='container'>
      <h1>Пицца</h1>
      <div className="container__pizzas">
        {
          !loading
          ?
          data.map(({id, title, imageUrl, size, dough, tags, price, popularity}:IPizzaData)=>{
              return <Card 
              onCardClick={()=>{onModalOpened(id)}}
              price={price}
              size={size} 
              dough={dough} 
              key={id} 
              id={id} 
              title={title} 
              imageUrl={imageUrl}
              popularity ={popularity}
              />
          })
          :
          [1,3,4,6,7,8,9].map((el)=>{
           return <CardSkeleton  key={el}></CardSkeleton>
          })
        }
       
        
      </div>
    </div >
  );
}

export default Catalog;
