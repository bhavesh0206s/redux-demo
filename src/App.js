import React from 'react';
import {Provider} from 'react-redux'
import './App.css';
import CakeContainer from './components/CakeContainer';
import HookCakeContainer from './components/HookCakeContainer'
import store from './redux/store';
import IceCreamContainer from './components/IceCreamContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer/>
        <IceCreamContainer/>
        <HookCakeContainer/>
      </div>
    </Provider>
  );
}

export default App;
