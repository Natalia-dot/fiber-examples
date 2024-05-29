import React, { useEffect, useRef } from 'react'
import { Box } from './Box'
import { Canvas, useLoader } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { Floor } from './Floor'
import { degToRad } from 'three/src/math/MathUtils.js'
import { Icosahedron } from './Icosahedron'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'

export const App = () => {
  let texture = useLoader(THREE.TextureLoader, '../public/img/grid.png')
  const gltf = useLoader(GLTFLoader, '/models/Fox.glb')

  // let modelRef = useRef()
  // useEffect(() => {
  //   // Traverse the scene and update the material
  //   gltf.scene.traverse((child) => {
  //     if (child.isMesh) {
  //       child.material = new THREE.MeshStandardMaterial({ color: 'blue' })
  //     }
  //   })
  // }, [gltf])
  //o We have to do this because our 3D model may already have textures applied. We need to access the model's meshes
  //o and transform them to a new material each.
  //o I'm not too sure this is the best way, but for the moment, we will use this.
  //o So far I haven't found the way ;w;

  return (
    <Canvas camera={{ position: [0, 2, 6] }} shadows>
      <Environment
        background
        files={'../public/img/miau.hdr'}
        backgroundBlurriness={0.2}
      />
      <OrbitControls target={[0, 0, 0]} />
      <directionalLight castShadow position={[3, 5, 1]} intensity={0.9} />
      <Floor
        rotation={[-degToRad(90), 0, 0]}
        position={[0, -1, 0]}
        receiveShadow
      />
      <Box rotation={[0, -1, 0]} position={[-1, 0, 0]} castShadow />
      <Icosahedron
        position={[1, 0, 0]}
        material={new THREE.MeshStandardMaterial({ map: texture })}
      />
      <primitive object={gltf.scene} position={[0, 2, 0]} scale={0.02} />

      {
        // the props work to edit the element upon initialization
      }
    </Canvas>
  )
}

//I have learnt about useLayoutEffect.
// Use layout effect basically works for any almost immediate change or checkups right after the dom is established.
// Because these checks may take just a bit longer than how long it takes the browser to render the elements, the items
// to change are in their initial position or have the initial value before the main checks have been done and edit them.
// So useLayoutEffect is run synchronously right after the dom is stablished instead of after the browser rendering, which
// prevents the flickering of items. Either way, one should aim to always use useEffect since this is more of an older
// approach for compatibility (componentDidMount, update...)

//r3f-perf is a library offering better and more extense performance stats viewing.
