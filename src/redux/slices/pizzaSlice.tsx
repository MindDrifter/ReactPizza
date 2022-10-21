import {createSlice } from '@reduxjs/toolkit'

import { IPizzaData } from '../../interfaces'

const initialState:IPizzaData[] = [
    {
        "id":0,
        "title":"Пепперони",
        "imageUrl":"pepperoni.png",
        "size": ["30", "40", "50"],
        "dough": ["Классическое", "Тонкое "]
        // "tags": []
      }
    ]
    
const pizzaSlice = createSlice ({
    name: 'pizza',
    initialState: initialState,
    reducers: {
     
    }
})

export default pizzaSlice.reducer

