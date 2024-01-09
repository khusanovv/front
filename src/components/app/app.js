import { Route, Routes} from 'react-router-dom'
import React from 'react'
import {Box} from '@mui/material'
import { Main, Exchange} from '../'
import Login from '../login/login'

const App = () => {
  return (
    <Box>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/exchange/:id' element={<Exchange/>}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
    </Box>
  )
}

export default App