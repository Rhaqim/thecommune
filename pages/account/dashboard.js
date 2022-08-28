import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

const Dashboard = () => {
    const { data: session, status } = useSession()
    const { push, asPath } = useRouter()

    const handleSignOut = async () => {
        const data = await signOut({ redirect: false, callbackUrl: '/' })
        push(data.url)
    }

    const handleSignIn = () => push(`/account/login?callBackUrl=${asPath}`)

    return (
        <div className='max-w[1240px] justify-center mt-[5rem] items-center text-center py-4'>
            {status === 'loading' && <div>Loading...</div>}
            {session ? (
                <div>
                    <p>You are logged in. {session.user.email}</p>
                    <p>
                        <button onClick={handleSignOut}>Sign Out</button>
                    </p>
                </div>
            ) : (
                <div>
                    <p>You are not logged in.</p>
                    <p>
                        <button className='font-bold bg-slate-400 p-2 rounded-lg px-4' onClick={handleSignIn}>Login</button>
                    </p>
                </div>
            )}
        </div>
    )
}
export default Dashboard