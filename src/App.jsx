import './App.css'
import React from 'react'
import Header from './components/Header/Header'
import Main from "./components/Main/Main"
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className='body'>
      <div className="app-container">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default App