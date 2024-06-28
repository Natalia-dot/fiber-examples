import React, { Suspense, useState } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Loader, OrbitControls, useGLTF } from '@react-three/drei'

import { useControls } from 'leva'
import { Outlet, useNavigate } from 'react-router-dom'

export const App = () => {
  const navigate = useNavigate()
  return (
    <>
      <Suspense fallback={null} />
      <Canvas camera={{ position: [0, 0, -2] }}>
        {/* <OrbitControls /> */}
        <directionalLight position={[-5, -1, -10]} intensity={1} />
        <Outlet />
      </Canvas>
      <div id="overlay">
        <div>
          <button onClick={(e) => navigate('/sword')}>Sword</button>
          <button onClick={(e) => navigate('/pieces')}>Pieces</button>
        </div>
      </div>
      <Loader />
      <Suspense />
    </>
  )
}
