import { useMemo, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export const Box = (props) => {
  const ref = useRef()
  const box = useMemo(() => new THREE.BoxGeometry(), [])
  const torus = useMemo(() => new THREE.TorusGeometry(), [])

  const [shape, changeShape] = useState(true)

  return (
    <mesh
      {...props}
      ref={ref}
      onPointerDown={() => changeShape(!shape)}
      geometry={shape ? box : torus}>
      <meshStandardMaterial color={'red'} />
    </mesh>
  )
}

/**
 * Here we can see that we have created several instances for the geometries. This is necessary for example when
 * you want to switch between "jsx elements", like geometries or materials upon meeting certain criteria.
 * When we have the jsx elements, they will always be the same object between renders, with a unique uuid; however,
 * with an instance, a new geometry is created every time, and that is not optimal for performance. That is why we use
 * useMemo, to always mantain the same object between renders (have the same uuid!!);
 */
