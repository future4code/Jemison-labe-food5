import React from 'react'

import { Container, Box, Typography, Divider} from '@mui/material'

export const Subtitulo = (props) => {
  return (
    <Container>
            <Box marginY={'2.5%'}>
              <Typography marginBottom={'1.25%'} color='#000' component='h2' variant="subtitle1">{props.Subtitulo}</Typography>
              <Divider color='#000' />
            </Box>
    </Container>
  )
}
