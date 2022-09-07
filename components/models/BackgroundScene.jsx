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

    const [active, setActive] = useState(false)

    useFrame(() => {
        if (myRef.current) {
            myRef.current.rotation.y += 0.01
        }
    })

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e
        // myRef.current.position.x = -(clientX / window.innerWidth) * 2 + 1;
        // myRef.current.position.y = -(clientY / window.innerHeight) * 2 + 1;
        myRef.current.position.x = clientX / window.innerWidth
        myRef.current.position.y = -(clientY / window.innerHeight)
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)
        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    return (
        <mesh ref={myRef} position={[0, 0, 0]}>
            <boxBufferGeometry attach="geometry" args={[1, 2, 3]} />
            <meshBasicMaterial attach="material" color="white" />
        </mesh>
    )
}
