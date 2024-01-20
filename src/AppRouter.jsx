import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

export default function AppRouter() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/callback'} element={<h1>Callback</h1>} />
        </Routes>
        </BrowserRouter>
    )
}
