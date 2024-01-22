import { FaSpotify } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import PageContainer from "../components/PageContainer";
import { useEffect, useState } from "react";
import { getAccessToken, getProfile } from "../utils/spotify-api";
import { useDispatch, useSelector } from "react-redux";
import { createUser, resetUser } from "../redux/slices/UserSlice";

function Home() {

    const dispatch = useDispatch();
    const userState = useSelector(store => store.user);

    const login = async () => {
        const accessToken = getAccessToken();
        let profile_;
        if (accessToken) {
            try {
                profile_ = await getProfile(accessToken);
            } catch (error) {
                console.error("Error", error.message)
            }
            dispatch(
                createUser({
                    token: accessToken,
                    profile: profile_
                })
            )
            window.location.reload();
        } else {
            const clientId = import.meta.env.VITE_API_KEY;
            const redirectUri = encodeURIComponent('http://localhost:5173');
            const authUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=user-top-read`;

            window.location.href = authUrl;
        }
    }
    const logout = () => {
        dispatch(
            resetUser()
        )
    }
    useEffect(() => {
        console.log(userState)
    }, [userState]);

    return (
        <PageContainer>
            <div className='text-tertiary text-center w-3/4'>
                <h1 className='text-5xl font-bold pb-2'>Spotify Artist Table</h1>
                <h2 className='text-4xl font-semibold'>Generator</h2>
            </div>
            <div className='text-secondary text-center w-3/4'>
                <h3 className='text-3xl font-semibold'>See which artists would be on your celebrity table!</h3>
            </div>
            {/* <NavLink to="/spotify-auth">
                <p className='p-3 font-medium border bg-white rounded-full hover:scale-110'>
                    Log In With Spotify <FaSpotify className='inline-block' />
                </p>
            </NavLink>*/}
            {userState.profile ?
                (<>
                    <p>Hi {userState.profile.display_name}</p>
                    <button onClick={() => logout()}>Log Out</button>

                </>)
                :
                <button onClick={() => login()}>Log In With Spotify</button>
            }
        </PageContainer>
    )
}

export default Home