import { useLoader } from '@react-three/fiber'
import React, { useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'

export const Pieces = () => {
  const gltf = useLoader(GLTFLoader, '../BusterSwordModeladoEnd.glb')
  const ref = useRef()
  return (
    <>
      <group scale={0.1} position={[0, 0, 0]} rotation={[1.5, 0, 0]}>
        {gltf.scene.children.map((child, index, arr) => {
          const prev = arr[index - 1]
          console.log(child)

          return (
            <>
              <primitive
                object={child}
                position={[index, 0.5, 0]}
                key={child.userData.name}
              />
            </>
          )
        })}
      </group>
    </>
  )
}

const findYPosition = (prev) => {
  if ((prev = undefined)) {
    return 10
  } else {
    return prev?.geometry?.boundingBox?.y * 2
  }
}
