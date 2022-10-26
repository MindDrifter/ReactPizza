import React, { SyntheticEvent, useEffect, useRef, useState } from 'react';
import './Header.scss'

import {useSelector} from 'react-redux'
import { RootState } from '../../redux/store';

import {useDispatch} from 'react-redux'

import {selectTag} from '../../redux/slices/sortTagSlice'
import { Ttags } from '../../interfaces';

function Header() {

  const dispatch = useDispatch()
  const selectedSortTypeTest = useSelector((state:RootState)=> state.sortTag)

  // #DOTO
  const sortType:string[] = ['Цене', 'Названию', 'Популярности']
  const pizzaTypes:Array<[string, Ttags]> = [
    ['Все', {tag:'all'}],
    ['Мясная', {tag:'meat'}],
    ['Сырная',{tag:'cheese'}],
    ['Острая', {tag:'hot'}]
  ]
  // console.log(pizzaTypes);
  
  const [sortTypesOpened, setSortTypesOpend] = useState(false)
  const [selectedSortType, setSelectedSortType] = useState(0)
  const sortTypesRef = useRef<HTMLUListElement>(null)

  
  const sdf = (e:Ttags)=>{
    dispatch(selectTag({tag:e.tag}))
     console.log(selectedSortTypeTest);
  }

  const selectSortType = (i:number) =>{
    setSelectedSortType(i)
    setSortTypesOpend(false)
    
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
          // console.log(el);
          return <li onClick={()=>{sdf({tag:el[1].tag})}}>{el[0]}</li>
          
        })
      }
      </ul>

      <div className="dropDown" >
      Сортировать по <span className='sortType' onClick={ ()=> {openSortTypes()}}>{sortType[selectedSortType]}</span> 
      
        <ul ref ={ sortTypesRef } className= {'sortTypes'}> 
        {sortTypesOpened &&
          sortType.map((el, i)=>{
            return <li key={el} className='sortType'  onClick= { ()=>{selectSortType(i)} }>{el}</li>
          })
        }
        </ul>
      </div>
      
    </header>
  )
}

export default Header;