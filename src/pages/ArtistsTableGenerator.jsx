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
                <h3 className='text-3xl font-semibold'>{profile.display_name}{"'s"} Dinner</h3>
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