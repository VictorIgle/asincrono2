import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Main } from './components/Main/Main'
import { Caracteristicas } from './components/Caracteristicas/Caracteristicas'
import { Praise } from './components/Praise/Praise'
import { Footer } from './components/Footer/Footer'
import { FooterIconos } from './components/Footer-iconos/Footer-iconos'

function App() {


  return (
    <>
      <Main />
      <Caracteristicas/>
      <Praise/>
      <Footer />
      <FooterIconos />
    </>
  )
}

export default App
