import { Container, Box, Typography, InputBase, Button } from '@mui/material'
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Main_hero from '../../image/main-hero.png'
import React from 'react'
import "./main.css"

const MainHero = () => {
    return (
        <>
            <Container>
                <Box className='main'>
                    <Box className='main_service' >
                        <Typography className='main-title' variant='h4'>
                            Покупайте фриланс-услуги в <span className='main-title--click'>два клика</span>
                        </Typography>
                        <p className='main-info'>
                            Ворк — единица работы продавца, которую можно купить как товар в магазине
                        </p>
                        <Paper

                            component="form"
                            className='main-input'
                            sx={{ p: '0px 10px', display: 'flex', alignItems: 'center', width: 400 }}
                        >
                            
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Что нужно сделать?"
                                inputProps={{ 'aria-label': 'Что нужно сделать?' }}
                            />
                            <Button className='main_search' type="button" sx={{ p: '10px' }}  aria-label="search">
                                 Найти
                            </Button>
                            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                            
                        </Paper>
                    </Box>
                    <Box className='main_img' >
                        <img src={Main_hero} alt="" />
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default MainHero