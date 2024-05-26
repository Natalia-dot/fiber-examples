import React from 'react'

export const Icosahedron = (props) => {
  return (
    <mesh {...props} castShadow>
      <icosahedronGeometry args={[1, 1]} />
    </mesh>
  )
}
