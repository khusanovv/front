import { Container, Box, Typography, Button } from '@mui/material'
import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';




const Works = () => {

    return (
        <Container>
            <Box className='works'>
                <Typography variant='h5'>Актуальные ворки</Typography>
                <div className='card works-card' >
                    <Card className='card-wrapper' sx={{ mt: 5, minWidth:350, maxWidth: 354 }}>
                        <CardHeader
                            className='card_header'
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    R
                                </Avatar>
                            }
                           
                            title="Сделать дизайн интернет-магазина"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Button className='card-btn' variant="outlined">
                                Посмотреть
                            </Button>
                        </CardActions>
                    </Card>
                    <Card className='card-wrapper' sx={{ mt: 5, minWidth:350, maxWidth: 354 }}>
                        <CardHeader
                            className='card_header'
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    R
                                </Avatar>
                            }
                           
                            title="Верстка landing page"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Button className='card-btn' variant="outlined">
                                Посмотреть
                            </Button>
                        </CardActions>
                    </Card>
                    <Card className='card-wrapper' sx={{ mt: 5, minWidth:350, maxWidth: 354 }}>
                        <CardHeader
                            className='card_header'
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    R
                                </Avatar>
                            }
                           
                            title="Сделать дизайн сайта-каталога и посадить на какой нибудь ко..."
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Button className='card-btn' variant="outlined">
                                Посмотреть
                            </Button>
                        </CardActions>
                    </Card>
                    <Card className='card-wrapper' sx={{ mt: 5, minWidth:350, maxWidth: 354 }}>
                        <CardHeader
                            className='card_header'
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    R
                                </Avatar>
                            }
                           
                            title="Продвижение instagram "
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Button className='card-btn' variant="outlined">
                                Посмотреть
                            </Button>
                        </CardActions>
                    </Card>
                    <Card className='card-wrapper' sx={{ mt: 5, minWidth:350, maxWidth: 354 }}>
                        <CardHeader
                            className='card_header'
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                    R
                                </Avatar>
                            }
                           
                            title="Срочно! Нужен веб дизайнер!"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras.
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <Button className='card-btn' variant="outlined">
                                Посмотреть
                            </Button>
                        </CardActions>
                    </Card>
                    <Card className='card-wrapper card-wrapper--all' sx={{ mt: 5, minWidth:350, maxWidth: 354 }}>
                        
                        <CardActions disableSpacing>
                            <Button className='card-btn card-btn--all' variant="outlined">
                            Смотреть все ворки
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            </Box>

        </Container>
    )
}

export default Works