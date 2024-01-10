
import React from 'react'
import { Container, Box, Typography, InputBase, Button } from '@mui/material'
// import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';

import '../main/main.css'
import './search.css'
import { Link } from 'react-router-dom';

const Search = () => {
    return (
        <>
            <div className='search'>
                <Paper
                    component="form"
                    className='main-input'
                    sx={{ p: '0px 10px', mt: '60px', display: 'flex', alignItems: 'center', width: 500 }}
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

                <ul className="search-category">
                    <li className="category-item">
                        <Link to='/work'>Тексты и переводы </Link>
                    </li>
                    <li className="category-item">
                        <Link to='/work'>Разработка </Link>
                    </li>
                    <li className="category-item">
                        <Link to='/work'>Дизайн</Link>
                    </li>
                    <li className="category-item">
                        <Link to='/work'>Аудио, видео монтаж  </Link>
                    </li>
                    <li className="category-item">
                        <Link to='/work'>SEO и оптимизация </Link>
                    </li>
                    <li className="category-item">
                        <Link to='/work'>Бизнес и жизнь </Link>
                    </li>
                    <li className="category-item">
                        <Link to='/work'>Соцсети и реклама</Link>
                    </li>
                    <li className="category-item category-item__active ">
                        <Link className='category-item__active' to='/work'>Все категории</Link>
                    </li>
                </ul>



            </div>
        </>
    )
}

export default Search