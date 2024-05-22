import { Canvas, useThree, useFrame } from '@react-three/fiber'
import { Vector3 } from 'three'
import { Stats, Environment, Center } from '@react-three/drei'
import Button from './Button'
import './App.css'

const vec = new Vector3()

function Rig() {
  return useFrame(({ camera, mouse }) => {
    // vec.set(mouse.x * 2, 3 + (mouse.y * 2), camera.position.z) this would be a way to have the camera start from above, by
    //adding a fixed "base" value to the camera position   
    vec.set(mouse.x * 2, mouse.y * 2, camera.position.z)
    camera.position.lerp(vec, 0.025)
    camera.lookAt(0, 0, 0)
  })
}

export default function App() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <Environment preset="city" background />
      <Center>
        {[...Array(5).keys()].map((x) =>
          [...Array(3).keys()].map((y) => (
            <Button key={x + y * 5} position={[x * 2.5, y * 2.5, 0]} />
          ))
        )}
      </Center>
      <Rig />
      {//stats is the little square appearing on the top left corner showing fps and such
      }
      <Stats />
    </Canvas>
  )
}