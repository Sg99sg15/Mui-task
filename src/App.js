import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Theme';
import { Avatar, AppBar, Box, Toolbar, Typography, IconButton, Container, Paper } from '@mui/material';
import { Accordion, AccordionDetails, AccordionSummary, FormControlLabel, Radio, RadioGroup, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ReactPaginate from 'react-paginate';
import arrayOfObjects from './Array';



export default function MenuAppBar() {

  const [expanded, setExpanded] = useState(false);

  const handleChange = (open) => (event, isExpanded) => {
    setExpanded(isExpanded ? open : false);
  };


	const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 10);
		}
  }




  const [users, setUsers] = useState(arrayOfObjects.slice(0, 20));
  const [pageNumber, setPageNumber] = useState(0);
  const userPerPage = 5;
  const pageVisited = pageNumber * userPerPage;
  const displayQues = users.slice(pageVisited, pageVisited + userPerPage)
    .map((user, index) => {
      return (
        <>
          <Accordion expanded={expanded === index} onChange={handleChange(index)} >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Question {user.qNo}:</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {user.ques}
              </Typography>
      
                <Box maxWidth='lg' mt={5} display='flex' justifyContent='space-around'>
                <RadioGroup name='same'>  
{user.options.map((item)=>{
            return(
                 
              <Button variant='outlined' color='secondary'>
                    <FormControlLabel value={item.answer} onClick={() => handleAnswerOptionClick((index)=>
                    item.isCorrect(index))}  control={<Radio color='secondary' />} label={item.answer} />
                  </Button>

            )}

)}
              </RadioGroup>
                  {/* <Button variant='outlined' color='secondary'>
                    <FormControlLabel value="female" control={<Radio color='secondary' />} label={user.options[1].answer} />
                  </Button>
                </Box>
                <Box maxWidth='lg' mt={5} mb={5} display='flex' justifyContent='space-around'>

                  <Button variant='outlined' color='secondary'>
                    <FormControlLabel value="fale" control={<Radio color='secondary' />} label={user.options[2].answer} />
                  </Button>
                  <Button variant='outlined' color='secondary'>
                    <FormControlLabel value="male" control={<Radio color='secondary' />} label={user.options[3].answer} />
                  </Button> */}
                </Box>
            </AccordionDetails>
          </Accordion>
        </>
      )
    })

  // NExt
  const next = () => {
    setPageNumber(pageNumber + 1)
  }
  const reload = () => {
    setPageNumber(0)
  }
  const back = () =>{
    setPageNumber(pageNumber - 1)
  }



  return (
    <ThemeProvider theme={theme}>
      <Box mb={5}>
        <AppBar position="static" color='secondary'>
          <Toolbar>
            <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
              Home
            </Typography>
            <Typography variant='h6' mr={5}>
              Score: {score}
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
            {displayQues}
            <Box display='flex' style={{ justifyContent: 'flex-end' }}  p={2}>
            {(pageNumber >= 1) ? 
              <Button variant='contained' size='large' onClick={back} color='secondary'>Back</Button>
             : 
              null
        
            }
            {(pageNumber < 3) ?
              <Button variant='contained' size='large' onClick={next} color='secondary'>Next</Button>
            : 
              <Button variant='contained' size='large' onClick={reload} color='secondary'>Back to First Page</Button>
            }
            </Box>

          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
