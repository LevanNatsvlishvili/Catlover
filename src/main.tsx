import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import Routing from '@/routing';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);
