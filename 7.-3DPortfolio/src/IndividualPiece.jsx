import { useFrame } from '@react-three/fiber'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { MathUtils, Vector3 } from 'three'
import { degToRad } from 'three/src/math/MathUtils.js'

export const IndividualPiece = (props) => {
  const [active, setActive] = useState(false)
  const ref = useRef()
  const { $prev: prev } = props
  const [targetRotation, setTargetRotation] = useState([0, 0, 0])
  const [targetPosition, setTargetPosition] = useState(props.position)

  useEffect(() => {
    if (ref.current) {
      const targetRotation = bestShowcasePosition(ref)
      setTargetRotation(targetRotation)
      ref.current.rotation.set(...targetRotation)
      ref.current.geometry.center()
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
      onClick={(e) => [
        setActive(!active),
        e.stopPropagation(),
        console.log(ref)
      ]}
      rotation={targetRotation}
      position={targetPosition}
      // position={''}
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
      targetRotation = [0, 0, 0]
    } else {
      targetRotation = [degToRad(90), 0, 0]
    }
  } else if (ySpace >= xSpace && ySpace >= zSpace) {
    if (xSpace >= zSpace) {
      targetRotation = [0, 0, degToRad(90)]
    } else {
      targetRotation = [degToRad(90), 0, degToRad(90)]
    }
  } else if (zSpace >= xSpace && zSpace >= ySpace) {
    if (xSpace >= ySpace) {
      targetRotation = [degToRad(90), degToRad(90), 0]
    } else {
      targetRotation = [degToRad(90), degToRad(90), 0]
    }
  }

  return targetRotation
}
