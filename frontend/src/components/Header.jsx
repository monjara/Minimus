import React from 'react'
import {
  AppBar,
  Box,
  IconButton,
  Switch,
  Toolbar,
  Typography,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1, boxShadow: 10, borderRadius: '16px' }}>
      <AppBar position="static" sx={{ borderRadius: '16px' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Minimis
          </Typography>
          <Typography
            variant="h5"
            component="div"
            position="absolute"
            left="50%"
          >
            TODAY
          </Typography>
          <Typography>LIGHT</Typography>
          <Switch color="secondary" />
          <Typography>DARK</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
