import './CartButton.scss'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ICartButtonProps } from '../../interfaces';
import { addPizzaToCart, ICartSlice } from '../../redux/slices/cartSlice';
import { RootState } from '../../redux/store';
import { calcPriceWithSize } from '../../utils/calcPriceWithSize';

export default function CartButton ({selectedOptionData, title, id, price, imageUrl}:ICartButtonProps) {

    const cart = useSelector((state:RootState)=>state.cart)
    const dispatch = useDispatch<any>()
    const [amount, setAmount] = useState(0)
 
  
    function getAmountById(data:ICartSlice[],id:number):number{
      return data.filter(e=>e.pizzaId === id).length
   }
   

    useEffect(()=>{
      setAmount(getAmountById(cart, id))
    }, [cart])

    const addItemToCart = ()=>{
        // console.log(selectedOptionData)
        // console.log(id)
        // console.log(title)
        // console.log(imageUrl);
        console.log('added');
        dispatch(addPizzaToCart({
          selectedOptionData,
          title,
          pizzaId:id,
          id:Date.now(),
          price:calcPriceWithSize(selectedOptionData.size, price),
          imageUrl
        })
        )
        
        
        setAmount(getAmountById(cart, id))
        
      }
      

    return(
        <>  
          { 
             <button className='cart_button' onClick={()=>{addItemToCart()}} >{ 
              amount === 0 
              ?'В корзину' 
              :'В корзине '+amount}</button>
          }
           
        </>
    )
}