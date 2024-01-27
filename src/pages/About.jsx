import React from 'react'
import PageContainer from '../components/PageContainer'

function About() {
    return (
        <PageContainer>
            <div className='my-5 text-gray-950 text-center lg:text-start w-3/4'>
                <h1 className='text-3xl lg:text-5xl font-bold mb-5'>About us</h1>
                <div className='text-md md:text-lg flex flex-col gap-4'>
                    <p>Welcome to TuneCards! {"We're "} passionate about music and technology, and our goal is to provide you with innovative tools to explore and visualize your Spotify listening experience.</p>
                    <p>At TuneCards, we understand the importance of privacy and security. Rest assured, all the Spotify data we collect is securely gathered using authorized APIs provided by Spotify. <span className='underline'>Your personal information is never shared or stored by us.</span></p>
                    <p>Our mission is to offer you a seamless and enjoyable experience as you dive into your music journey with us. Explore your top artists, create personalized visualizations, and share your music discoveries with friends - all in a safe and secure environment.</p>
                </div>
                <h2 className='mt-5 text-3xl lg:text-4xl font-bold mb-5'>Frequenty Asked Questions</h2>
                <ul className='grid grid-cols-1 md:grid-cols-2 gap-4 text-md'>
                    <li className='border-s border-tertiary ps-2'>
                        <p className='font-semibold'> How can I use TuneCards?</p>
                        <p>To use TuneCards, simply log in with your Spotify account. Once logged in, {"you'll"} have access to the menu.</p>
                    </li>
                    <li className='border-s border-tertiary ps-2'>
                        <p className='font-semibold'>How does TuneCards collect my Spotify data?</p>
                        <p>TuneCards securely gathers your Spotify data using authorized APIs provided by Spotify.</p>
                    </li>
                    <li className='border-s border-tertiary ps-2'>
                        <p className='font-semibold'>Is my personal information shared or stored by TuneCards?</p>
                        <p>No, your personal information is never shared or stored by TuneCards.</p>
                    </li>
                    <li className='border-s border-tertiary ps-2'>
                        <p className='font-semibold'>Are there any fees or subscriptions required to use TuneCards?</p>
                        <p>TuneCards is completely free to use. There are no hidden fees or subscriptions required.</p>
                    </li>
                    <li className='border-s border-tertiary ps-2'>
                        <p className='font-semibold'>How often is my Spotify data updated on RiffyVibes?</p>
                        <p>Your Spotify data is updated periodically to ensure you have access to the most recent information about your music listening habits.</p>
                    </li>
                </ul>
            </div>
        </PageContainer>
    )
}

export default About