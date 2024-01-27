import PageContainer from "../components/PageContainer";
import ArtistsTableGeneratorImg from "../assets/tunecards-artists-table-example.png";

function Home() {
    return (
        <PageContainer>
            <div className='lg:mx-6 mt-10 lg:mt-0 flex flex-col md:flex-row flew-wrap gap-6 md:gap-4'>
                <div className="text-gray-950 text-center md:text-start flex flex-col justify-center">
                    <h1 className='px-4 lg:px-2 mb-3 text-4xl lg:text-6xl font-black pb-2'>
                        Visualize Your Spotify Stats
                    </h1>
                    <p className='px-2 text-lg lg:text-xl'>Ever wondered which artists would make the ultimate dinner party guest list based on your listening habits? </p>
                    <p className='px-2 mb-3 text-lg lg:text-xl' >Or how about taking a peek at your very own {`"Spotify Wrapped"`} anytime of the year?</p>
                    <p className='text-quaternary px-2 text-lg'>
                        Discover and share your favorite beats in a whole new way with TuneCards - and {"it's"} completely free!
                    </p>
                </div>
                <div className='mx-auto px-10 lg:px-0 lg:mx-0 grid grid-cols-2 gap-10 lg:gap-4 items-center'>
                    <img src={ArtistsTableGeneratorImg} alt="ArtistsTableGenerator" className="lg:mt-5 w-full lg:w-3/4" />
                    <img src={ArtistsTableGeneratorImg} alt="ArtistsTableGenerator2" className="lg:mb-5 w-full lg:w-3/4" />
                </div>
            </div>
        </PageContainer >
    )
}

export default Home