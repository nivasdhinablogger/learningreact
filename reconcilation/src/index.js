import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ToDoList from './ToDoList';
import ToDoList2 from './ToDoList2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToDoList />
    <ToDoList2 /> 
  </React.StrictMode>
);
