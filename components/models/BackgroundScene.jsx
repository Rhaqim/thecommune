import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const BackgroundScene = () => {
  return (
    <Canvas>
      <Object />
    </Canvas>
  );
};

export default BackgroundScene;

function Object(props) {
  const myRef = useRef();
  useFrame(() => {
    if (myRef.current) {
      myRef.current.rotation.y += 0.01;
    }
  });
  return (
    <mesh 
    ref={myRef}
    onPointerEnter={e => console.log(e)}
    position={[0, 0, 0]}
    >
      <boxBufferGeometry attach="geometry" args={[1, 2, 3]} />
      <meshBasicMaterial attach="material" color="white" />
    </mesh>
  );
}
