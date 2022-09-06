import React from "react";
import { Canvas } from "@react-three/fiber";

const WaveParticles = props => {
  return (
    <Canvas 
    camera={{ position: [0, -2, 3] }}
    {...props}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <boxBufferGeometry attach="geometry" args={[5, 3, 0]} />
        <meshStandardMaterial attach="material" color="white" />
      </mesh>
    </Canvas>
  );
};

export default WaveParticles;
