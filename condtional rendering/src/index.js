import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Clock } from './component/Clock';
import { Event } from './component/Event'
import Rendering from './component/Rendering';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Clock />
    <Event />
    <Rendering />
  </React.StrictMode>
);
