import React from 'react'

const ProfileHeader = ({ session }) => {

  return (
    <div>
        <picture>
            <img src={session.user.image} alt="profile" />
        </picture>
    </div>
  )
}

export default ProfileHeader