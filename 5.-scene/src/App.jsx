import React, { useRef, useEffect, Suspense } from 'react'
import {
  Canvas,
  useLoader,
  useFrame,
  extend,
  useThree
} from '@react-three/fiber'
import { Loader, OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'
import { OVerlay } from './OVerlay'
import { useCamContext } from './context'
import { Scene } from './Scene'

export const App = () => {
  let { camPosition } = useCamContext()
  return (
    <>
      <Loader />
      <Canvas camera={{ position: camPosition }} shadows>
        <Suspense fallback={null}>
          <CameraRig camPosition={camPosition} />
          <fogExp2
            attach={'fog'}
            args={['#361d1d', 0.06]}
            position={[0, 0, 0]}
          />
          <Scene />
        </Suspense>
      </Canvas>
      <OVerlay />
    </>
  )
}

const CameraRig = ({ camPosition }) => {
  useFrame((state) => {
    const targetPosition = new THREE.Vector3(...camPosition)
    state.camera.position.lerp(targetPosition, 0.01)
    state.camera.lookAt(0, 1.9, -9)
  })
}

const Foo = () => {
  let state = useThree()
  console.log(state)
}
