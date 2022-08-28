import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

const Profile = () => {
    const { data: session, status } = useSession()

    const { push } = useRouter()

    const handleSignOut = async () => {
        const data = await signOut({ redirect: false, callbackUrl: '/' })
        push(data.url)
    }

    return (
        <div>
            <h1>Profile</h1>
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
                        <button onClick={signIn}>Login</button>
                    </p>
                </div>
            )}
        </div>
    )
}

export default Profile