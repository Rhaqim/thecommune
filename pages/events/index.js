import React from 'react'
import BackgroundScene from '../../components/models/BackgroundScene'
import WaveParticles from '../../components/models/WaveParticles'

const Events = () => {
    return (
        <div>
            <div className='relative mt-[5rem] h-screen'>
                <div className='scene'>
                    {/* <WaveParticles className="bg-transparent" /> */}
                    <BackgroundScene className="bg-transparent" />
                </div>
                <div>
                    <h1 className='text-center text-3xl font-bold text-gray-800'>Events</h1>
                    <p className='text-center text-gray-600'>
                        Earn tokens everytime you attend an event.
                    </p>
                    <p className='text-center text-gray-600'>
                        lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quae, quisquam.
                    </p>
                    <p className='text-center text-gray-600'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quae, quisquam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quae, quisquam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quae, quisquam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quae, quisquam.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quae, quisquam.
                    </p>
                </div>
            </div>
            <div>
                <h1 className='text-center text-3xl font-bold text-gray-800'>Events</h1>
            </div>
        </div>
    )
}

export default Events