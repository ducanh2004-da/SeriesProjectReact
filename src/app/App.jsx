import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import { Accordian } from './Accordian/Accordian'
import './App.css'
import RandomColor from './RandomColor/RandomColor';
import StarRating from './starRating/starRating'

function App() {
  return (
    <>
      <Accordian />
      <RandomColor />
      <StarRating noStar={10} />
    </>
  )
}

export default App
