import React from 'react'
import {  Accordion, AccordionDetails, AccordionSummary, FormControlLabel,  Radio, RadioGroup, Box,Typography,Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



function Question() {
    return (
        <>
             <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Question 1:</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  What are multiple-choice questions?
                </Typography>
                <RadioGroup>
                  <Box maxWidth='lg' mt={5} display='flex' justifyContent='space-around'>

                    <Button variant='outlined' color='secondary'>
                      <FormControlLabel value="fema" control={<Radio color='secondary' />} label="Option - A" />
                    </Button>
                    <Button variant='outlined' color='secondary'>
                      <FormControlLabel value="female" control={<Radio color='secondary' />} label="Option - A" />
                    </Button>
                  </Box>
                  <Box maxWidth='lg' mt={5} mb={5} display='flex' justifyContent='space-around'>

                    <Button variant='outlined' color='secondary'>
                      <FormControlLabel value="fale" control={<Radio color='secondary' />} label="Option - A" />
                    </Button>
                    <Button variant='outlined' color='secondary'>
                      <FormControlLabel value="male" control={<Radio color='secondary' />} label="Option - A" />
                    </Button>
                  </Box>
                </RadioGroup>
              </AccordionDetails>
            </Accordion>
        </>
    )
}

export default Question
