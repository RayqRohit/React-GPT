import React from 'react'
import Profile from './Profile'

const ProfileHead = () => {

    const user = {
        name: "Rohit",
        age: 22,
        email: "rohit@google.com"
    }

    return (
        <div>

            <Profile user={user} />

        </div>
    )
}

export default ProfileHead