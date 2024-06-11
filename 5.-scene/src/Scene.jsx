import React, { useRef, useEffect } from 'react'
import { useLoader, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import * as THREE from 'three'

//I tried to do it extending the class, but still didn't work, so we are just gonna make an instance to have the possibility to
//actually manipulate it.
// extend({ DirectionalLightHelper: THREE.DirectionalLightHelper })

export const Scene = () => {
  const gltf = useLoader(GLTFLoader, '/models/VirtualCity.glb')

  const directionalLightRef = useRef()
  const directionalLightHelperRef = useRef()
  //we need the refs to change the data dynamically.
  //First off, we will not set the helper anywheere. The strategy is to only set the helper once the
  //light is certainly rendered.

  useEffect(() => {
    if (directionalLightRef.current) {
      directionalLightHelperRef.current = new THREE.DirectionalLightHelper(
        directionalLightRef.current,
        1
      )
      directionalLightRef.current.add(directionalLightHelperRef.current)
    }
    //just like we do scene.add(mesh) in three, we are adding the helper as a child to the directional light after
    //creating the helper with the directional light ref.

    return () => {
      if (directionalLightHelperRef.current) {
        directionalLightRef.current.remove(directionalLightHelperRef.current)
        //here we are disposing of the helper whenever the component unmounts. Because we didn't add it as jsx,
        //it is trwated as an instance of a three component and we have to manually manage the disposal. For jsx, react
        //and fiber are already in charge of that.
      }
    }
  }, [])

  useFrame((state, delta) => {
    if (directionalLightHelperRef.current) {
      directionalLightHelperRef.current.update()
    }
  })
  //here we update the helper whenever itself changes.

  return (
    <>
      <OrbitControls
        target={[0, 1.9, -9]}
        enablePan={false}
        enableZoom={false}
        enableRotate={false}
        dampingFactor={0.05}
        enableDamping
        autoRotate
        autoRotateSpeed={0.2}
      />
      {/* <axesHelper position={[0, 1, 0]} /> */}

      <directionalLight
        ref={directionalLightRef}
        castShadow
        position={[0, 5, -3]}
        intensity={1}
        target-position={[0, 0, -9]}
      />

      <hemisphereLight args={['#ceb0b0', '#202020', 1]} />

      <primitive
        object={gltf.scene}
        position={[0, 0, -7]}
        scale={0.5}
        receiveShadow
        castShadow
      />
    </>
  )
}
