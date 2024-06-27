import React from 'react'
import { DoubleSide } from 'three'
import { degToRad } from 'three/src/math/MathUtils.js'

export const Scene = () => {
  return (
    <>
      <mesh rotation={[0, 0, 0]}>
        <planeGeometry />
        <meshBasicMaterial color={'blue'} side={DoubleSide} />
      </mesh>
    </>
  )
}
