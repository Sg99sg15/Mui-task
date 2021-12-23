import React, {useState} from 'react'
import {  Accordion, AccordionDetails, AccordionSummary, FormControlLabel,  Radio, RadioGroup, Box,Typography,Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import arrayOfObjects from './Array';

function Question(name) {

  const [expanded, setExpanded] = useState(false);

  const handleChange = (open) => (event, isExpanded) => {
    setExpanded(isExpanded ? open : false);
  };


    return (
      
        arrayOfObjects.map(({ qNo, ques }, index) =>
        (
          <>
            <Accordion expanded={expanded === index} onChange={handleChange(index)}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>Question {user.qNoNo}:</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {ques}
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
        )
      
    )
}

export default Question
