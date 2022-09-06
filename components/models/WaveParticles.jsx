import React from "react";
import { Canvas } from "@react-three/fiber";
import { useFrame } from "react-three-fiber";

const WaveParticles = () => {
  return (
    <meshBasicMaterial
      attach="material"
      color="#ffffff"
      opacity={0.5}
      transparent={true}
      depthTest={false}
      depthWrite={false}
      side={THREE.DoubleSide}
    >
      <mesh
        ref={mesh => {
          if (mesh) {
            mesh.scale.set(0.27, 0.27, 0.27);
            mesh.position.set(0, -0.75, 1);
            mesh.rotation.set(0, 1, (180 * Math.PI) / 180);
          }
        }}
      >
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshBasicMaterial
          attach="material"
          color="#ffffff"
          opacity={0.5}
          transparent={true}
          depthTest={false}
          depthWrite={false}
          side={THREE.DoubleSide}
        />
      </mesh>
    </meshBasicMaterial>
  );
};

export default WaveParticles;
