import { useRef, useState } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { degToRad } from 'three/src/math/MathUtils.js'

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

    </Canvas>
    </div>
    </>
  )
}

export default App
