import React, { useState } from 'react';
import './Card.scss';
import { ICardProps, IClick, IPizzaData, ISelectedOptionData } from '../../interfaces';
import OptionSelector from '../ui/OptionSelector/OptionSelector';
import { useDispatch } from 'react-redux';
import { addPizzaToCart } from '../../redux/slices/cartSlice';
import { calcPriceWithSize } from '../../utils/calcPriceWithSize';

function Card ({id, title, imageUrl, size, dough, price, onCardClick}:ICardProps) {

  const img = require('../../static/img/'+imageUrl)
  const dispatch = useDispatch<any>();
  // #TODO Сделать соотношение ключ-значение для размера пицца, поправить данные в АПИ
  // Что?
  const [selectedOptionData, setSelectedOptionData] = useState <ISelectedOptionData> ({
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
      id,
      price:calcPriceWithSize(selectedOptionData.size, price)
    })
    )
  }
  



  return(
    <div className='Card'>
      <img src= {img} alt=""  onClick={()=>{onCardClick()}} />
      <span>{title}</span>
      <div className="radio">
        <OptionSelector 
        onOptionSelected={(options)=>{setSelectedOptionData(options)}}
        optionData={{size, dough}}
        // onChecked = {(size)=>{console.log(size)}}
        />
      </div>
      <button onClick={()=>{addItemToCart()}} >В корзину</button>
      {calcPriceWithSize(selectedOptionData.size, price)}
    </div>
  );
}

export default Card;