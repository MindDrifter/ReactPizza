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
import CartButton from './components/ui/CartButton/CartButton';


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
        <div className='Modal_pizza'>  
          <div className="left_side">
            <h1>{modalData?.title}</h1>
            <img src={require("./static/img/"+modalData?.imageUrl)} alt="" />
            <h3>{calcPriceWithSize(selectedOptionData ? selectedOptionData.size : '' , modalData.price)}</h3>
            <CartButton 
            selectedOptionData={selectedOptionData ? selectedOptionData:{size:'',dough:''}} 
            title={modalData?.title} 
            id={modalData.id} 
            price={modalData.price}/>
          </div>

          <div className="right_side">
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa necessitatibus nostrum natus in optio perspiciatis enim, tempore quibusdam. Nam odit similique, eaque omnis molestias eius quos adipisci totam voluptatum provident, earum officiis ipsam qui fugiat excepturi optio impedit velit, necessitatibus ab hic? Saepe nemo illo reiciendis accusantium, mollitia nihil molestiae voluptatem itaque error ratione maxime? Molestiae aspernatur quo vitae, mollitia, delectus, debitis perferendis cumque fugit autem deleniti sint inventore maxime velit repellat perspiciatis ab enim eligendi doloremque assumenda. Modi expedita sequi consectetur a quia natus voluptatibus. Dolorum voluptates eligendi eaque nulla saepe esse ab expedita molestiae quo eveniet quos, earum ex tenetur corrupti soluta facere. Modi iusto laborum officiis voluptates eius quasi saepe veritatis! Quos totam ut possimus quia, numquam consequuntur, neque deleniti voluptatem, odit est amet. Beatae et mollitia voluptates sunt odit reprehenderit maxime quasi corporis? Consequatur cum ex optio ipsam asperiores aliquid ratione, odio non ullam obcaecati totam?</span>
            <OptionSelector
            optionData={{size:modalData?.size, dough:modalData?.dough}}
            onOptionSelected ={(option)=>{setSelectedOptionData(option)}}
            />
            </div>
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
