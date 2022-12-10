import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ShoppingList from './components/ShoppingList';
import Counter from './components/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {/* <Counter /> */}
    {/* <ShoppingList /> */}
    <App />
  </div>
  // <App />
);
