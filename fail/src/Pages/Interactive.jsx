import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';

export const InteractivePage = () => {
  console.log("Hola");
  return (
    <>
      <ambientLight intensity={0.1} />
      <directionalLight color="red" position={[0, 0, 5]} />
      <camera args={[{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 5]}]}/>
      <Suspense fallback={null}>
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      </Suspense>
      <OrbitControls />
      </>
  );
};
