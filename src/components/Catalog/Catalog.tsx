import React, {} from 'react';
import Card from '../Card/Card';

import { useSelector } from 'react-redux';

import './Catalog.scss'
import { IPizzaData, ICatalogProps } from '../../interfaces';
import CardSkeleton from '../Card/CardSkeleton';



// #TODO
function Catalog({data, loading}:ICatalogProps) {

  return (
    <div className='container'>
      <h1>Пицца</h1>
      <div className="container__pizzas">
        {
          !loading
          ?
          data.map(({id, title, imageUrl, size, dough, tags}:IPizzaData)=>{
              return <Card 
              size={size} 
              dough={dough} 
              key={id} 
              id={id} 
              title={title} 
              imageUrl={imageUrl}/>
          })
          :
          <CardSkeleton></CardSkeleton>
        }
       
        
      </div>
    </div >
  );
}

export default Catalog;
