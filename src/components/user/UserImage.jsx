import React from 'react'

function UserImage({ user }) {

    if (!user) return;

    const { id, images, display_name } = user;
    return (
        <img src={images[1].url} alt={`${display_name}'s profile picture`} className='h-[14vh] rounded-xl' />
    )
}

export default UserImage