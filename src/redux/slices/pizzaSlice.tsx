import {createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

import { IPizzaData, Ttags } from '../../interfaces'

interface pizzaSlice  {
  loading:boolean,
  data:IPizzaData[]
}

const initialState:pizzaSlice = {
  loading:true,
  data:[{
    id:0,
    title:"",
    imageUrl:"pepperoni.png",
    size: [""],
    dough: [""],
    tags:['all'],
    
}]
}

  
    


export const fetchPiazzas = createAsyncThunk("pizzas/getPizzas", ()=>{
  return axios
  .get('https://635ba17faa7c3f113dc1ed90.mockapi.io/api/Pizzas')
  .then((res) => res.data)
  
})
    
const pizzaSlice = createSlice ({
    name: 'pizza',
    initialState: initialState,
    extraReducers(builder) {
      builder.addCase(fetchPiazzas.pending, (state)=>{
        state.loading = true
      })
      builder.addCase(fetchPiazzas.fulfilled, (state, action)=>{
        state.loading = false
        state.data = action.payload
      })
      builder.addCase(fetchPiazzas.rejected, (state, action)=>{

      })
    },
    reducers: {
        filterPizzas: (state:pizzaSlice, action:PayloadAction<any>)=>{
            state.data.filter ((el)=>{
              if( el.tags?.includes(action.payload) ){
                return el
              }
            })
            
        }
    }
})

export default pizzaSlice.reducer

export const {filterPizzas} = pizzaSlice.actions

