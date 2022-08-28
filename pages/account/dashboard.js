import React from 'react'
import { useSession, signOut, signIn } from 'next-auth/react'

const Dashboard = () => {
    const { data: session, status } = useSession()

    return (
        <div className='max-w[1240px] justify-center mt-[5rem] items-center text-center py-4'>
            {status === 'loading' && <div>Loading...</div>}
            {session ? (
                <div>
                    <p>You are logged in. {session.user.email}</p>
                    <p>
                        <button onClick={signOut}>Sign Out</button>
                    </p>
                </div>
            ) : (
                <div>
                    <p>You are not logged in.</p>
                    <p>
                        <button className='font-bold bg-slate-400 p-2 rounded-lg px-4' onClick={signIn}>Login</button>
                    </p>
                </div>
            )}
        </div>
    )
}
export default Dashboard