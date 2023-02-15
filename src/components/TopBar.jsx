import { Box, Stack, Typography} from '@mui/material'
import React from 'react'
import MinimalSelect from './CategoryButton'
import Event from './Event'

const TopBar = () => {
  return (
    <Box>
      <Box  mt='20px'>
        <Stack direction='row' spacing={2} justifyContent='space-between'>
        <Typography variant='h2'> Upcoming Events </Typography>
        <Stack direction='row' spacing={3} marginTop='2'>
           <MinimalSelect/>
           <Event/>
        </Stack>
        </Stack>
      </Box>
    </Box>
  )
}

export default TopBar
