import React, { useEffect, useRef, useState } from 'react';
import './Header.scss'

import { Ttags, IHeaderProps, TSort} from '../../interfaces';

import {useDispatch} from 'react-redux'
import { sortPizzas } from '../../redux/slices/pizzaSlice';


function Header({onPizzaTypeSelected}:IHeaderProps) {

  const dispatch = useDispatch()
  
  // #DOTO
  const sortType:Array<[string, TSort]>  = [
    ['Цене', 'price'],
    ['Названию','abc'], 
    ['Популярности', 'popular'],
  ]
  const pizzaTypes:Array<[string, Ttags]> = [
    ['Все', 'all'],
    ['Мясная', 'meat'],
    ['Сырная','cheese'],
    ['Острая', 'hot']
  ]
  
  const [sortTypesOpened, setSortTypesOpend] = useState(false)
  const [selectedSortType, setSelectedSortType] = useState(0)
  const sortTypesRef = useRef<HTMLUListElement>(null)

  const selectSortType = (i:number) =>{
    setSelectedSortType(i)
    setSortTypesOpend(false)
    dispatch(sortPizzas('abc'))
    
  }

  // #TODO тип е
  const checkClickOutside = (e:any)=>{
    if ( !sortTypesRef.current?.contains(e.target) ){
      setSortTypesOpend(false)
    }
  }

  useEffect(()=>{
    document.addEventListener('mousedown', checkClickOutside )
    return ()=>{ document.removeEventListener('mousedown',checkClickOutside) } ;
  }, [])
  

  
  const openSortTypes = ()=>{
    if (!sortTypesOpened){
      setSortTypesOpend(!sortTypesOpened)
      console.log("opened");
    }
   
  }


  return(
    <header className='Header'>
      <div className="logo">Лого</div>
      <ul className='PizzaTypes'>
      {
        pizzaTypes.map(el=>{
          return <li key={el[0]} onClick={()=>{onPizzaTypeSelected (el[1])}}>{el[0]}</li>
        })
      }
      </ul>

      <div className="dropDown" >
      Сортировать по <span className='sortType' onClick={ ()=> openSortTypes()}>{sortType[selectedSortType][0]}</span> 
        <ul ref ={ sortTypesRef } className= {'sortTypes'}> 
        {sortTypesOpened &&
          sortType.map((el, i)=>{
            return <li key={el[0]} className='sortType'  onClick= { ()=>{selectSortType(i)} }>{el[0]}</li>
          })
        }
        </ul>
      </div>
      
    </header>
  )
}

export default Header;