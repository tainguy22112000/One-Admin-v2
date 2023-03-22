import { Center, Grid, Paper } from '@mantine/core'
import React from 'react'
import { Outlet } from 'react-router-dom'

const HomePage = () => {
  return (
    <Center sx={{ width: '100%' }} mt={20}>
      <Paper shadow='lg' p={10} radius='md' sx={{ width: '90%', height: '50vh' }} withBorder></Paper>
    </Center>
  )
}

export default HomePage
