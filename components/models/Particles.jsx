import React, { useState } from "react";
import * as THREE from "three";

const Particles = props => {
  const parameters = {};
  parameters.count = 500;
  parameters.size = 0.01;
  parameters.radius = 5;
  parameters.branches = 3;
  parameters.spin = 1;
  parameters.randomness = 0.2;
  parameters.randomnessPower = 3;

  let geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(parameters.count * 3);

  for (let i = 0; i < parameters.count; i++) {
    const i3 = i * 3;

    const radius = Math.random() * parameters.radius;
    const spinAngle = radius * parameters.spin;
    const branchAngle =
      ((i % parameters.branches) / parameters.branches) * Math.PI * 2;

    const randomX =
      Math.pow(Math.random(), parameters.randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1) *
      parameters.randomness *
      radius;
    const randomY =
      Math.pow(Math.random(), parameters.randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1) *
      parameters.randomness *
      radius;
    const randomZ =
      Math.pow(Math.random(), parameters.randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1) *
      parameters.randomness *
      radius;

    positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
    positions[i3 + 1] = randomY;
    positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;
  }
  const material = new THREE.PointsMaterial({
    size: parameters.size,
    sizeAttenuation: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexColors: true,
  });

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  return (
    <>
      <mesh geometry={geometry} visible={true} position={[0, 0, 0]}>
        <pointsMaterial
          attach="material"
          size={parameters.size}
          opacity={0.5}
          color={"red"}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          vertexColors={true}
        />
      </mesh>
    </>
  );
};

export default Particles;
