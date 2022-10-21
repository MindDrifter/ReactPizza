
import React, { useState } from 'react';
import { IOptionSelectorProps } from '../../../interfaces';
import './OptionSelector.scss'

function OptionSelector ({optionData, onChecked}:IOptionSelectorProps) {

    const [selectedSize, setSelectedSize] = useState(0)
    const [selectedDough, setSelectedDough] = useState(0)

    const selectSize = (i:number, size:string) =>{
      setSelectedSize(i)
      onChecked (size)
    }

    const selectdDough = (i:number, dough:string)=>{
      setSelectedDough(i)
      onChecked (dough)
    }

    return(
        <div className='options_background'>
          <ul className='options'>
            {
              optionData.size.map((el, i)=>{
                return(
                  <li
                  key={el}
                  onClick={()=>{selectSize(i, el)}}
                  className ={selectedSize === i ? 'active_type type': 'type'}
                  >{el +' см.'}</li>
                )
              })
            }
            {/* <label htmlFor="">см</label> */}
          </ul>

          <ul className='options'>

            {
              optionData.dough.map((el, i)=>{
                return(
                  <li
                  key={el}
                  onClick={()=>{selectdDough(i, el)}}
                  className ={selectedDough === i ? 'active_type type': 'type'}
                  >{el}</li>
                )
              })
            }
            {/* <label htmlFor="">тесто</label> */}
          </ul>
        </div>
    )
    
}

export default OptionSelector