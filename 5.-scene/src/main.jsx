import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import './index.css'
import { App } from './App'
import { CameraContextProvider } from './context'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CameraContextProvider>
      <App />
    </CameraContextProvider>
  </StrictMode>
)
