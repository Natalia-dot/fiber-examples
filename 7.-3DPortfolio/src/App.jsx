import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  CameraControls,
  Environment,
  Loader,
  OrbitControls
} from '@react-three/drei'
import { Outlet, useNavigate } from 'react-router-dom'
import { AxesHelper, Euler, Vector3 } from 'three'
import { degToRad } from 'three/src/math/MathUtils.js'
import { useControls } from 'leva'

export const App = () => {
  const navigate = useNavigate()
  const url = window.location.href
  console.log(url)
  return (
    <>
      <Suspense fallback={null} />
      <Canvas
        camera={{
          position: [0, 0, -1],
          rotateX: degToRad(45)
        }}>
        <axesHelper size={10} />

        {!url.includes('kame') ? (
          <Environment preset="apartment" background />
        ) : null}
        <directionalLight position={[-5, -1, -10]} intensity={1} />
        <CameraControls smoothTime={1.5} />
        <Outlet />
      </Canvas>
      <div id="overlay">
        <div>
          <button onClick={(e) => navigate('/sword')}>Sword</button>
          <button onClick={(e) => navigate('/pieces')}>Pieces</button>
          <button onClick={(e) => navigate('/kame')}>Kame House</button>
        </div>
      </div>
      <Loader />
      <Suspense />
    </>
  )
}
