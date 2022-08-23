import React, { useState } from 'react'

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    localStorage('username', username)	

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        const res = await fetch('http://localhost:3000/api/reviewers', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                email,
                password
            })
        })
        const data = await res.json()
        if (data.error) {
            setError(data.error)
            setLoading(false)
        } else {
            setError('')
            setLoading(false)
            setUsername('')
            setEmail('')
            setPassword('')
            console.log("Data received back:", data)
        }
    }

    return (
        <div className="max-w-[1240] mx-auto mt-auto py-16 items-center h-screen">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <h1 className="text-center">Register</h1>
                        <form onSubmit={handleSubmit} className="text-center justify-center items-center m-4">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    className="form-control text-black"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    className="form-control text-black"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input

                                    type="password"
                                    className="form-control text-black"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary" disabled={loading}>
                                {loading ? 'Loading...' : 'Submit'}
                            </button>
                        </form>
                        {error && <div className="alert alert-danger mt-3">{error}</div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register