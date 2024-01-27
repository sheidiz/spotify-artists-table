import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';
import { routes } from '../../guards/routes';
import { motion, AnimatePresence } from 'framer-motion';
import { TbX, TbMenuDeep } from 'react-icons/tb';
import UserIconMenu from '../user/UserIconMenu';
import { getAccessToken, redirectToAuthCodeFlow } from '../../utils/spotify-config';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../utils/spotify-api';
import { createUser, resetUser } from '../../redux/slices/UserSlice';
import { resetArtists } from '../../redux/slices/ArtistsSlice';

function Navbar() {

    const clientId = import.meta.env.VITE_API_KEY;
    const dispatch = useDispatch();
    const userState = useSelector(store => store.user);
    const [isMenuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleAuthCallback = async () => {
            const params = new URLSearchParams(window.location.search);
            const code = params.get('code');
            if (code || userState.code) {
                try {
                    const accessToken = await getAccessToken(clientId, code);
                    const profileData = await getProfile(accessToken);
                    dispatch(createUser({ code: code, token: accessToken, profile: profileData }));
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
        redirectToAuthCodeFlow(clientId);
    };

    const logout = () => {
        dispatch(resetUser());
        dispatch(resetArtists());
    };

    return (
        <header className='border-b border-secondary p-2'>
            <nav className='flex flex-row'>
                <div className='container gap-5 mx-auto flex justify-between lg:justify-start items-center'>
                    <div className='text-secondary ms-2 text-2xl md:text-3xl font-medium'>
                        <NavLink to={routes.publics.INDEX}>
                            TuneCards
                        </NavLink>
                    </div>
                    <button
                        className='lg:hidden me-2 text-secondary focus:outline-none'
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ?
                            (<TbX className='text-secondary h-7 w-auto' />) :
                            (<TbMenuDeep className='text-secondary h-7 w-auto' />)
                        }
                    </button>

                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div className='bg-white lg:hidden absolute top-20 left-0 right-0 bg-lightgreen py-2'
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
                                {userState.profile &&
                                    <>
                                        <NavLink to={routes.privates.ARTISTS_TABLE_GENERATOR}
                                            onClick={toggleMenu}
                                            className={style.menuLinkMobile}
                                        >
                                            Artists Table Generator
                                        </NavLink>
                                    </>
                                }
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
                        {userState.profile &&
                            <>
                                <NavLink to={routes.privates.ARTISTS_TABLE_GENERATOR}
                                    onClick={toggleMenu}
                                    className={style.menuLinkDesktop}>
                                    Artists Table Generator
                                </NavLink>
                            </>}
                    </div>
                </div>
                <div className='p-1'>
                    <UserIconMenu profile={userState.profile} logIn={login} logOut={logout} />
                </div>
            </nav>
        </header>
    )
}

export default Navbar