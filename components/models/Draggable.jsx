import React, { useState, useEffect, useRef } from "react";
import { useThree, extend } from "@react-three/fiber";
import { DragControls } from "three/examples/jsm/controls/DragControls";

extend({ DragControls });

const Draggable = props => {
  const { camera, gl, scene } = useThree();
  const controlsRef = useRef();
  const grouRef = useRef();
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    setObjects(grouRef.current.children);
  }, []);

  useEffect(() => {
    controlsRef.current.addEventListener("hoveron", () => {
      scene.orbitControls.enabled = false;
    });
    controlsRef.current.addEventListener("hoveroff", () => {
      scene.orbitControls.enabled = true;
    });
  }, [objects]);

  return (
    <group ref={grouRef}>
      <dragControls ref={controlsRef} args={[objects, camera, gl.domElement]} />
      {props.children}
    </group>
  );
};

export default Draggable;
