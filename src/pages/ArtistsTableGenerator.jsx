import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getTopArtists } from '../utils/spotify-api';
import PageContainer from '../components/PageContainer';
import ArtistsTable from "../components/spotify-artists/ArtistsTable"

function ArtistsTableGenerator() {

    const [token, setToken] = useState((useSelector(store => store.user).token));
    const [profile, setProfile] = useState((useSelector(store => store.user).profile));
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                if (token) {
                    const artists_ = await getTopArtists(token);
                    setArtists(artists_);
                }
            } catch (error) {
                console.error("Error fetching artists")
            }
        };
        getData();

    }, [token, artists])
    return (
        <PageContainer>
            <div className='text-white text-center w-3/4'>
                <h1 className='text-5xl font-bold pb-2'>Spotify Artist Table</h1>
                <h2 className='text-4xl font-semibold'>Generator</h2>
            </div>
            {artists &&
                (
                    <div>
                        <ArtistsTable artists={artists} profile={profile} />
                        <button className='p-3 mx-auto my-2 border bg-white block'>Change Profile Pic</button> {/*this will change the top user image */}
                        <button className='p-3 mx-auto my-2 border bg-white block'>Download Image</button>{/*this will let users download their table imgage */}
                    </div>
                )
            }
        </PageContainer>
    )
}

export default ArtistsTableGenerator