import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import { Provider } from 'react-redux'
// import {DayReducer} from 'DayReducer';
import { Main } from "./Main";

//const store = createStore(DayReducer);

ReactDOM.render(
  <React.StrictMode>
    {/*<Provider store = { store }>*/}
      <Main/>
    {/*</Provider>*/}
  </React.StrictMode>,
  document.getElementById('root')
);
