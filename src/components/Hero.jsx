import React, { useState } from 'react'
import {Typography, Card, CardMedia, Grid, Link, Toolbar, Container, AppBar, CardContent, Stack, Box, Button} from '@mui/material'
import {PhotoCamera} from '@mui/icons-material'
import TopBar from './TopBar'


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

export const Hero = () => {

    const [visible, setVisible] = useState(12)



  const handleClick = () => {
    setVisible(prev => prev + 3)
  }
  return (
    <div>
        <AppBar position='relative'>
      <Toolbar>
        <PhotoCamera/>
        <Typography variant='h5' ml={2}>
          Event Booking Homepage
        </Typography>
      </Toolbar>
    </AppBar>
    
    <main>
      <Container maxWidth='lg'>
      <TopBar/>
        <Grid container spacing={4} marginTop="5px">
            
            {cards.slice(0, visible).map(() => (
                
                <Grid item xs={12} sm={6} md={4}>
                    <Link href='event/eventId' style={{textDecoration:'none'}}>
                <Card sx={{md:{width:'40px'}}}>
                  <CardMedia sx={{pt:'56.25%', height:140}} image='https://source.unsplash.com/random' title='Image title'/>
                  <CardContent sx={{flexGrow: 1}}>
                    <Stack direction='row'>
                         <Box mr='7px'>date</Box>
                         <Stack direction='column' >
                            <Typography variant='h5' gutterBottom>Event Name</Typography>
                            <Typography variant='body2'> This is a media card. You can use this section to describe the content.</Typography>
                         </Stack>
                    </Stack>
                  </CardContent>
                </Card>
                </Link>
              </Grid>
            ))} 

        </Grid>
        <Button onClick={handleClick} variant='contained' style={{backgroundColor: 'orangered', height:'50px', marginTop:'40px', marginLeft:'470px', width:'180px', fontSize:'12px'}}> Load More Events </Button>
      </Container>

    </main>

    </div>
  )
}
