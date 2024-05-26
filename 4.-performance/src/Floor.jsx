import { DoubleSide } from 'three'

export const Floor = (props) => {
  return (
    <mesh {...props} receiveShadow>
      <planeGeometry args={[3, 3]} />
      <meshStandardMaterial color={'#C2944D'} side={DoubleSide} />
      {/* doubleside is needed so the plane is seen from both above and below */}
    </mesh>
  )
}
