import React from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Physics, useBox, usePlane } from '@react-three/cannon'

function Mascot() {
    const [ref] = useBox(() => ({
        mass: 100,
        args: [1, 1, 1],
        position: [0, 10, 0],
        rotation: [5, 0, 0],
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
        <mesh
            ref={ref}
            scale={100}
            rotation={[-Math.PI / 2, 0, 0]}
            receiveShadow
        >
            <planeBufferGeometry />
            <meshStandardMaterial attach="material" color="white" />
        </mesh>
    )
}

const EventsScene = () => {
    return (
        <Canvas shadows>
            {/* <color attach="background" args={['black']} /> */}
            <fog attach="fog" args={['white', 10, 50]} />
            {/* <ambientLight intensity={1} castShadow/>
            <pointLight position={[2, 0, 0]} castShadow/> */}
            <ambientLight intensity={0.1} />
            <directionalLight intensity={0.1} castShadow />
            <pointLight
                castShadow
                intensity={3}
                args={[0xff0000, 1, 100]}
                position={[-1, 3, 1]}
            />
            <spotLight
                castShadow
                intensity={1}
                args={['white', 1, 100]}
                position={[-1, 4, -1]}
                penumbra={1}
            />
            <Physics>
                <Floor />
                <Mascot />
            </Physics>
        </Canvas>
    )
}

export default EventsScene
