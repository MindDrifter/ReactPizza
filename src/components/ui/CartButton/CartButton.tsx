import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ICartButtonProps } from '../../../interfaces';
import { addPizzaToCart } from '../../../redux/slices/cartSlice';
import { calcPriceWithSize } from '../../../utils/calcPriceWithSize';

export default function CartButton ({selectedOptionData, title, id, price}:ICartButtonProps) {

    const dispatch = useDispatch()

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
        <>
            <button onClick={()=>{addItemToCart()}} >В корзину</button>
        </>
    )
}