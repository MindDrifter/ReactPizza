import React from 'react';
import { IOptionData } from '../../interfaces';

function useOptionData(size:string[], dough: string[]){
    
    const optionData:IOptionData = {
        size: size,
        dough: dough
    }

    return(optionData)
}

export default useOptionData