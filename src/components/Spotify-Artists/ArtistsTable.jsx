import { useRef } from 'react';
import UserImage from '../user/UserImage';
import ArtistImage from './ArtistImage';
import { htmlToImageConvert } from '../../utils/exportAsImage';


function ArtistsTable({ artists, profile }) {

    const elementRef = useRef(null);

    if (!artists || !profile) return

    return (
        <>
            <div ref={elementRef} className='p-3 card shadow'>
                <h3 className='text-3xl font-semibold text-center mb-4'>Dinner at {profile.display_name}{"'s"}</h3>
                <div className='grid grid-cols-3 gap-2 relative justify-items-center'>
                    <div id="table"
                        className='bg-local bg-cover bg-no-repeat bg-bg-wood absolute top-14 left-22 z-0'>
                    </div>
                    <div className='col-start-2 col-span-1 z-10'>
                        <UserImage user={profile} />
                    </div>
                    <div className="col-start-1 col-end-2 z-10">
                        <ArtistImage artista={artists[0]} />
                    </div>
                    <div className="col-start-3 col-end-4 z-10">
                        <ArtistImage artista={artists[1]} />
                    </div>
                    <div className="col-start-1 col-end-2 z-10">
                        <ArtistImage artista={artists[2]} />
                    </div>
                    <div className="col-start-3 col-end-4 z-10">
                        <ArtistImage artista={artists[3]} />
                    </div>
                    <div className="col-start-1 col-end-2 z-10">
                        <ArtistImage artista={artists[4]} />
                    </div>
                    <div className="col-start-3 col-end-4 z-10">
                        <ArtistImage artista={artists[5]} />
                    </div>
                    <div className='col-start-2 col-span-1 z-10'>
                        <ArtistImage artista={artists[6]} />
                    </div>

                </div>
            </div>
            <div className='flex flex-row gap-5'>
                <button className='p-3 mx-auto my-2 text-white bg-quaternary rounded-xl hover:scale-110'
                    onClick={() => htmlToImageConvert(elementRef.current)}>
                    Download Image
                </button>
            </div>
        </>
    )
}

export default ArtistsTable