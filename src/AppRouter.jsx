import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import { routes } from './guards/routes'
import Home from './pages/Home'
import ArtistsTableGenerator from './pages/ArtistsTableGenerator'
import PageNotFound from './pages/PageNotFound'
import AuthGuard from './guards/auth-guard'

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path={routes.publics.INDEX} element={<Home />} />
                <Route path="*" element={<PageNotFound />} />
                <Route element={<AuthGuard />}>
                    <Route path={routes.privates.ARTISTS_TABLE_GENERATOR} element={<ArtistsTableGenerator />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
