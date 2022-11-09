import React, { useEffect, useRef, useState } from 'react';
import './Header.scss'

import { Ttags, IHeaderProps, TSort} from '../../interfaces';

// import { sortPizzas } from '../../redux/slices/pizzaSlice';


function Header({onPizzaTypeSelected}:IHeaderProps) {

  
  // #DOTO Сделать объектом 
  const sortType:Array<[string, TSort]>  = [
    ['Цене', 'price'],
    ['Названию','title'], 
    ['Популярности', 'popular'],
  ]
  const pizzaTypes:Array<[string, Ttags]> = [
    ['Все', 'all'],
    ['Мясная', 'meat'],
    ['Сырная','cheese'],
    ['Острая', 'hot']
  ]
  
  const [sortTypesOpened, setSortTypesOpend] = useState(false)
  const [selectedSortType, setSelectedSortType] = useState(1)
  const [selectedPizzaType, setSelectedPizzaType] = useState(0)
  const sortTypesRef = useRef<HTMLUListElement>(null)


  const selectSortType = (i:number) =>{
    setSelectedSortType(i)
    setSortTypesOpend(false)
    onPizzaTypeSelected(pizzaTypes[selectedPizzaType][1], sortType[i][1])
    // onPizzaTypeSelected(pizzaTypes[selectedPizzaType][1], sortType[selectedSortType][1])
    //dispatch(sortPizzas('abc'))
  }

  const selectPizzaType = (i:number) =>{
    setSelectedPizzaType(i)
    onPizzaTypeSelected(pizzaTypes[i][1], sortType[selectedSortType][1])
    // onPizzaTypeSelected(pizzaTypes[i][1], sortType[selectedSortType][1])
    //dispatch(sortPizzas('abc'))
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
        pizzaTypes.map((el, i)=>{
          return <li key={el[0]} onClick={()=>{selectPizzaType (i)}}>{el[0]}</li>
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