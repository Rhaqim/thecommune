import React, { useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Physics, useBox, usePlane, useCompoundBody } from '@react-three/cannon'

function Floor() {
    const [ref] = usePlane(() => ({
        position: [0, -1, 0],
        rotation: [-Math.PI / 2, 0, 0],
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
            <meshStandardMaterial
                attach="material"
                color="white"
                side={THREE.DoubleSide}
            />
        </mesh>
    )
}

const eyePositions = [
    [1.2, 0, 0],
    [-1.2, 0, 0],
]

const Eyes = ({ position }) => {
    const [color, setColor] = useState('blue')
    const [ref, api] = useCompoundBody(() => ({
        position: position,
        args: [0.5, 0.5, 0.5],
        mass: 0.1,
        type: 'Kinematic',
        shapes: [
            {
                type: 'Sphere',
                args: [0.5],
            },
            {
                type: 'Sphere',
                args: [0.5],
            },
        ],
    }))

    useFrame(({ mouse }) => {
        api.rotation.set(-mouse.y * 0.5, mouse.x, 0)
        window.addEventListener('click', handleClickColorChange)
    })

    const handleClickColorChange = () => {
        if (color === 'blue') {
            setColor('red')
        } else if (color === 'red') {
            setColor('blue')
        }
    }

    return (
        <group ref={ref}>
            <mesh
                position={[0, 0, 0.05]}
                geometry={new THREE.SphereGeometry(0.5, 32, 32)}
                material={
                    new THREE.MeshBasicMaterial({
                        color: 0xffffff,
                        wireframe: false,
                    })
                }
            />
            <mesh
                position={[0, 0, 0.3]}
                geometry={new THREE.SphereGeometry(0.3, 32, 32, 3)}
                material={
                    new THREE.MeshBasicMaterial({
                        color: color,
                        wireframe: false,
                    })
                }
            />
        </group>
    )
}

const EventsScene = () => {
    return (
        <Canvas shadows>
            {/* <color attach="background" args={['black']} /> */}
            <fog attach="fog" args={['white', 10, 50]} />
            <ambientLight intensity={1} />
            <pointLight position={[2, 0, 0]} castShadow />
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
                {eyePositions.map((pos, idx) => (
                    <Eyes key={idx} position={pos} />
                ))}
            </Physics>
        </Canvas>
    )
}

export default EventsScene
