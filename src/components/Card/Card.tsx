import React, { useState } from 'react';
import './Card.scss';
import { IPizzaData } from '../../interfaces';
import OptionSelector from '../ui/OptionSelector/OptionSelector';
import { useDispatch } from 'react-redux';
import { addPizzaToCart } from '../../redux/slices/cartSlice';

function Card ({id, title, imageUrl, size, dough}:IPizzaData) {

  const img = require('../../static/img/'+imageUrl)
  const dispatch = useDispatch<any>();
  // #TODO Сделать соотношение ключ-значение для размера пицца, поправить данные в АПИ
  const [selectedOptionData, setSelectedOptionData] = useState({
    size:'30',
    dough:'Классическое'
  })
  

  const addItemToCart = ()=>{
    // console.log(selectedOptionData)
    // console.log(id)
    // console.log(title)
    // console.log(imageUrl);
    dispatch(addPizzaToCart({
      selectedOptionData,
      title,
      id
    })
    )
  }

  return(
    <div className='Card'>
      <img src= {img} alt="" />
      <span>{title}</span>
      <div className="radio">
        <OptionSelector 
        onOptionSelected={(options)=>{setSelectedOptionData(options);}}
        optionData={{size, dough}}
        // onChecked = {(size)=>{console.log(size)}}
        />
      </div>
      <button onClick={()=>{addItemToCart()}} >В корзину</button>
    </div>
  );
}

export default Card;