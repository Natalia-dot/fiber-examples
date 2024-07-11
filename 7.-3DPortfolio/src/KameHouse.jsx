import { Environment } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'

export const KameHouse = () => {
  const glb = useLoader(GLTFLoader, '../KameHouse.glb')
  return (
    <>
      <primitive object={glb.scene} />
    </>
  )
}
