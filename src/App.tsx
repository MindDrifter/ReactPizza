import React from 'react';

import Header from './components/Header/Header';
import Catalog from './components/Catalog/Catalog';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import './App.scss';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header></Header>
        <Catalog></Catalog>
      </div>
    </Provider>
  );
}

export default App;
