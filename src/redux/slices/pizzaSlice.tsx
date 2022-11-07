import {createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { url } from 'inspector'

import { IPizzaData, TSort} from '../../interfaces'

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

const sortByTitle = (data:pizzaSlice) => {
  data.data.sort((a,b)=>{
    const nameA = a.title.toUpperCase(); // ignore upper and lowercase
    const nameB = b.title.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
   })
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
      // #TODO Не сохраняется при переключении категории
        sortPizzas: (state:pizzaSlice, action:PayloadAction<TSort>)=>{
          switch (action.payload){
            case 'abc':
              sortByTitle(state)
               break;
            case 'price':
              state.data.sort((a, b) => a.id - b.id);
            break;
          }
        }
    }
})

export default pizzaSlice.reducer

export const {sortPizzas} = pizzaSlice.actions

