import React from 'react'
import { Canvas } from '@react-three/fiber'

export const App = () => {
  return (
    <Canvas camera={{ position: [0, 1, -2] }}>
      <directionalLight intensity={1} position={[1, 2, -4]} />
      <mesh>
        <boxGeometry />
        <meshStandardMaterial color={'blue'} />
      </mesh>
    </Canvas>
  )
}
