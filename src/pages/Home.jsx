import PageContainer from "../components/PageContainer";
import ArtistsTableGeneratorImg from "../assets/tunecards-artists-table-example.png";

function Home() {
    return (
        <PageContainer>
            <div className='lg:mx-6 mt-10 flex flex-col md:flex-row flew-wrap gap-6 md:gap-4'>
                <div className="text-tertiary text-center md:text-start">
                    <h1 className='px-4 lg:px-2 mb-3 text-4xl lg:text-6xl font-semibold pb-2'>
                        Visualize Your Spotify Stats
                    </h1>
                    <p className='px-2 text-lg lg:text-2xl'> Ever wondered which artists would make the ultimate dinner party guest list based on your listening habits? </p>
                    <p className='px-2 mb-3 text-lg lg:text-2xl' > Or how about your very own personalized {`"Spotify Wrapped"`} anytime of the year?</p>
                    <p className='px-2 text-lg'>
                        Discover and share your favorite beats in a whole new way with TuneCards - and {"it's"} completely free!
                    </p>
                </div>
                <div className='text-secondary text-center grid grid-cols-2 gap-4'>
                    <img src={ArtistsTableGeneratorImg} alt="ArtistsTableGenerator" className="mt-5" />
                    <img src={ArtistsTableGeneratorImg} alt="ArtistsTableGenerator2" className="mb-5" />
                </div>
            </div>
        </PageContainer >
    )
}

export default Home