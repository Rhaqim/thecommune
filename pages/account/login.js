import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

import { FaGoogle } from "react-icons/fa";

const providers = [
    {
        name: 'google',
        Icon: FaGoogle,
    }
]

const Login = () => {
    const { data: session, status } = useSession()
    const { push } = useRouter()

    const handleOAuthSignIn =  (provider) => {
        signIn(provider)
    }

    if (status === 'loading') {
        return <div>Loading...</div>
    }

    if (session) {
        setTimeout(() => {
            push('/account/dashboard')
        }, 1000)
        return (
            <div>
                <p>You are logged in. {session.user.email}</p>
            </div>
        )
    }

    return (
        <div className='max-w[1240px] justify-center mt-[5rem] items-center text-center py-4'>

            <div className='flex flex-col items-center justify-center bg-white rounded-md mx-[22rem] h-[30rem] text-black'>
                <h1 className='text-3xl font-bold'>Login</h1>
                <p className='text-xl'>Login to your account</p>

                <div className='flex flex-col items-center justify-center mt-[4rem] py-10  shadow-lg'>
                    {providers.map(({ name, Icon }) => (
                        <div key={name}>
                            <button className='flex space-x-2 mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-[10rem] rounded-full items-center' onClick={() => handleOAuthSignIn(name)}>
                                <Icon className='' size={25} />
                                <h1 className='text-xl'>{name}</h1>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Login