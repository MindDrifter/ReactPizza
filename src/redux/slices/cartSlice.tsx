import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    id:0,
    title:'',
    imageUrl:'',
    selectedOptionData:{
        size:'',
        dought:''
    }
}
]


const cartSilce = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addPizzaToCart:(state, action)=>{
            state.push(action.payload)
            state.map(el=>{
                console.log(el.selectedOptionData.size);
            })
        },
        removePizzaFromCart:(state, action)=>{
            //....
        }   
    }
})

export default cartSilce.reducer

export const {addPizzaToCart} = cartSilce.actions