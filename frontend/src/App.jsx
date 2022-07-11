import { Box } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Header from './components/Header'
import WeatherCard from './components/WeatherCard'

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Box>
          <WeatherCard />
        </Box>
      </Container>
    </>
  )
}

export default App
