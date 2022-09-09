import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Physics, useBox, usePlane } from '@react-three/cannon'

function Mascot() {
    const [ref, api] = useBox(() => ({
        mass: 1,
        args: [1, 1, 1],
        position: [0, 10, 0],
        rotation: [0, 0, 0],
        type: 'Dynamic',
    }))

    return (
        <mesh ref={ref}>
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshStandardMaterial attach="material" color="red" />
        </mesh>
    )
}

function Floor() {
    const [ref] = usePlane(() => ({
        position: [0, -1, 0],
        rotation: [-Math.PI / 2, 0, 0],
        mass: 0,
        type: 'Static',
    }))

    return (
        <mesh ref={ref} scale={100} rotation={[- Math.PI / 2, 0, 0]} receiveShadow>
            <planeBufferGeometry />
            <meshStandardMaterial attach="material" color="white" />
        </mesh>
    )
}

const EventsScene = () => {
    return (
        <Canvas shadows>
            <ambientLight intensity={1} castShadow/>
            <pointLight position={[2, 0, 0]} castShadow/>
            <Physics>
                <Floor />
                <Mascot />
            </Physics>
        </Canvas>
    )
}

export default EventsScene
