import React, { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const WaveParticles = (props) => {
  const [particles, setParticles] = useState([]);
  const [count, setCount] = useState(0);

  return (
    <Canvas
      camera={{ position: [0, 0, 3.5] }}
      {...props}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <pointLight position={[-10, -10, -10]} />
      <pointLight position={[0, 0, 0]} />
      <pointLight position={[-10, 10, -10]} />
        <mesh
          position={{ x: 0, y: 0, z: 0 }}
          geometry={new THREE.BufferGeometry(0.1, 0.1, 0.1)}
          material={new THREE.MeshPhongMaterial({ color: "ffffff" })}
        />
    </Canvas>
  );
};

export default WaveParticles;
