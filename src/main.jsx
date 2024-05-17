import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { App } from './App'
import { Overlay } from './Components/Main/Overlay'
import { Outlet, RouterProvider } from 'react-router-dom'
import { routes } from './routes/routes'


createRoot(document.getElementById('root')).render(
<>
<RouterProvider router={routes}/>
</>
)  