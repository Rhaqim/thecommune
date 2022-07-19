import React from 'react'

const Lights = (props) => {
  return (
    <mesh {...props}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} castShadow />
        <meshPhongMaterial color={0xffffff} />
    </mesh>
  )
}

export default Lights