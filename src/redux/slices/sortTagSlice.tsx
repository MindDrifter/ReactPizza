import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Ttags } from '../../interfaces'


const  initialState:Ttags = {
    tag:'all'
}

const sortTagSlice = createSlice({
    name: 'sortTag',
    initialState: initialState,
    reducers: {
        selectTag: (state:Ttags, action:PayloadAction<Ttags>) => {            
            state.tag = action.payload.tag
        }
    }
})

export default sortTagSlice.reducer;

export const {selectTag} = sortTagSlice.actions