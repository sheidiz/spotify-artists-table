import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import { routes } from './components/navbar/routes'
import Home from './pages/Home'
import ArtistsTableGenerator from './pages/ArtistsTableGenerator'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path={routes.publics.INDEX} element={<Home />} />
                <Route path={routes.publics.ABOUT} element={<h1>About</h1>} />
                <Route path={routes.privates.ARTISTS_TABLE_GENERATOR} element={<ArtistsTableGenerator />} />
            </Routes>
        </BrowserRouter>
    )
}
