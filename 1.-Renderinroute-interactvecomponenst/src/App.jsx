import { useRef, useState } from 'react'
import './App.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { degToRad } from 'three/src/math/MathUtils.js'
import * as THREE from "three";
import { objectScale } from 'three/examples/jsm/nodes/Nodes.js';

const Cube = (props) => {
const ref = useRef();
/**
 * we use the ref to access directly the object and change the 
 * rotation (in case we have it) directly and change it with the 
 * .current property for the ref without triggering a re render. That is what 
 * useRef is used for: it is a sort of state that can be changed but unlike with a 
 * normal state, it will NOT trigger re-renders, and it will STAY AS THE EDITED REF between
 * them. That way the boxes will re render on each frame as needed but the value for rotation (or whatever
 * value to be changed)
 * Without animations or anything that changes between renders, the ref is useless:
 * we don't have values we need to change on each frame
 */

const [isHovered, setIsHovered] = useState(false)

return(
  <mesh
    {...props}
    ref={ref}
    onPointerOver={(e) => (e.stopPropagation(), setIsHovered(true))}
    //stop Propagation helps with not letting objects over also be affected by the pointer
    onPointerOut={() => setIsHovered(false)}
    rotation={[degToRad(-60), 0, 0]}
    >
      <boxGeometry/>
      <meshStandardMaterial color={isHovered ? 'red' : 'blue'}/>
  </mesh>
)
}





const RotatingCube = (props) => {
  const ref = useRef();
  useFrame((state, delta) => (ref.current.rotation.x += delta))
  return(
    <>
    <mesh
      {...props}
      ref={ref}
    >
      <boxGeometry args={[1,1,1]}/>
      <meshStandardMaterial color={'green'}/>
    </mesh>
    </>
  )
}





const RotatingAndInteractveCube = (props) => {
  const ref = useRef();
  const [isHovered, setIsHovered] = useState(false)
  useFrame((state, delta) => (isHovered ? ref.current.rotation.x -= delta : ref.current.rotation.x += delta))
  
  return(
    <>
      <mesh
        {...props}
        ref={ref}
        onPointerOver={(e) =>(e.stopPropagation(), setIsHovered(true))}
        onPointerOut={(e) => setIsHovered(false)}>
          <boxGeometry/>
          <meshStandardMaterial color={'coral'}/>
      </mesh>
    </>
  )
}




const SoftChange = (props) => {
  const color = new THREE.Color;
  const ref = useRef();
  const [hover, setHover] = useState(false);
  const targetScale = hover ? new THREE.Vector3(1.5, 1.5, 1.5) : new THREE.Vector3(1, 1, 1);
  useFrame((state,delta) => (ref.current.rotation.y += delta, ref.current.material.color.lerp(color.set(hover ? '#fa2720' : 'yellow'), 0.1),  ref.current.scale.lerp(hover ? new THREE.Vector3(1.5, 1.5, 1.5): new THREE.Vector3(1,1,1), 0.1))); //here I could also put the targetScale variable 
  return(
    <>
      <mesh
        {...props}
        ref={ref}
        onPointerOver={(e) => (e.stopPropagation(), setHover(true), console.log(ref))}
        onPointerOut={() => setHover(false)}>
          <boxGeometry/>
          <meshStandardMaterial/>
      </mesh>
    </>
  )
}

const App = () => {
  return (
    <>
    <div id='canvas-container'>
    <Canvas>
      <ambientLight intensity={0.1}/>
      <directionalLight position={[-2, 4, 4]} intensity={1}/>
      <Cube/>
      <Cube position={[-2, 0, 0]}/>
      <Cube position={[2, 0, 0]}/>
      <RotatingCube position={[0, 2, 0]}/>
      <RotatingAndInteractveCube position={[-2, 2, 0]}/>
      <SoftChange position={[2,2,0]}/>
    </Canvas>
    </div>
    </>
  )
}

export default App
