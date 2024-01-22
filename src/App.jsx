import './App.css'
import {SpotifyStore} from './redux/Store.js'
import AppRouter from './AppRouter'
import Footer from './components/Footer'
import { Provider } from 'react-redux'

function App() {

  return (
    <Provider store={SpotifyStore}>
      <div className='bg-amber-950/90 min-h-screen font-sans'>
        <AppRouter />
        <Footer />
      </div>
    </Provider>
  )
}

export default App
