import React from 'react'
import { Canvas } from '@react-three/fiber'
import Lights from './Lights'
import External from '../utils/External'

const BaseScene = ({children}) => {
  return (
    <div className='flex justify-end'>
        <Canvas
        shadows={true}
        className='canvas'
        camera={{ position: [0, 0, 3.5] }}
        >
            <Lights />
            <External file='hamburger' />
        </Canvas>
    </div>
  )
}

export default BaseScene