import {createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IPizzaData, Ttags } from '../../interfaces'

const initialState:IPizzaData[] = [
    {
        id:0,
        title:"Пепперони",
        imageUrl:"pepperoni.png",
        size: ["30", "40", "50"],
        dough: ["Классическое", "Тонкое "],
        tags:['meat']
    },
    {
        id:0,
        title:"Сырная",
        imageUrl:"cheese.png",
        size: ["30", "40", "50"],
        dough: ["Классическое", "Тонкое "],
        tags:['cheese']
        
      },
      {
        id:0,
        title:"Четрые сыра",
        imageUrl:"4cheese.png",
        size: ["30", "40", "50"],
        dough: ["Классическое", "Тонкое "],
        tags: ['cheese']
      
      },
      {
        id:0,
        title:"Диабло",
        imageUrl:"diablo.png",
        size: ["30", "40", "50"],
        dough: ["Классическое", "Тонкое "],
        tags: ['hot']
       
      },
      {
        id:0,
        title:"Ветчина и сыр",
        imageUrl:"ham.png",
        size: ["30", "40", "50"],
        dough: ["Классическое", "Тонкое "],
        tags:["meat"]
        
      },

    ]
    
const pizzaSlice = createSlice ({
    name: 'pizza',
    initialState: initialState,
    reducers: {
        test: (state:IPizzaData[], action:PayloadAction<IPizzaData>)=>{
            state.push(action.payload)
            
        }
    }
})

export default pizzaSlice.reducer

export const {test} = pizzaSlice.actions

