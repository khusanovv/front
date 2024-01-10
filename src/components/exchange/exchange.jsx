import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../navbar/Navbar';
import { Container } from '@mui/material';
import "./exchange.css"
import Search from '../ui/search';


const Exchange = () => {
  const params = useParams()
  console.log(params);
  return (
    <>
      <Container>
          <Navbar />
          <div className="exchange">
            <h2 className="exchange-title">
            Ищите и находите подходящую работу среди <span className='title--span'>10,000+</span> проектов и покажите на что Вы способны!
            </h2>
            <Search />
            <h2 className='exchange-footer'>
            Ниже все заказы по <span>дизайну</span> <br/><br/> <span>▼</span>
            </h2>
          </div>

      </Container>
    </>
  )
}

export default Exchange