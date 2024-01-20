import { FaSpotify } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

function Home() {
    return (
        <div className='min-h-[90vh] flex flex-col items-center justify-center gap-5'>
            <div className='text-white text-center w-3/4'>
                <h1 className='text-5xl font-bold pb-2'>Spotify Artist Table</h1>
                <h2 className='text-4xl font-semibold'>Generator</h2>
            </div>
            <div className='text-white text-center w-3/4'>
                <h3 className='text-3xl font-semibold'>See which artists would be on your celebrity table!</h3>
            </div>
            <button className='p-3 font-medium border bg-white rounded-full hover:scale-110'>
                Log In With Spotify <FaSpotify className='inline-block' />
            </button>
        </div>
    )
}

export default Home