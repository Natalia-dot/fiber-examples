import { useGLTF } from '@react-three/drei'
import { useFrame, useLoader, useThree } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { MathUtils } from 'three'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'

export const FullSword = () => {
  const ref = useRef()
  const three = useThree()
  const gltf = useGLTF('z', true)
  console.log(gltf)
  const [isHovered, setIsHovered] = useState(false)

  useFrame(() => {
    ref.current.position.z = isHovered
      ? MathUtils.lerp(ref.current.position.z, -1, 0.1)
      : MathUtils.lerp(ref.current.position.z, 0, 0.1)

    // ref.current.rotation.y = isHovered
    //   ? MathUtils.lerp(ref.current.rotation.y, 0.2, 0.1)
    //   : MathUtils.lerp(ref.current.rotation.y, 0, 0.1)

    // ref.current.position.y = isHovered
    //   ? MathUtils.lerp(ref.current.position.y, 1, 0.1)
    //   : MathUtils.lerp(ref.current.position.y, 0, 0.1)
  })

  return (
    <primitive
      object={gltf.scene}
      position={[0, 0, 0]}
      ref={ref}
      onPointerOver={(e) => setIsHovered(true)}
      onPointerOut={(e) => setIsHovered(false)}
      scale={0.1}
    />
  )
}
