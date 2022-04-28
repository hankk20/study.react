import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./17_react_redux/App";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import {configureStore} from "@reduxjs/toolkit";
import counter from "./17_react_redux/modules/counter";
import todos from "./17_react_redux/modules/todos";
import {Provider} from "react-redux";
//1. reducer를 먼저 등록
const store = configureStore({
    reducer: {
        counter,
        todos
    }
});

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
