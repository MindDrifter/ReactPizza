import React from 'react';
import { useDispatch } from 'react-redux';
import { ICartSlice, removePizzaFromCart } from '../../redux/slices/cartSlice';
import './CartItem.scss'

function CartItem({title, pizzaId, price, imageUrl, selectedOptionData, id}:ICartSlice){
    const dispatch = useDispatch<any>()

    const img = require('../../static/img/'+imageUrl)
    console.log(imageUrl);
    return(
        <div>
            <div className='item_container'>
                <div className="left_side">
                    
                    <img src={img} alt="" />
                    <span className='title'>{title}</span>
                </div>

                <div className="center_side">
                <span className='dough'>Тесто: {selectedOptionData.dough}</span>
                <span className='size' >Размер: {selectedOptionData.size}</span>
                </div>

                <div className='right_side'>
                    <span className='del_btn' onClick={()=>dispatch(removePizzaFromCart({id}))}>x</span>
                    <span className='price'>{price} руб.</span>
                </div>
                
            </div>
            <hr />
        </div>
    )
}

export default CartItem


