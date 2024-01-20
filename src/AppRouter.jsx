import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SpotifyAuth from './components/Spotify-Artists/SpotifyAuth'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'/spotify-auth'} element={<SpotifyAuth />} />
            </Routes>
        </BrowserRouter>
    )
}
