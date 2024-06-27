import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Scene } from './Scene'
import { OrbitControls } from '@react-three/drei'

export const App = () => {
  return (
    <Canvas camera={{ position: [0, 0, -2] }}>
      <OrbitControls />
      <Scene />
    </Canvas>
  )
}
