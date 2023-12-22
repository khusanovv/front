import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import "./footer.css"

// icons
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
    return (
        <Box className='footer_wrapper'>
           <Container>
           <Box display="flex" className='footer'>
                <ul className='footer_item footer--category'>
                    <Typography className='footer--title' variant="h5" component="h3">
                        Топ категории
                    </Typography>
                    <li>
                        Тексты и переводы
                    </li>
                    <li>
                        Разработка
                    </li>
                    <li>
                        Дизайн
                    </li>
                    <li>
                        Аудио, видео монтаж
                    </li>
                    <li>
                        Соцсети и реклама
                    </li>
                    <li>
                        Бизнес и жизнь
                    </li>
                    <li>
                        SEO и оптимизация
                    </li>
                </ul>
                <ul className='footer_item footer--info'>
                    <Typography className='footer--title' variant="h5" component="h3">
                        Проекте
                    </Typography>
                    <li>
                        О Нас
                    </li>
                    <li>
                        Как Это Работает
                    </li>
                    <li>
                        Политика Приватности
                    </li>
                    <li>
                        Правила Пользования
                    </li>
                    <li>
                        Пресса о нас
                    </li>
                </ul>
                <ul className='footer_item footer--service'>
                    <Typography className='footer--title' variant="h5" component="h3">
                        Поддержка
                    </Typography>
                    <li>
                        Контакты
                    </li>
                    <li>
                        Политика Безопасности
                    </li>
                    <li>
                        FAQ
                    </li>

                </ul>
                <ul className='footer_item '>
                    <Typography className='footer--title' variant="h5" component="h3">
                        Follow
                    </Typography>
                    <ul className='footer--sites'>
                        <li>
                            <TelegramIcon />
                        </li>
                        <li>
                            <TwitterIcon />
                        </li>
                        <li>
                            <InstagramIcon />
                        </li>
                        <li>
                            <LinkedInIcon />
                        </li>
                    </ul>

                </ul>
            </Box>
           </Container>

            <div className='copyright'>
             Copyright @ 2021  |  WorkTap – Worktap.KZ. All Rights Reserved
            </div>
            
        </Box>
        
        
    )
}

export default Footer