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
            {providers.map(({ name, Icon }) => (
                <>
                    <span className='ml-2'>{name}</span>
                    <button key={name} className='font-bold bg-slate-400 p-2 rounded-lg px-4' onClick={() => signIn({ provider: name })}>
                        <Icon />
                    </button>
                </>
            ))}
        </div>
    )
}

export default Login