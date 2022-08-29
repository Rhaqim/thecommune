import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

import { FaGoogle } from "react-icons/fa";

const providers = [
    {
        Name: 'Google',
        Icon: FaGoogle,
    }
]

const Login = () => {
    const { data: session, status } = useSession()
    const { push } = useRouter()

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

            <div className='flex flex-col items-center justify-center bg-white rounded-md mx-[22rem] h-40 text-black'>
                <h1 className='text-3xl font-bold'>Login</h1>
                <p className='text-xl'>Login to your account</p>

                <div className='flex flex-col items-center justify-center mt-[2rem]'>
                {providers.map(({ name, Icon }) => (
                    <>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-[10rem] rounded-full' onClick={() => signIn(name)}>
                            <Icon className='mx-2' size={25} />
                            {name}
                        </button>
                    </>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Login