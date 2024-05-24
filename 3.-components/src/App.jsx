import React from 'react'
import { Box } from './Box'
import { Canvas } from '@react-three/fiber'

export const App = () => {
  return (
    <Canvas camera={{ position: [0, 0, 2] }}>
      <Box rotation={[0, -1, 0]} position={[1, 0, 0]} />
      {
        // the props work to edit the element upon initialization
      }
    </Canvas>
  )
}
