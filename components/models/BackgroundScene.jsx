import React, { useState, useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const BackgroundScene = () => {
    return (
        <Canvas>
            <Object />
        </Canvas>
    )
}

export default BackgroundScene

function Object(props) {
    const { size } = useThree()
    const planeRef = useRef()
    const myRef = useRef()
    const secRef = useRef()

    const [active, setActive] = useState(false)

    useFrame(() => {
        if (myRef.current) {
            myRef.current.rotation.y += 0.05
        }
    })

    // const handleMouseMove = (e) => {
    //     const { clientX, clientY } = e
    //     // myRef.current.position.x = -(clientX / window.innerWidth) * 2 + 1;
    //     // myRef.current.position.y = -(clientY / window.innerHeight) * 2 + 1;
    //     myRef.current.position.x = clientX / window.innerWidth + 0.5
    //     myRef.current.position.y = -(clientY / window.innerHeight)
    // }

    const controls = (e) => {
        if (e.keyCode === 37) {
            // left
            myRef.current.position.x -= 1
        } else if (e.keyCode === 39) {
            // right
            myRef.current.position.x += 1
        } else if (e.keyCode === 38) {
            // up
            myRef.current.position.y += 1
        } else if (e.keyCode === 40) {
            // down
            myRef.current.position.y -= 1
        }
    }

    useEffect(() => {
        let meshBB = new THREE.Box3(
            new THREE.Vector3(),
            new THREE.Vector3()
        ).setFromObject(myRef.current)

        let secBB = new THREE.Box3(
            new THREE.Vector3(),
            new THREE.Vector3()
        ).setFromObject(secRef.current)

        meshBB
            .copy(myRef.current.geometry.boundingBox)
            .applyMatrix4(myRef.current.matrixWorld)

        console.log(
            `The meshBB position is ${meshBB.min.x}, ${meshBB.min.y}, ${meshBB.min.z}`
        )
        console.log(
            `Position of the myRef is ${myRef.current.position.x}, ${myRef.current.position.y}, ${myRef.current.position.z}`
        )

        if (meshBB.intersectsBox(secBB)) {
            console.log('Intersects')
        } else {
            console.log('Does not intersect')
        }
        window.addEventListener('keydown', controls)
    }, [])

    useEffect(() => {
        // window.addEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <>
            <mesh ref={myRef} position={[-2, 0, 0]}>
                <boxBufferGeometry attach="geometry" args={[1, 2, 3]} />
                <meshBasicMaterial attach="material" color="white" />
            </mesh>
            <mesh ref={secRef} position={[2, 0, 0]}>
                <boxBufferGeometry attach="geometry" args={[1, 2, 3]} />
                <meshBasicMaterial attach="material" color="white" />
            </mesh>
            <mesh
                ref={planeRef}
                position={[0, 0, -10]}
                scale={[size.width, size.height, 1]}
            >
                <planeBufferGeometry attach="geometry" args={[3, 3, 3]} />
                <meshBasicMaterial attach="material" color="#A1A1A1" />
            </mesh>
        </>
    )
}
