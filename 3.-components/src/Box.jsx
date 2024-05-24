import { useFrame } from '@react-three/fiber'
import { useRef, useState } from 'react'
import { MathUtils, MeshNormalMaterial } from 'three'

export const Box = (props) => {
  let ref = useRef()
  //when in need of using an item's properties, we usually make use of useRef() to access inside contents, details, etc.
  //It;s important to use since modifying a ref's attribute will NOT TRIGGER RE-RENDERS!!!
  const [hover, setHover] = useState(false)

  useFrame(
    (state, delta) =>
      (ref.current.rotation.x = hover
        ? MathUtils.lerp(ref.current.rotation.x, Math.PI * 1, 0.1)
        : MathUtils.lerp(ref.current.rotation.x, 0, 0.1))
  )
  return (
    <mesh
      ref={ref}
      {...props}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}>
      <boxGeometry />
      <meshBasicMaterial wireframe color={'red'} />
    </mesh>
  )
}
