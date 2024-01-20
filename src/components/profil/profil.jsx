import { Container } from '@mui/material'
import React from 'react'
import Navbar from '../navbar/Navbar'
import profilImage from '../../image/profil.png'
import "./profil.css"
import sectionImage from '../../image/section.png'

const Profil = () => {
  return (
    <Container>
      <Navbar />
      <Container>
        <div className="profil">
          <div className="profil-main">
            <div className="profil-category">
               Дизайнер 
            </div>
            <h2 className="profil-title">Ернар Ибрагимов</h2>
            <p className="profil-info">Работаю дизайнером с 1999 года.<br />
              Был опыт в газетах, журналах, типографиях, рекламных агентствах, издательских домах... Порядка 8 лет, занимаюсь логотипами и фирменными стилями.</p>
            <ul className="profil-skills">
              <li className="skills-item">Figma</li>
              <li className="skills-item"> Adobe photoshop</li>
              <li className="skills-item"> Adobe illustrator</li>
              <li className="skills-item">  Corel draw</li>
              <li className="skills-item"> Adobe After Effects</li>
              <li className="skills-item">HTML/CSS</li>
              
            </ul>
            
          </div>
          <div className="profil-img">
           <img src={profilImage} alt="" />

          </div>
        </div>
        <div className="profil-section">
              <img src={sectionImage} alt="" />
        </div>
      </Container>
    </Container>
  )
}

export default Profil