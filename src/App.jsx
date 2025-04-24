import React from 'react'
import Header from './components/Header'
import FoodOptions from './components/FoodOptions'
import BannerCard from './components/BannerCard'
import ImageCard from './components/ImageCard'
import Restaurants from './components/Page/Restaurants'


const App = () => {
  return (
    <div>
      <Header/>
      <FoodOptions/>
      <ImageCard/>
      <BannerCard/>
     <Restaurants/>
    </div>
  )
}

export default App