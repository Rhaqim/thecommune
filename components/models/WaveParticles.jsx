import React from "react";
import { Canvas } from "@react-three/fiber";

const WaveParticles = props => {
  return (
    <Canvas camera={{ position: [-6, 7, 7] }} {...props}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <boxBufferGeometry attach="geometry" args={[20, 10, 0]} />
        <meshStandardMaterial attach="material" color="white" />
      </mesh>
    </Canvas>
  );
};

export default WaveParticles;
