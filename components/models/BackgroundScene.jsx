import React, { useState, useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'

const BackgroundScene = () => {
    return (
        <Canvas>
            <Object />
        </Canvas>
    )
}

export default BackgroundScene

function Object(props) {
    const myRef = useRef()
    const secRef = useRef()

    const [active, setActive] = useState(false)

    // useFrame(() => {
    //     if (myRef.current) {
    //         myRef.current.rotation.y += 0.01
    //     }
    // })

    // const handleMouseMove = (e) => {
    //     const { clientX, clientY } = e
    //     // myRef.current.position.x = -(clientX / window.innerWidth) * 2 + 1;
    //     // myRef.current.position.y = -(clientY / window.innerHeight) * 2 + 1;
    //     myRef.current.position.x = clientX / window.innerWidth + 0.5
    //     myRef.current.position.y = -(clientY / window.innerHeight)
    // }

    // const handleCollison = () => {
    //     let meshBB = new THREE.Box3(
    //         new THREE.Vector3(),
    //         new THREE.Vector3()
    //     ).setFromObject(myRef.current)
    // }

    const controls = (e) => {
        if (e.keyCode === 37) {
            myRef.current.position.x -= 1
        } else if (e.keyCode === 39) {
            myRef.current.position.x += 1
        } else if (e.keyCode === 38) {
            myRef.current.position.y += 1
        } else if (e.keyCode === 40) {
            myRef.current.position.y -= 1
        }
    }

    useEffect(() => {
        // window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('keydown', controls)
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
        </>
    )
}
