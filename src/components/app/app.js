import { Route, Routes} from 'react-router-dom'
import React from 'react'
import {Box} from '@mui/material'
import { Main, Exchange} from '../'
import Login from '../login/login'
import Competitions from '../Competitions/Competitions'
import CreateWork from '../create_work/CreateWork'
import Work from '../work/work'
import CreateOrder from '../create_order/CreateOrder'

const App = () => {
  return (
    <Box>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/exchange' element={<Exchange/>}></Route>
        <Route path='/competitions' element={<Competitions />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/work' element={<Work />}></Route>
        <Route path='/create-work' element={ <CreateWork />}></Route>
        <Route path='/create-order' element={  <CreateOrder />}></Route>
      </Routes>
    </Box>
  )
}

export default App