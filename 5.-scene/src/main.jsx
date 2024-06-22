import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import { CameraContextProvider } from './context'
import { Loader } from '@react-three/drei'

createRoot(document.getElementById('root')).render(
  <>
    <StrictMode>
      <CameraContextProvider>
        <App />
      </CameraContextProvider>
    </StrictMode>
  </>
)
