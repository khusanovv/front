import { Route, Routes} from 'react-router-dom'
import React from 'react'
import {Box} from '@mui/material'
import { Main, Exchange} from '../'

const App = () => {
  return (
    <Box>
      <Routes>
        <Route path='/' element={<Main/>}>
        </Route>
        <Route path='/exchange/:id' element={<Exchange/>}>

        </Route>
      </Routes>
    </Box>
  )
}

export default App