import React, {} from 'react';
import Card from '../Card/Card';
import './Catalog.scss'
import { IPizzaData, ICatalogProps } from '../../interfaces';


// #TODO
function Catalog({data}:ICatalogProps) {
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
