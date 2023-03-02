
import React, { useEffect, useState } from 'react';
import { IOptionSelectorProps, ISelectedOptionData } from '../../interfaces';
import './OptionSelector.scss'

function OptionSelector ({onOptionSelected,optionData}:IOptionSelectorProps) {

    const [selectedSize, setSelectedSize] = useState(0)
    const [selectedDough, setSelectedDough] = useState(0)
    const [selectedOptionData, setSelectedOptionData] = useState <ISelectedOptionData> ({
      size:'30',
      dough:'Классическое'
    })

    useEffect(()=>{
      onOptionSelected(selectedOptionData)
    },[selectedOptionData])
    
    const selectSize = (i:number, size:string) =>{
      setSelectedSize(i)
      setSelectedOptionData({
        size,
        dough:optionData.dough[selectedDough]
      })
    }

    const selectdDough = (i:number, dough:string)=>{
      setSelectedDough(i)
      setSelectedOptionData({
        size:optionData.size[selectedSize],
        dough
      })
    }

    return(
        <div className='options_background' >
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