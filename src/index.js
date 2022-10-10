import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
// 1. Import `createTheme`
import { createTheme, NextUIProvider, Text } from "@nextui-org/react"
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
