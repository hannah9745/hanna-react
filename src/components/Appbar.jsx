import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Appbar = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography>First App</Typography>
                <Button variant='contained' color='success'><Link style={{textDocoration:'none'}}></Link>View Data</Button>
                <Button variant='contained' clolor='error'><Link style ={{textDocoration:}}></Link>Add Data</Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Appbar

