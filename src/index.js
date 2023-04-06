import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.styles.css';
import reportWebVitals from './reportWebVitals';
import Home from './template/Home';

function onloadf() {
 window.addEventListener("load", () => {
  console.log('pagina carregada')
 })
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home onload={onloadf} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
