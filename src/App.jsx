import React from 'react'
import Nav from './Components/Navbar/Nav'
import LogoSearchbar from './Components/LoloSearchbar/LogoSearchbar'
import Carousel from './Components/Carousel/Carousel'
import TopBanner from './Components/TopBanner/TopBanner'
import FlashSale from './Components/FlashSale/FlashSale'

function App() {
  return (
    <div>
      <Nav />   
      <LogoSearchbar />
      <Carousel />
      <TopBanner />
      <FlashSale />
    </div>
  )
}

export default App