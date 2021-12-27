import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Theme";
import {
  Avatar,
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Container,
  Paper,
} from "@mui/material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControlLabel,
  Radio,
  RadioGroup,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import arrayOfObjects from "./Array";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({

});

export default function App() {
  const classes = useStyle();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (open) => (event, isExpanded) => {
    setExpanded(isExpanded ? open : false);
  };

  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const handleAnswerOptionClick = (isCorrect, id, marks) => {
    if (isCorrect) {
      setScore(score + marks);
    }
    setSelectedAnswer([...selectedAnswer, id]);
  };
 

  const [users, setUsers] = useState(arrayOfObjects.slice(0, arrayOfObjects.length));
  const [pageNumber, setPageNumber] = useState(0);
  const userPerPage = 5;
  const pageVisited = pageNumber * userPerPage;
  const displayQues = users
    .slice(pageVisited, pageVisited + userPerPage)
    .map((user, index) => {
      return (
        <>
          <Accordion
            expanded={expanded === index}
            onChange={handleChange(index)}
            key={index}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Question {user.qNo}:</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{user.ques}</Typography>
              <Box
                maxWidth="lg"
                mt={5}
                display="flex"
                justifyContent="space-around"
              >
                <RadioGroup name="same">
                  {user.options.map((item, index) => {
                    return (
                      <Button
                      style={{border:'3px solid', margin:'5px'}}
                      size="small"
                        variant="outlined"
                        color={
                          selectedAnswer.includes(user.qNo) && item.isCorrect
                            ? "success"
                            : selectedAnswer.includes(user.qNo) &&
                              item.isCorrect == false
                            ? "error"
                            : "primary"
                        }
                        key={index}
                      >
                        <FormControlLabel
                          value={item.answer}
                          control={
                            <Radio
                              disabled={selectedAnswer.includes(user.qNo)}
                              onClick={() =>
                                handleAnswerOptionClick(
                                  item.isCorrect,
                                  user.qNo,
                                  user.marks
                                )
                              }
                              color="secondary"
                            />
                          }
                          label={item.answer}
                        />
                      </Button>
                    );
                  })}
                </RadioGroup>
              </Box>
            </AccordionDetails>
          </Accordion>
        </>
      );
    });

  // NExt
  const next = () => {
    setPageNumber(pageNumber + 1);
  };
  const reload = () => {
    setPageNumber(0);
  };
  const back = () => {
    setPageNumber(pageNumber - 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box mb={5}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
              Home
            </Typography>
            <Typography variant="h6" mr={5}>
              Score: {score}
            </Typography>
            <IconButton>
              <Avatar>S</Avatar>
            </IconButton>
          </Toolbar>
        </AppBar>

        <Container maxWidth="md">
          <Paper mt={5} elevation={5} component={Box} p={2}>
            <Box
              elevation={3}
              component={Paper}
              maxWidth="lg"
              p={1}
              textAlign="center"
            >
              <Typography variant="h5">Quiz</Typography>
            </Box>
            {displayQues}
            <Box display="flex" style={{ justifyContent: "flex-end" }} p={2}>
              {pageNumber >= 1 ? (
                <Button
                  variant="contained"
                  size="large"
                  onClick={back}
                  color="secondary" 
                >
                  Back
                </Button>
              ) : null}
              {pageNumber < ((arrayOfObjects.length/userPerPage)-1) ? (
                <Button
                  variant="contained"
                  disabled={selectedAnswer.length < 5*(pageNumber +1)}
                  size="large"
                  onClick={next}
                  color="secondary"
                >
                  Next
                </Button>
              ) : (
                <Button
                  variant="contained"
                  size="large"
                  onClick={reload}
                  color="secondary"
                >
                  Back to First Page
                </Button>
              )}
            </Box>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
