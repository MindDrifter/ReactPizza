import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Ttags, IHeaderProps, TSort} from '../../interfaces';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import './Header.scss'

// import { sortPizzas } from '../../redux/slices/pizzaSlice';


function Header({onPizzaTypeSelected}:IHeaderProps) {

  const cart = useSelector((state:RootState)=> state.cart)
  const sortType:{title:string, sortType:TSort}[] =[
    {title:'Цене', sortType:"price"},
    {title:'Названию', sortType:"title"},
    {title:'Популярности', sortType:"popularity"}
  ]
    
  
    
  

  // const sortType:Array<[string, TSort]>  = [
  //   ['Цене', 'price'],
  //   ['Названию','title'], 
  //   ['Популярности', 'popular'],
  // ]
  const pizzaTypes:{title:string, pizzaType:Ttags}[] = [
    {title:'Все', pizzaType:'all'},
    {title:'Мясная', pizzaType:'meat'},
    {title:'Сырная',pizzaType:'cheese'},
    {title:'Острая', pizzaType:'hot'}
  ]
  
  const [sortTypesOpened, setSortTypesOpend] = useState(false)
  const [selectedSortType, setSelectedSortType] = useState(1)
  const [selectedPizzaType, setSelectedPizzaType] = useState(0)
  const sortTypesRef = useRef<HTMLUListElement>(null)


  useEffect(()=>{
    onPizzaTypeSelected(pizzaTypes[selectedPizzaType].pizzaType, sortType[selectedSortType].sortType)
  },[])

  const selectSortType = (i:number) =>{
    setSelectedSortType(i)
    setSortTypesOpend(false)
    onPizzaTypeSelected(pizzaTypes[selectedPizzaType].pizzaType, sortType[i].sortType)
    // onPizzaTypeSelected(pizzaTypes[selectedPizzaType][1], sortType[selectedSortType][1])
    //dispatch(sortPizzas('abc'))
  }

  const selectPizzaType = (i:number) =>{
    setSelectedPizzaType(i)
    onPizzaTypeSelected(pizzaTypes[i].pizzaType, sortType[selectedSortType].sortType)
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
          return <li key={el.title} onClick={()=>{selectPizzaType (i)}}>{el.title}</li>
        })
        
      }
    
      </ul>

      <div className="dropDown" >
      Сортировать по <span className='sortType' onClick={ ()=> openSortTypes()}>{sortType[selectedSortType].title}</span> 
        <ul ref ={ sortTypesRef } className= {'sortTypes'}> 
        {sortTypesOpened &&
          sortType.map((el, i)=>{
            return <li key={el.title} className='sortType'  onClick= { ()=>{selectSortType(i)} }>{el.title}</li>
          })
        }
        </ul>
        
      </div>
      <Link className='navLink' to={'/cart'}>{cart.length > 0? 'В корзине '+cart.length+'шт.' :'Корзина'}</Link>
    </header>
  )
}

export default Header;