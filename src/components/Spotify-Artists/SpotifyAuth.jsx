import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { getAccessToken, getProfile, getTopArtists } from '../../utils/spotify-api';
import PageContainer from '../PageContainer';

function SpotifyAuth() {

    const [token, setToken] = useState(null);
    const [perfil, setPerfil] = useState();
    const [artistas, setArtistas] = useState([]);

    useEffect(() => {
        const accessToken = getAccessToken();

        if (accessToken) {
            setToken(accessToken);
        } else {
            const clientId = import.meta.env.VITE_API_KEY;
            const redirectUri = encodeURIComponent('http://localhost:5173/spotify-auth');
            const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=user-top-read`;

            window.location.href = authUrl;
        }
    }, [])
    useEffect(() => {
        const getData = async () => {
            try {
                if (token) {
                    const artists = await getTopArtists(token);
                    setArtistas(artists);
                    const profile = await getProfile(token);
                    setPerfil(profile)
                }
            } catch (error) {
                console.error("Error fetching artists")
            }
        };
        getData();

    }, [token, artistas])
    return (
        <PageContainer>
            <div className='text-white text-center w-3/4'>
                <h1 className='text-5xl font-bold pb-2'>Spotify Artist Table</h1>
                <h2 className='text-4xl font-semibold'>Generator</h2>
            </div>
            {artistas &&
                <div>mostrar table</div>
            }
        </PageContainer>
    )
}

export default SpotifyAuth