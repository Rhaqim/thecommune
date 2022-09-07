import React, { useState, useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

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

  const [active, setActive] = useState(false);

  useFrame(() => {
    if (myRef.current) {
      myRef.current.rotation.y += 0.01;
    }
  });

  const handleScroll = () => {
    if (window.scrollY >= 10) {
      setActive(true);
    } else {
      setActive(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[]);

  return (
    <mesh 
    ref={myRef}
    scale={active ? 1.5 : 1} 
    onClick={() => setActive(!active)}
    position={[0, 0, 0]}
    >
      <boxBufferGeometry attach="geometry" args={[1, 2, 3]} />
      <meshBasicMaterial attach="material" color="white" />
    </mesh>
  );
}
