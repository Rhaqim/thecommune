import React from 'react'
import { useThree, extend } from "@react-three/fiber"
import{ OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })

const Controls = () => {
  const { camera, gl } = useThree()
  return (
    <orbitControls attach={"orbitControls"} args={[camera, gl.domElement]} {...props} />
  )
}

export default Controls