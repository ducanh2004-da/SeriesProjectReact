import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import { Accordian } from './Accordian/Accordian'
import './App.css'
import RandomColor from './RandomColor/RandomColor';
import StarRating from './starRating/starRating'
import ImageSlider from './ImageSlider/ImageSlider'
import Product from './LoadingProduct/Product'

function App() {
  return (
    <>
      <Accordian />
      <RandomColor />
      <StarRating noStar={10} />
      <ImageSlider />
      <Product />
    </>
  )
}

export default App
