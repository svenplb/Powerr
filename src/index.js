import React from 'react';
import ReactDOM from 'react-dom/client';
// 1. Import `createTheme`
import { createTheme, NextUIProvider, Text } from "@nextui-org/react"
import App from './App';

// 2. Call `createTheme` and pass your custom values
const myDarkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      // brand colors
      background: '#000000',
      text: '#f5f5f5',
      // you can also create your own color
      myDarkColor: '#ff4ecd'
      // ...  more colors
    },
    space: {},
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NextUIProvider theme={myDarkTheme}>
  <App />
</NextUIProvider>
);
