import React from 'react'
import WaveParticles from '../../components/models/WaveParticles'

const Events = () => {
    return (
        <div className='wrapper'>
            {/* <div > */}
                <WaveParticles className="bg-canvas" />
            {/* </div> */}
            <div className="wave-particle-content">
                <h1 className="text-3xl font-bold text-center">Events</h1>
                <p className="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Pellentesque euismod, urna eu tincidunt consectetur,
                    nisi nisl aliquam nunc, eget consectetur nisl nunc
                    euismod nisi.
                </p>
            </div>
        </div>
    )
}

export default Events