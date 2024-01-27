import React from 'react';
import { FaSpotify } from "react-icons/fa6";
import { Avatar, Dropdown } from 'flowbite-react';

function UserIconMenu({ profile, logIn, logOut }) {
    const UserLogIn = () => {
        logIn();
    }
    const UserLogOut = () => {
        logOut();
    }

    if (!profile) {
        return (
            <button className='text-sm md:text-md p-2 lg:p-3 rounded-full bg-quaternary text-white' onClick={() => UserLogIn()}>
                Log In With Spotify
            </button>
        )
    }

    return (
        <div className="flex md:order-2">
            <Dropdown
                arrowIcon={false}
                inline
                label={
                    <Avatar rounded
                        img={(props) => (
                            <img alt="User settings"
                                referrerPolicy="no-referrer"
                                src={profile.images[0].url}
                                height="48"
                                width="48"
                                {...props}
                            />
                        )}
                        className='border-4 border-quaternary rounded-full'
                    />

                }
            >
                <Dropdown.Header className='px-4 text-center'>
                    <span className="block text-sm">{profile.display_name}</span>
                </Dropdown.Header>
                <Dropdown.Item onClick={UserLogOut}>Sign out</Dropdown.Item>
            </Dropdown>
        </div>
    )
}

export default UserIconMenu