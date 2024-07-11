import { useFrame, useLoader } from '@react-three/fiber'
import React, { useEffect, useRef, useState } from 'react'
import { Box3, MathUtils } from 'three'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'
import { IndividualPiece } from './IndividualPiece'
import { OrthographicCamera } from '@react-three/drei'

export const Pieces = () => {
  const gltf = useLoader(GLTFLoader, '../BusterSwordModeladoEnd.glb')
  const [positions, setPositions] = useState([])
  const boundingBoxes = []
  gltf.scene.children.forEach((item, index) => {
    boundingBoxes.push(item.geometry.boundingBox)
  })
  console.log(boundingBoxes)
  useEffect(() => {
    if (gltf && gltf.scene) {
      const positionsArray = findHeight(gltf.scene.children)
      setPositions(positionsArray)
    }
  }, [gltf])

  return (
    <>
      <directionalLight position={[0, 0.3, -0.2]} intensity={1} />

      {positions.length > 0 && (
        <group position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.1}>
          {gltf.scene.children.map((child, index, arr) => {
            return (
              <IndividualPiece
                object={child}
                position={positions[index]}
                key={child.userData.name}
              />
            )
          })}
        </group>
      )}
    </>
  )
}

const findHeight = (arr) => {
  let height = -10
  const heightArray = []
  const separationUnit = 0.5
  //array de children con su boumding box
  //tenemos que encontrar el lado mas largo que va a estar longitudinalmente
  //el segundo lado mas largo es el que controla la y, porque lo  hemos puesto verticalmente
  //tenemos que encontrar el segundo lado mas largo y modificar ese.
  // luego podemos simplemente aumentar una variable y, 0 > prev.geometry.boundingBox.max.segundoLadoMasLargo + current.geometry.boundingBox.max.segundoLadoMasLargo > "" > ""
  arr.forEach((child, index) => {
    child.geometry.center()
    const boundingBox = new Box3().setFromObject(child)

    const { min, max } = boundingBox
    const xSpace = max.x - min.x
    const ySpace = max.y - min.y
    const zSpace = max.z - min.z
    console.log('heightArray =>', heightArray, index)
    console.log('separationCount =>', separationUnit)
    console.log('height =>', height)
    // let prev = index !== 0 && index - 1
    if (heightArray.length === 0) {
      heightArray.push([0, height, 0])
    } else if (child.userData.name !== 'Filo_low') {
      if (xSpace >= ySpace && xSpace >= zSpace) {
        if (ySpace >= zSpace) {
          heightArray.push([0, height + ySpace + separationUnit, 0])
          height = height + ySpace + separationUnit
        } else {
          heightArray.push([0, height + ySpace + separationUnit, 0])
          height = height + ySpace + separationUnit
        }
      } else if (ySpace >= xSpace && ySpace >= zSpace) {
        if (xSpace >= zSpace) {
          heightArray.push([0, height + xSpace + separationUnit, 0])
          height = height + xSpace + separationUnit
        } else {
          heightArray.push([0, height + zSpace + separationUnit, 0])
          height = height + zSpace + separationUnit
        }
      } else if (zSpace >= ySpace && zSpace >= xSpace) {
        console.log(index, 'z mas grande')

        if (ySpace >= xSpace) {
          console.log(index, 'y mas grande')

          heightArray.push([0, height + ySpace + separationUnit, 0])
          height = height + ySpace + separationUnit
        } else {
          console.log(index, 'x mas grande')

          heightArray.push([0, height + xSpace + separationUnit, 0])
          height = height + xSpace + separationUnit
        }
      }
    } else {
      heightArray.push([0, height + ySpace + 0.5 + separationUnit, 0])
      height = height + ySpace + 1.5 + separationUnit
    }
  })

  return heightArray
}
