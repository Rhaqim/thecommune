import React from "react";
import { Canvas } from "@react-three/fiber";
import Particles from "./Particles";

const WaveParticles = props => {
  return (
    <Canvas 
    camera={{ position: [0, -2, -3] }}
    {...props}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {/* <mesh position={[0,0,-2]}>
        <boxBufferGeometry attach="geometry" args={[5, 3, 0]} />
        <meshStandardMaterial attach="material" color="white" />
      </mesh> */}
      <Particles />
    </Canvas>
  );
};

export default WaveParticles;
