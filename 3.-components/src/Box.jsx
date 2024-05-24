import { MeshNormalMaterial } from 'three'

export const Box = (props) => {
  return (
    <mesh {...props}>
      <boxGeometry />
      <meshBasicMaterial wireframe color={'red'} />
    </mesh>
  )
}
