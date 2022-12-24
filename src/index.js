import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import Drag from './DragDrop/Drag';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    {/* <App /> */}
    <Drag />
  </div>
);