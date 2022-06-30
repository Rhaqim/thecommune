import {UserProvider} from '../hooks/useUser'


const Profile = () => {
  // Fetch the user client-side
//   const { user } = useUser({ redirectTo: '/login' })

//   // Server-render loading state
//   if (!user || user.isLoggedIn === false) {
//     return <>Loading...</>
//   }

  // Once the user request finishes, show the user
  return (
    <UserProvider>
      <h1>Your Profile</h1>
      <pre>user</pre>
    </UserProvider>
  )
}

export default Profile