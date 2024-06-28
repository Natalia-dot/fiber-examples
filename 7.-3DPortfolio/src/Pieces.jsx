import { useLoader } from '@react-three/fiber'
import React, { useRef } from 'react'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'

export const Pieces = () => {
  const gltf = useLoader(GLTFLoader, '../BusterSwordModeladoEnd.glb')
  console.log(gltf.scene.children)
  const ref = useRef()
  return <></>
}
