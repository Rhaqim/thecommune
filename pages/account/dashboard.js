import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import ProfileHeader from '../../components/ProfileHeader'
import WaveParticles from '../../components/models/WaveParticles'

const Dashboard = () => {
    const { data: session, status } = useSession()
    const { push, asPath } = useRouter()

    const handleSignOut = async () => {
        const data = await signOut({ redirect: false, callbackUrl: '/' })
        push(data.url)
    }

    const handleSignIn = () => push(`/account/login?callBackUrl=${asPath}`)

    return (
        <div className='max-w[100%] mt-[5rem] py-4'>
            <WaveParticles
                className="bg-canvas" />
            {status === 'loading' && <div>Loading...</div>}
            {session ? (
                <div className='flex justify-between'>
                    <ProfileHeader session={session} />
                    <div className='pl-4'>
                        <p>You are logged in. {session.user.email}</p>
                    </div>
                    <div className='pr-4'>
                        <button onClick={handleSignOut}>Sign Out</button>
                    </div>
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