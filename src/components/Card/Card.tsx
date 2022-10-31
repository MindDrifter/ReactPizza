import React from 'react';
import './Card.scss';
import { IPizzaData } from '../../interfaces';
import OptionSelector from '../ui/OptionSelector/OptionSelector';

function Card ({id, title, imageUrl, size, dough}:IPizzaData) {

  const img = require('../../static/img/'+imageUrl)

  return(
    <div className='Card'>
      <img src= {img} alt="" />
      <span>{title}</span>
      <div className="radio">
        <OptionSelector 
        optionData={{size, dough}}
        onChecked = {(size)=>{console.log(size)}}
        />
      </div>
    </div>
  );
}

export default Card;