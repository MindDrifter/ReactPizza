import React, { SyntheticEvent, useEffect, useRef, useState } from 'react';
import './Header.scss'

function Header() {

  const sortType:string[] = ['Цене', 'Названию', 'Популярности']
  const [sortTypesOpened, setSortTypesOpend] = useState(false)
  const [selectedSortType, setSelectedSortType] = useState(0)
  const sortTypesRef = useRef<HTMLUListElement>(null)
  
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
        <li>Все</li>
        <li>Мясная</li>
        <li>Гриль</li>
        <li>Веганская</li>
        <li>Острая</li>
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