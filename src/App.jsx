import React from 'react'
import Nav from './Components/Navbar/Nav'
import LogoSearchbar from './Components/LoloSearchbar/LogoSearchbar'
import Carousel from './Components/Carousel/Carousel'
import TopBanner from './Components/TopBanner/TopBanner'
import FlashSale from './Components/FlashSale/FlashSale'
import DarazMail from './Components/DarazMail/DarazMail'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>
      <Nav />   
      <LogoSearchbar />
      <Carousel />
      <TopBanner />
      <FlashSale />
      <DarazMail />
      <Footer />
    </div>
  )
}

export default App