import {createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { url } from 'inspector'

import { IPizzaData} from '../../interfaces'

const fetchUrl:string ='https://635ba17faa7c3f113dc1ed90.mockapi.io/api/Pizzas'

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
  .get(fetchUrl)
  .then((res) => res.data)
})

export const fetchPiazzasByCategory = createAsyncThunk("pizzas/getPizzasByTag",
  async (tag:string)=>{
  const res = await axios
    .get(tag ==='all'? fetchUrl:fetchUrl+'/?tags='+tag)
  return res.data
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
      builder.addCase(fetchPiazzasByCategory.pending, state =>{
        state.loading = true
      })
      builder.addCase(fetchPiazzasByCategory.fulfilled, (state, action) =>{
        state.loading = false
        state.data = action.payload
      })
      builder.addCase(fetchPiazzasByCategory.rejected, (state, action) =>{

      })
    },
    reducers: {
        // filterPizzas: (state:pizzaSlice, action:PayloadAction<any>)=>{
        //     state.data.filter ((el)=>{
        //       if( el.tags?.includes(action.payload) ){
        //         return el
        //       }
        //     })
            
        // }
    }
})

export default pizzaSlice.reducer

//  export const {} = pizzaSlice.actions

