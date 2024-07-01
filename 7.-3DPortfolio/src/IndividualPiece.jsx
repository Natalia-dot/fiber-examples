import { useFrame } from '@react-three/fiber'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { MathUtils, Vector3 } from 'three'
import { degToRad } from 'three/src/math/MathUtils.js'

export const IndividualPiece = (props) => {
  const [active, setActive] = useState(false)
  const ref = useRef()
  const [targetRotation, setTargetRotation] = useState([0, 0, 0])

  useEffect(() => {
    if (ref.current) {
      const rotation = bestShowcasePosition(ref)
      setTargetRotation(rotation)
      ref.current.rotation.set(...rotation)
    }
  }, [ref])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.position.z = active
        ? MathUtils.lerp(ref.current.position.z, -2, 0.2)
        : MathUtils.lerp(ref.current.position.z, 0, 0.3)
    }
  })

  return (
    <primitive
      ref={ref}
      {...props}
      onClick={(e) => [setActive(!active), console.log(ref)]}
      rotation={targetRotation}
    />
  )
}

const bestShowcasePosition = (ref) => {
  if (!ref.current) return [0, 0, 0]

  ref.current.geometry.computeBoundingBox()
  const boundingBox = ref.current.geometry.boundingBox
  const { min, max } = boundingBox
  const xSpace = max.x - min.x
  const ySpace = max.y - min.y
  const zSpace = max.z - min.z

  let targetRotation = [0, 0, 0]

  if (xSpace >= ySpace && xSpace >= zSpace) {
    if (ySpace >= zSpace) {
      targetRotation = [0, 0, 0] // No rotation needed
    } else {
      targetRotation = [degToRad(90), 0, 0] // Rotate around X to swap Y and Z
    }
  } else if (ySpace >= xSpace && ySpace >= zSpace) {
    if (xSpace >= zSpace) {
      targetRotation = [0, 0, degToRad(90)] // Rotate around Z to swap X and Y
    } else {
      targetRotation = [degToRad(90), 0, degToRad(90)] // Rotate around X and Z
    }
  } else if (zSpace >= xSpace && zSpace >= ySpace) {
    if (xSpace >= ySpace) {
      targetRotation = [0, degToRad(90), 0] // Rotate around Y to swap X and Z
    } else {
      targetRotation = [degToRad(90), degToRad(90), 0] // Rotate around X and Y
    }
  }

  return targetRotation
}
