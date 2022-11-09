import {createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { url } from 'inspector'

import { IPizzaData, TSort, Ttags} from '../../interfaces'

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

// const sortByTitle = (data:pizzaSlice) => {
//   data.data.sort((a,b)=>{
//     const nameA = a.title.toUpperCase(); // ignore upper and lowercase
//     const nameB = b.title.toUpperCase(); // ignore upper and lowercase
//     if (nameA < nameB) {
//       return -1;
//     }
//     if (nameA > nameB) {
//       return 1;
//     }
//     // names must be equal
//     return 0;
//    })
// }

export const fetchPiazzas = createAsyncThunk("pizzas/getPizzas", ()=>{
  return axios
  .get(fetchUrl)
  .then((res) => res.data)
})

export const fetchPiazzasByCriteria = createAsyncThunk("pizzas/getPizzasByCriteria",
  async (data:any)=>{
   console.log(data);
   
    
  const res = await axios
    .get(data.tag ==='all'? fetchUrl+`?sortBy=${data.sortType}&order=asc`:fetchUrl+'/?tags='+data.tag+'&sortBy=title&order=asc')
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
      builder.addCase(fetchPiazzasByCriteria.pending, state =>{
        state.loading = true
      })
      builder.addCase(fetchPiazzasByCriteria.fulfilled, (state, action) =>{
        state.loading = false
        state.data = action.payload
      })
      builder.addCase(fetchPiazzasByCriteria.rejected, (state, action) =>{

      })
    },
    reducers: {
      // #TODO Не сохраняется при переключении категории
        // sortPizzas: (state:pizzaSlice, action:PayloadAction<TSort>)=>{
        //   switch (action.payload){
        //     case 'title':
        //       sortByTitle(state)
        //        break;
        //     case 'price':
        //       state.data.sort((a, b) => a.id - b.id);
        //     break;
        //   }
        // }
    }
})

export default pizzaSlice.reducer

// export const {sortPizzas} = pizzaSlice.actions

