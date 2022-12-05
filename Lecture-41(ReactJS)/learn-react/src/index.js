import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Person from './components/Person';
import JsxLearn from './components/JsxLearn';
import Todolist from './components/Todolist';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {/* <Todolist /> */}
    {/* <JsxLearn /> */}
    <Person name="Monu" age="23" color="Orange" />
    <Person name="Kunal" age="18" color="Pink"/>
    <Person name="Prateek" age="21" color="Black"/>
    {/* <App />
    <App />
    <App />
    <App />
    <App /> */}
  </div>
);
