import React, { useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { Physics, useBox, usePlane, useSphere } from '@react-three/cannon'

const baubles = [...Array(4)].map(() => ({
    args: [0.6, 0.6, 1, 1, 1.25][Math.floor(Math.random() * 5)],
    mass: 1,
    angularDamping: 0.2,
    linearDamping: 0.95,
}))

const ballPositions = [
    [1, 5, 2],
    [2, 10, 0],
    [3, 10, 0],
    [4, 15, 0],
    [5, 10, 0],
    [6, 8, 0],
]

function Mascot() {
    const [ref, api] = useBox(() => ({
        mass: 100,
        args: [1, 1, 1],
        position: [0, 10, 0],
        rotation: [0, 0, 0],
        velocity: [0, -9.8, 0],
        type: 'Dynamic',
    }))

    
    // useEffect(
        //     () =>
        //         api.position.subscribe((p) =>
    //             api.applyForce(
        //                 vec
        //                     .set(...p)
        //                     .normalize()
        //                     .multiplyScalar(-props.args * 35)
        //                     .toArray(),
        //                 [0, 0, 0]
        //             )
        //         ),
    //     [api]
    // )
    
    return (
        <mesh ref={ref}>
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
            <meshStandardMaterial attach="material" color="red" />
        </mesh>
    )
}

const Ball = ({ props }) => {
    const [ref, api] = useSphere(() => ({
        ...props,
        // mass: 1,
        // args: [0.5],
        // position: position || [2, 10, 0],
        // rotation: [5, 0, 0],
        // type: 'Dynamic',
    }))
    
    const vec = new THREE.Vector3().setScalar(0.1)
    useEffect(
        () =>
        api.position.subscribe((p) =>
                api.applyForce(
                    vec
                        .set(...p)
                        .normalize()
                        .multiplyScalar(-[0.6, 0.6, 1, 1] * 35)
                        .toArray(),
                    [0, 0, 0]
                )
            ),
        [api]
    )

    return (
        <mesh ref={ref}>
            <sphereBufferGeometry attach="geometry" args={[0.6, 0.6, 1, 1]} />
            <meshStandardMaterial attach="material" color="blue" />
        </mesh>
    )
}

function Floor() {
    const [ref, api] = usePlane(() => ({
        position: [0, -1, 0],
        rotation: [-Math.PI / 2, 0, 0],
        mass: 0,
        type: 'Static',
    }))

    useFrame(({ mouse }) => {
        // api.rotation.set(-Math.PI / 2 - mouse.y * 0.2, 0 + mouse.x * 0.2, 0)
    })
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
                <Ball position={[0, 10, 0]} />
                {baubles.map((props, i) => (
                    <Ball key={i} {...props} />
                ))}
            </Physics>
        </Canvas>
    )
}

export default EventsScene
