import React, { useState, useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/gltfloader";
import { DRACOLoader } from "three/examples/jsm/loaders/dracoloader";
import { useFrame } from "@react-three/fiber";

const External = ({ file }) => {
  const [model, setModel] = useState(null);

  const path = `/models/${file}.glb`;

  useEffect(() => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/draco/");
    const gltfLoader = new GLTFLoader();
    gltfLoader.setDRACOLoader(dracoLoader);
    gltfLoader.load(path, gltf => {
      setModel(gltf.scene);
    });
  }, []);

  useEffect(() => {
    if (model) {
      model.scale.set(0.27, 0.27, 0.27);
      model.position.set(0, -0.75, 1);
      model.rotation.set(0, 1, 180 * Math.PI / 180);
    }
  }, [model]);

  useFrame(() => {
    if (model) {
      model.rotation.y += 0.01;
    }
  }, [model]);

  return (
    <>
      {model && (
        <group>
          <primitive object={model} />
        </group>
      )}
    </>
  );
};

export default External;
