import { Container, Box, Typography, InputBase, Button  } from '@mui/material'
// import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import Main_hero from '../../image/main-hero.png'
import React from 'react'
import "./main.css"

import Grid from '@mui/material/Grid'; // Grid version 1
// import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

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
                            <Button className='main_search' type="button" sx={{ p: '10px' }} aria-label="search">
                                Найти
                            </Button>
                            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

                        </Paper>

                    </Box>

                    <Box className='main_img' >
                        <img src={Main_hero} alt="" />
                    </Box>
                    <Box className="main_category">
                        <Typography variant='4'>
                            Выберите рубрику, чтобы начать
                        </Typography>  
                        <Grid className='category_wrapper'  container spacing={2}>
                            <Grid item xs={4} md={4}>
                                
                                <Button  className='category_item'  variant="outlined"> <span className='item_spam'> ◁  </span>  Дизайн</Button>
                                
                            </Grid>
                            <Grid item xs={6} md={4}>
                               <Button className='category_item'  variant="outlined"> <span className='item_spam'> ◁  </span> Дизайн сайтов</Button>
                            </Grid>
                            <Grid item xs={6} md={4}>
                               <Button className='category_item'  variant="outlined"> <span className='item_spam'> ◁  </span> Дизайн логотипа</Button>
                            </Grid>
                            <Grid item xs={6} md={4}>
                            <Button className='category_item'  variant="outlined"> <span className='item_spam'> ◁  </span> Дизайн визиток</Button>
                            </Grid>
                            <Grid item xs={6} md={4}>
                               <Button className='category_item'  variant="outlined"> <span className='item_spam'> ◁  </span> Арт и иллюстрации</Button>
                            </Grid>
                            <Grid item xs={6} md={4}>
                               <Button className='category_item'  variant="outlined"> <span className='item_spam'> ◁  </span> Флаера и брошюры</Button>
                            </Grid>
                            <Grid item xs={6} md={4}>
                               <Button className='category_item'  variant="outlined"> <span className='item_spam'> ◁  </span> Баннеры и стенды</Button>
                            </Grid>
                            <Grid item xs={6} md={4}>
                               <Button className='category_item'  variant="outlined"> <span className='item_spam'> ◁  </span> Дизайн презентации</Button>
                            </Grid>
                            <Grid item xs={6} md={4}>
                             <Button className='category_item'  variant="outlined"> <span className='item_spam'> ◁  </span> Все подкатегории</Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default MainHero