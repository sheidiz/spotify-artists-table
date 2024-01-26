import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';
import { routes } from './routes';
import { motion, AnimatePresence } from 'framer-motion';
import { TbX, TbMenuDeep } from 'react-icons/tb';
import UserIconMenu from '../user/UserIconMenu';
import { getAccessToken, redirectToAuthCodeFlow } from '../../utils/spotify-config';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../utils/spotify-api';
import { createUser, resetUser } from '../../redux/slices/UserSlice';
import {  resetArtists } from '../../redux/slices/ArtistsSlice';

function Navbar() {

    const userState = useSelector(store => store.user);
    const [profile, setProfile] = useState(userState.profile);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        const handleAuthCallback = async () => {
            const clientId = import.meta.env.VITE_API_KEY;
            const params = new URLSearchParams(window.location.search);
            const code = params.get('code');
            if (code || userState.code) {
                try {
                    const accessToken = await getAccessToken(clientId, code);
                    const profileData = await getProfile(accessToken);
                    dispatch(createUser({ code: code, token: accessToken, profile: profileData }));
                    setProfile(profileData);
                } catch (error) {
                    console.error('Error fetching profile:', error.message);
                }
            }
        };

        handleAuthCallback();
    }, [dispatch]);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const login = () => {
        const clientId = import.meta.env.VITE_API_KEY;
        redirectToAuthCodeFlow(clientId);
    };

    const logout = () => {
        dispatch(resetUser());
        dispatch(resetArtists());
        setProfile(null);
    };


    return (
        <header className='bg-secondary p-2'>
            <nav className='flex flex-row'>
                <div className='container mx-auto flex justify-between lg:justify-around items-center'>
                    <div className='text-gray-50 ms-2 text-2xl md:text-3xl font-medium pt-1'>
                        <NavLink to={routes.publics.INDEX}>
                            TuneCards
                        </NavLink>
                    </div>
                    <button
                        className='lg:hidden me-2 text-white focus:outline-none'
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ?
                            (<TbX className='text-white h-7 w-auto' />) :
                            (<TbMenuDeep className='text-white h-7 w-auto' />)
                        }
                    </button>

                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div className='bg-secondary lg:hidden absolute top-12 left-0 right-0 bg-lightgreen py-2'
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <NavLink to={routes.publics.INDEX}
                                    onClick={toggleMenu}
                                    className={style.menuLinkMobile}
                                >
                                    Home
                                </NavLink>
                                <NavLink to={routes.privates.USER_INFO}
                                    onClick={toggleMenu}
                                    className={style.menuLinkMobile}
                                >
                                    User Info
                                </NavLink>
                                <NavLink to={routes.privates.ARTISTS_TABLE_GENERATOR}
                                    onClick={toggleMenu}
                                    className={style.menuLinkMobile}
                                >
                                    Artists Table Generator
                                </NavLink>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <div className='hidden lg:flex'>
                        <NavLink to={routes.publics.INDEX}
                            onClick={toggleMenu}
                            className={style.menuLinkDesktop}
                        >
                            Home
                        </NavLink>
                        <NavLink to={routes.privates.USER_INFO}
                            onClick={toggleMenu}
                            className={style.menuLinkDesktop}
                        >
                            User Info
                        </NavLink>
                        <NavLink to={routes.privates.ARTISTS_TABLE_GENERATOR}
                            onClick={toggleMenu}
                            className={style.menuLinkDesktop}
                        >
                            Artists Table Generator
                        </NavLink>
                    </div>
                </div>
                <div className='p-1'>
                    <UserIconMenu profile={profile} logIn={login} logOut={logout} />
                </div>
            </nav>
        </header>
    )
}

export default Navbar