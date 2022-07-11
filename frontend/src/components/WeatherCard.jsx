import React from 'react'
import { Card, Stack, Typography } from '@mui/material'
import WbSunnyIcon from '@mui/icons-material/WbSunny'

const WeatherCard = () => {
  return (
    <Card
      justifyContent="center"
      sx={{
        minWidth: 275,
        width: '20%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Stack alignItems="center">
        <Typography variant="h4">country</Typography>
        <WbSunnyIcon
          sx={{
            fontSize: 300,
          }}
        />
        <Typography variant="h2">20°</Typography>
        <Typography variant="h4">weather</Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ width: '100%' }}
        >
          <Stack alignItems="center">
            <Typography>0°</Typography>
            <Typography>Min</Typography>
          </Stack>
          <Stack alignItems="center">
            <Typography>23°</Typography>
            <Typography>Max</Typography>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  )
}

export default WeatherCard
