import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTopArtists } from '../utils/spotify-api';
import PageContainer from '../components/PageContainer';
import ArtistsTable from "../components/spotify-artists/ArtistsTable"
import { createArtists } from '../redux/slices/ArtistsSlice';

function ArtistsTableGenerator() {

    const dispatch = useDispatch();
    const userState = useSelector(store => store.user);
    const [token, setToken] = useState(userState.token);
    const [profile, setProfile] = useState(userState.profile);
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                if (token) {
                    const artists_ = await getTopArtists(token);
                    dispatch(createArtists(artists_));
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
            <div className='mt-5 text-secondary text-center w-3/4'>
                <h1 className='text-4xl font-bold pb-2'>Spotify Artist Table Generator</h1>
            </div>
            {artists &&
                (
                    <ArtistsTable artists={artists} profile={profile} />
                )
            }
        </PageContainer>
    )
}

export default ArtistsTableGenerator