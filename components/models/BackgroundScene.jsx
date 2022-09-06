import React from "react";
import { Canvas } from "@react-three/fiber";

const BackgroundScene = () => {
  return (
    <Canvas
      className="bg-canvas"
      camera={{ position: [0, 0, 3.5] }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 1);
      }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <pointLight position={[-10, -10, -10]} />
      <pointLight position={[0, 0, 0]} />
      <pointLight position={[-10, 10, -10]} />
      <pointLight position={[10, -10, 10]} />

      <useFrame>
        {({ camera, gl }) => {
          gl.setClearColor(0x000000, 1);
          camera.position.z = 3.5;
        }}
      </useFrame>
    </Canvas>
  );
};

export default BackgroundScene;
