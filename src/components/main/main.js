import React from 'react'
import { Container } from '@mui/material'
import './main.css'
import Footer from '../footer/footer'
import MainHero from './main_hero'
import Works from './works'
import Navbar from '../navbar/Navbar'
import MainWorkTap from './mainWorkTap'
import MainBiznes from './mainBiznes'
const Main = () => {
  return (
    <>
      <Container>
       <Navbar />
       

      </Container>
      <MainHero />
      <Works />
      <MainWorkTap />
      <MainBiznes />
      <Footer />
    </>

  )
}

export default Main