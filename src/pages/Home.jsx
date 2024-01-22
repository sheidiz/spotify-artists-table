import PageContainer from "../components/PageContainer";

function Home() {
    return (
        <PageContainer>
            <div className='text-tertiary text-center w-3/4'>
                <h1 className='text-5xl font-bold pb-2'>Spotify Artist Table</h1>
                <h2 className='text-4xl font-semibold'>Generator</h2>
            </div>
            <div className='text-secondary text-center w-3/4'>
                <h3 className='text-3xl font-semibold'>See which artists would be on your celebrity table!</h3>
            </div>
        </PageContainer>
    )
}

export default Home