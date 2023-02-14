import React from 'react'
import {Typography, Card, Button, CardMedia, Grid, Toolbar, Container, AppBar, CardActions, CssBaseline, CardContent, CardHeader, IconButton} from '@mui/material'
import {PhotoCamera} from '@mui/icons-material'
import TopBar from './TopBar'
import MoreVertIcon from '@mui/icons-material/MoreVert';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export const Hero = () => {
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
    <TopBar/>
    <main>
      <div style={{margin:'10px'}}>
        <Container maxWidth='sm'>
          <Typography variant='h2' align='center' color='textPrimary' gutterBottom>Home page</Typography>
          <div>
            <Grid container spacing={2} justifyContent='center'>
              <Grid item>
                <Button variant='contained' color='primary'>See my photos</Button>
              </Grid>
              <Grid item>
                <Button variant='outlined' color='secondary'>See my photos</Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
      <Container maxWidth='md'>
        <Grid container spacing={4}>
            {cards.map(() => (
                <Grid item xs={12} sm={6} md={4}>
                <Card sx={{md:{width:'40px'}}}>
                    <CardHeader action={<IconButton><MoreVertIcon/></IconButton>} title="Event bokking" subheader='September 15th'/>
                  <CardMedia sx={{pt:'56.25%'}} image='https://source.unsplash.com/random' title='Image title'/>
                  <CardContent sx={{flexGrow: 1}}>
                    <Typography variant='h5' gutterBottom>Event Name</Typography>
                    <Typography> This is a media card. You can use this section to describe the content.</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size='small' color='primary'>View</Button>
                    <Button size='small' color='primary'>Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          

        </Grid>
      </Container>

    </main>

    </div>
  )
}
