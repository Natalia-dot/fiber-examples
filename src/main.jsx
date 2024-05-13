import React from 'react'
import ReactDOM from 'react-dom/client'

import * as THREE from 'three'
import "./main.css"
import {App} from './App.jsx'
import { Overlay } from './Components/Main/Overlay.jsx'
import { extend, createRoot, events } from '@react-three/fiber'

extend(THREE)

const root = createRoot(document.getElementById('root'));
root.configure({events});
window.addEventListener('resize',()=>{
  root.configure({size: {width: window.innerWidth, height: window.innerHeight}})
})

window.dispatchEvent(new Event('resize'));


root.render(
  <React.StrictMode>
    <App/>
    {/* <Overlay/> */}
  </React.StrictMode>,
)
