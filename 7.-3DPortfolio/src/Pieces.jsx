import { useFrame, useLoader } from '@react-three/fiber'
import React, { useRef, useState } from 'react'
import { MathUtils } from 'three'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'
import { IndividualPiece } from './IndividualPiece'
import { OrthographicCamera } from '@react-three/drei'

export const Pieces = () => {
  const gltf = useLoader(GLTFLoader, '../BusterSwordModeladoEnd.glb')

  return (
    <>
      <directionalLight position={[0, 0.3, -0.2]} intensity={1} />

      <group position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.1}>
        {gltf.scene.children.map((child, index, arr) => {
          const prev = arr[index - 1]
          console.log(child)

          return (
            <IndividualPiece
              object={child}
              position={[0, index - 10, 0]}
              key={child.userData.name}
            />
          )
        })}
      </group>
    </>
  )
}
