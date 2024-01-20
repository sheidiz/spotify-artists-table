import React from 'react'

function ArtistImage({ artista }) {

    if (!artista) return;

    const { id, images, name } = artista;
    return (
        <img src={images[0].url} alt={name} className='h-[14vh] rounded-xl' />
    )
}

export default ArtistImage