import { createSlice } from "@reduxjs/toolkit";
import { ISelectedOptionData } from "../../interfaces";

export interface ICartSlice {
    id:number
    pizzaId:number,
    title:string,
    imageUrl:string
    selectedOptionData:ISelectedOptionData,
    price:number

}


const initialState:ICartSlice[] = [{
    id:0,
    pizzaId:0,
    title:'',
    imageUrl:'',
    selectedOptionData:{
        size:'',
        dough:''
    },
    price:0
}
]

initialState.splice(0,1)


const cartSilce = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addPizzaToCart:(state, action)=>{
            state.push(action.payload)
            state.map(el=>{
                console.log(el.price);
            })
        },
        removePizzaFromCart:(state, action)=>{
            console.log(action.payload);
            state.splice(state.findIndex(el=>el.id===action.payload.id),1) 
        },
        sort:(state)=>{
            state.sort(function (a, b) {
                if (a.title > b.title) {
                  return 1;
                }
                if (a.title < b.title) {
                  return -1;
                }
                // a должно быть равным b
                return 0;
              });
        }
    }
})

export default cartSilce.reducer

export const {addPizzaToCart, removePizzaFromCart,sort} = cartSilce.actions