import React, { useEffect, useState } from 'react';

import Header from './components/Header/Header';
import Catalog from './components/Catalog/Catalog';
import {useSelector, useDispatch } from 'react-redux';
import { RootState } from './redux/store';

import './App.scss';
import { fetchPiazzas, fetchPiazzasByCriteria } from './redux/slices/pizzaSlice';
import { IPizzaData, ISelectedOptionData, Ttags } from './interfaces';
import Modal from './components/ui/Modal/Modal';
import OptionSelector from './components/ui/OptionSelector/OptionSelector';
import { calcPriceWithSize } from './utils/calcPriceWithSize';


function App() {
  //const [sortType, setSortType] = useState<'all'|'meat' | 'hot' | 'cheese'>()
  const dispatch = useDispatch()<any>
  const [modalOpened, setModalOpened] = useState(false)
  const [modalData, setModalData] = useState<IPizzaData>()
  const [selectedOptionData, setSelectedOptionData] = useState<ISelectedOptionData>()

  useEffect(()=>{
    dispatch (fetchPiazzas())
  },[])

 
  
  const pizzaData = useSelector ((state:RootState)=> state.pizza)

  const openModal = (id:number)=>{
    setModalData(pizzaData.data.find(el=>el.id===id))
    setModalOpened(true)
    
  } 

  return (
      <div className="App" >
        {
            modalData &&
        <Modal 
        opened={modalOpened}
        onCloseModal={() => { setModalOpened(false); } }>  
          <div>  
            <h1>{modalData?.title}</h1>
            <h3>{calcPriceWithSize(selectedOptionData ? selectedOptionData.size : '' , modalData.price)}</h3>
            <img src={require("./static/img/"+modalData?.imageUrl)} alt="" />
            
            <OptionSelector
            optionData={{size:modalData?.size, dough:modalData?.dough}}
            onOptionSelected ={(option)=>{setSelectedOptionData(option)}}
            />
          </div>
        </Modal>
        }
        <Header 
        onPizzaTypeSelected={(tag, sortType)=>{dispatch(fetchPiazzasByCriteria({tag, sortType}))}}
        />
        <Catalog  
        data={pizzaData.data} 
        loading={pizzaData.loading} 
        onModalOpened ={(id:number)=>{openModal(id)}}/>

        
      </div>
  );
}

export default App;
