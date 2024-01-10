import React from 'react'
import { Container } from '@mui/material'
import './main.css'
import Footer from '../footer/footer'
import MainHero from './main_hero'
import Works from './works'
import Navbar from '../navbar/Navbar'
const Main = () => {
  return (
    <>
      <Container>
       <Navbar />
       

      </Container>
      <MainHero />
      <Works />
      <Footer />
    </>

  )
}

export default Main