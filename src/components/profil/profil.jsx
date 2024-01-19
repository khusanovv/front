import { Container } from '@mui/material'
import React from 'react'
import Navbar from '../navbar/Navbar'

const Profil = () => {
  return (
    <Container>
        <Navbar />
        <Container>
          <div className="profil">
            <div className="profil-main"></div>
            <div className="profil-img"></div>

          </div>
        </Container>
    </Container>
  )
}

export default Profil