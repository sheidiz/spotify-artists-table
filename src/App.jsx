import { useState } from 'react'
import './App.css'
import AppRouter from './AppRouter'
import Footer from './components/Footer'

function App() {


  return (
    <div className='bg-amber-950/90 min-h-screen font-sans'>
      <AppRouter />
      <Footer />
    </div>
  )
}

export default App
