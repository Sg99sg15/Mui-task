import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme';
import { Avatar, AppBar, Box, Toolbar, Typography, IconButton, Container, Paper} from '@mui/material';
import Question from './Question'



export default function MenuAppBar() {
  return (
    <ThemeProvider theme={theme}>
      <Box >
        <AppBar position="static" color='secondary'>
          <Toolbar>
            <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
              Home
            </Typography>
            <Typography variant='h6' mr={5}>
              Score: 0
            </Typography>
            <IconButton>
              <Avatar>S</Avatar>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Container maxWidth="md">
          <Paper mt={5} elevation={5} component={Box} p={2} >
            <Box elevation={3} component={Paper} maxWidth='lg' p={1} textAlign="center" >
              <Typography variant='h5'>
                Quiz
              </Typography>
            </Box>
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />  
          </Paper>
        </Container>



      </Box>
    </ThemeProvider>
  );
}
