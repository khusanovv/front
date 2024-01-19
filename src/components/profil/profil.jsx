import { Container } from '@mui/material'
import React from 'react'
import Navbar from '../navbar/Navbar'
import profilImage from '../../../public/profil.png'

const Profil = () => {
  return (
    <Container>
      <Navbar />
      <Container>
        <div className="profil">
          <div className="profil-main">
            <div className="profil-category"></div>
            <h2 className="profil-title">Ернар Ибрагимов</h2>
            <p className="profil info">Работаю дизайнером с 1999 года.
              Был опыт в газетах, журналах, типографиях, рекламных агентствах, издательских домах... Порядка 8 лет, занимаюсь логотипами и фирменными стилями.</p>
            <div className="profil-skills"></div>
            Figma
            Adobe photoshop
            Adobe illustrator
            Corel draw
            Adobe After Effects
            HTML/CSS
          </div>
          <div className="profil-img">
           <img src={profilImage} alt="" />

          </div>

        </div>
      </Container>
    </Container>
  )
}

export default Profil