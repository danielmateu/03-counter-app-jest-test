import React from 'react'
import ReactDOM from 'react-dom/client'
import { COunterApp } from './COunterApp'
import { FirstApp } from './FirstApp'
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirstApp 
      title = 'Hola Mundo!'
    />

    {/* <COunterApp
      value = {10}
    /> */}
  </React.StrictMode>
)
