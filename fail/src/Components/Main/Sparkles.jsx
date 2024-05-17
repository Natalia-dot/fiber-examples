import { Sparkles, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
const geometry = new THREE.BufferGeometry(1,1,1);


export const SparkleBackground = () => {

  return (
    <>
    <Sparkles
color="white"
count={700}
noise={0.4}
opacity={0.7}
size={[4.77828311920166,3.185687780380249,2.5381295680999756,0.3307689428329468,4.597330570220947,2.0054619312286377,0.8826748132705688,0.13443607091903687,3.4379379749298096,1.7515212297439575,0.5459290146827698,1.8151391744613647,1.3285964727401733,3.696742534637451,4.219830513000488,0.013615130446851254,2.427872896194458,1.63425874710083,4.833040237426758,1.2845699787139893,2.060009241104126,1.6911592483520508,3.26279616355896,0.9660135507583618,1.3295243978500366,4.811212062835693,2.2423741817474365,0.5982247591018677,3.354684591293335,2.7986903190612793,1.2383259534835815,4.662698268890381,0.6194167137145996,3.3619256019592285,2.9958128929138184,1.2730177640914917,4.44935417175293,2.5559699535369873,2.918602228164673,4.89879846572876,4.511693000793457,2.588111400604248,3.3698086738586426,3.01875638961792,4.364171028137207,3.155205249786377,3.288414478302002,0.5762941241264343,0.08553546667098999,3.7829701900482178,4.867054462432861,2.0667691230773926,3.5944361686706543,4.551354885101318,3.59564471244812,1.5586639642715454,2.9926023483276367,1.5281102657318115,3.094116687774658,2.56268572807312,4.589291095733643,0.6412275433540344,3.924307346343994,2.1626553535461426,2.547621250152588,0.020229773595929146,1.233237862586975,0.8309895396232605,0.05263691395521164,3.212008237838745,2.8752877712249756,3.1021223068237305,4.149314880371094,4.116452217102051,4.066592216491699,4.884542942047119,0.08181343972682953,1.7107043266296387,4.221218585968018,4.190604209899902,2.73313307762146,2.3936314582824707,4.593100547790527,3.8547863960266113,3.255053997039795,1.1655505895614624,0.8981005549430847,1.8241370916366577,0.23449330031871796,3.3792364597320557,2.4542789459228516,3.7988669872283936,3.3845746517181396,2.583402395248413,2.868154525756836,1.179970622062683,0.45695409178733826,2.655256748199463,2.189207077026367,1.810633897781372]}
speed={0.4}
scale={[4,4,4]}
geometry={geometry}
/>
<OrbitControls enablePan={false} enableRotate={false} enableZoom={false}/>
<PerspectiveCamera
makeDefault
position={[2, 2, 2]}
/>
</>
  )
}
