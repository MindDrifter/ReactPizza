import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {useNavigate } from 'react-router-dom';
import CartItem from '../../components/CartItem/CartItem';
import { sort } from '../../redux/slices/cartSlice';
import { RootState } from '../../redux/store';
import { calcSumPrice } from '../../utils/calcSumPrice';
import './Cart.scss'
function Cart (){
    const dispatch = useDispatch()
    const cartData = useSelector((state:RootState)=>state.cart)
    dispatch(sort())
    //  console.log(cartData);
    const navigate = useNavigate()
    return (
       
        <div className='cart_container'>
            <span className='toMain' onClick={()=>navigate('/')} >На главную</span>
            <h1>Корзина</h1>
            <div className="cart_items">
            {
                
                cartData.length > 0?
                
                cartData.map(el=>{
                    console.log(el.imageUrl);

                return <CartItem 
                    key={el.id}
                    id={el.id}
                    pizzaId={el.pizzaId} 
                    title={el.title} 
                    imageUrl={el.imageUrl} 
                    selectedOptionData={el.selectedOptionData} 
                    price={el.price}  />
                    
                })
                    
                :
                <h1>Корзина пуста</h1>
            }
            </div>
           { cartData.length > 0 ? <span className='sum_price'>{calcSumPrice(cartData)+' руб.'}</span> : ''}
        </div>
    )
}

export default Cart