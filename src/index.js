import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/index'
import {BrowserRouter} from 'react-router-dom'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
     <App />
   </BrowserRouter>
  </React.StrictMode>
);

// I get sertificate for completed course. Date:27.01.2024 Boburshoh Khusanov
