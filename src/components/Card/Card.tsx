import React, { useState } from 'react';
import './Card.scss';
import { ICardProps, IClick, IPizzaData, ISelectedOptionData } from '../../interfaces';
import OptionSelector from '../../ui/OptionSelector/OptionSelector';
import { useDispatch } from 'react-redux';
import { addPizzaToCart } from '../../redux/slices/cartSlice';
import { calcPriceWithSize } from '../../utils/calcPriceWithSize';
import CartButton from '../../ui/CartButton/CartButton';

function Card ({id, title, imageUrl, size, dough, price, onCardClick}:ICardProps) {

  const img = require('../../static/img/'+imageUrl)
  // #TODO Сделать соотношение ключ-значение для размера пицца, поправить данные в АПИ
  // Что?
  const [selectedOptionData, setSelectedOptionData] = useState <ISelectedOptionData> ({
    size:'30',
    dough:'Классическое'
  })
  
  return(
    <div className='Card'>
      <img src= {img} alt=""  onClick={()=>{onCardClick()}} />
      <span>{title}</span>
      <div className="radio" onClick={e=>e.stopPropagation()}>
        <OptionSelector 
        onOptionSelected={(options)=>{setSelectedOptionData(options)}}
        optionData={{size, dough}}
        // onChecked = {(size)=>{console.log(size)}}
        />
      </div>
      <CartButton selectedOptionData={selectedOptionData} title={title} id={id} price={price} imageUrl={imageUrl}/>
      
      <span>{calcPriceWithSize(selectedOptionData.size, price) + ' руб'}</span>
       
        {/* <button onClick={()=>{addItemToCart()}} >В корзину</button> */}
       
    

     
    </div>
  );
}

export default Card;