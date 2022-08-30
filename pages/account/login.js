import React, { useState } from 'react'
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
    const [email, setEmail] = useState('')

    const handleOAuthSignIn =  (provider) => {
        signIn(provider)
    }

    const handleSubmit =  (e) => {
        e.preventDefault()
        if (!email) return false
        signIn('email',{ email, redirect: false })
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
                <div />

                <form className='flex flex-col items-center justify-center'>
                    <div className='flex flex-col items-center justify-center'>
                        <label className='text-xl'>Email</label>
                        <input type='email' className='border border-gray-300 rounded-md px-[2rem]' onChange={(e) => setEmail(e.target.value)} />
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md' onClick={() => handleSubmit()}>Login</button>
                    </div>
                </form>

                <div className='flex flex-col items-center justify-center mt-[4rem] py-10  shadow-lg'>
                    {providers.map(({ name, Icon }) => (
                        <div key={name}>
                            <button className='flex space-x-2 mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-[10rem] rounded-full items-center' onClick={() => handleOAuthSignIn(name)}>
                                <Icon className='' size={25} />
                                <h1 className='text-xl uppercase'>{name}</h1>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Login