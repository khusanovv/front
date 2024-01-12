import React from 'react'
import { Container } from '@mui/material'
import './main.css'
import Footer from '../footer/footer'
import MainHero from './main_hero'
import Works from './works'
import Navbar from '../navbar/Navbar'
import MainWorkTap from './mainWorkTap'
const Main = () => {
  return (
    <>
      <Container>
       <Navbar />
       

      </Container>
      <MainHero />
      <Works />
      <MainWorkTap />
      <Footer />
    </>

  )
}

export default Main