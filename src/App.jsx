import './App.css'
import {SpotifyStore} from './redux/Store.js'
import AppRouter from './AppRouter'
import Footer from './components/Footer'
import { Provider } from 'react-redux'

function App() {

  return (
    <Provider store={SpotifyStore}>
      <div className='min-h-screen'>
        <AppRouter />
        <Footer />
      </div>
    </Provider>
  )
}

export default App
