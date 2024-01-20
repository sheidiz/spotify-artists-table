import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function AppRouter() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<h1>Home</h1>} />
            <Route path={"/callback"} element={<h1>Callback</h1>} />
        </Routes>
        </BrowserRouter>
    )
}
