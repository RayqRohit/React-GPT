import React from 'react'

const Profile = ({ user }) => {
    return (
        <div >
            <p>{user.name}</p>
            <p>{user.age}</p>
            <p>{user.email}</p>
        </div>
    )
}

export default Profile