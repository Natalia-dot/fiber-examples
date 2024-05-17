import { Canvas } from '@react-three/fiber';
import { Outlet } from 'react-router-dom';
import { Overlay } from './Components/Main/Overlay';
import { SparkleBackground } from './Components/Main/Sparkles';

export const App = () => {
  return (
    <>
      <Overlay />
      <Canvas>
        <SparkleBackground />
        <Outlet />
      </Canvas>
    </>
  );
};
