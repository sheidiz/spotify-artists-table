import UserImage from '../user/UserImage'
import ArtistImage from './ArtistImage'

function ArtistsTable({ artistas, perfil }) {

    if (!artistas || !perfil) return

    return (
        <div className='grid grid-cols-3 gap-2 relative justify-items-center'>
            <div id="table" className='bg-local bg-cover bg-no-repeat bg-bg-wood w-1/2 h-4/5 absolute top-14 left-24 z-0'>
            </div>
            <div className='col-start-2 col-span-1 z-10'>
                <UserImage user={perfil} />
            </div>
            <div className="col-start-1 col-end-2 z-10">
                <ArtistImage artista={artistas[0]} />
            </div>
            <div className="col-start-3 col-end-4 z-10">
                <ArtistImage artista={artistas[1]} />
            </div>
            <div className="col-start-1 col-end-2 z-10">
                <ArtistImage artista={artistas[2]} />
            </div>
            <div className="col-start-3 col-end-4 z-10">
                <ArtistImage artista={artistas[3]} />
            </div>
            <div className="col-start-1 col-end-2 z-10">
                <ArtistImage artista={artistas[4]} />
            </div>
            <div className="col-start-3 col-end-4 z-10">
                <ArtistImage artista={artistas[5]} />
            </div>
            <div className='col-start-2 col-span-1 z-10'>
                <ArtistImage artista={artistas[6]} />
            </div>

        </div>
    )
}

export default ArtistsTable