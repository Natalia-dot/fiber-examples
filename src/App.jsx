import { Canvas, extend } from "@react-three/fiber";
import { SparkleBackground } from "./Components/Main/Sparkles";
import { Scroll, ScrollControls } from "@react-three/drei";
import * as THREE from "three"
extend(THREE)


export const App = () => {
  return (
<>
{/* <Canvas> */}
     {/* <SparkleBackground/> */}
     <ScrollControls damping={1} pages={3}>
     <Scroll html>
              <h1 style={{ position: 'absolute', top: '60vh', left: '10vw', color: 'white' }}>This</h1>
              <h1 style={{ position: 'absolute', top: '120vh', left: '25vw', color: 'white' }}>is</h1>
              <h1 style={{ position: 'absolute', top: '180vh', color: 'white', right: "-75vw"}}>Natalia</h1>
          </Scroll>
          </ScrollControls>
      {/* </Canvas> */}


  
</>
);
}
