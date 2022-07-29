import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// 7.28
import { applyMiddleware, createStore } from 'redux';     // 7.29 applyMiddleware 추가 - 미들웨어 적용하기💖
import rootReducer from './modules';
import { Provider } from 'react-redux';
// 7.29
import Thunk from 'redux-thunk';

// 스토어 만들기 (7.28)
const store = createStore(rootReducer, applyMiddleware(Thunk));   //Thunk 추가 / 미들웨어 추가 💖
 
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* 💚Provider로 감싸주기!💚 */}
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
