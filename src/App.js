import React, { useState, useEffect } from "react";
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
import Result from "./Result";

export default function App() {
  const [expanded, setExpanded] = useState(false);
  const [choose, setChoose] = useState([]);
  const [right, setRight] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [posi, setPosi] = useState(0);
  const [nega, setNega] = useState(0);
  const [score, setScore] = useState(0);
  const [wQues, setWQues] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState([]);

  // Accordian expand
  const handleChange = (open) => (event, isExpanded) => {
    setExpanded(isExpanded ? open : false);
  };

  // click Answer
  const handleAnswerOptionClick = (isCorrect, id, marks, negative, answer) => {
    if (isCorrect) {
      setScore(score + marks);
      setRight(right + 1);
      setPosi(posi + marks);
    } else {
      setScore(score - negative);
      setWrong(wrong + 1);
      setNega(nega + negative);
    }
    if (isCorrect === false) {
      setWQues([...wQues, id]);
    }
    setSelectedAnswer([...selectedAnswer, id]);
    // console.log(answer);
    setChoose((old) => [...old, { choose: answer }]);
  };

  // Use effect
  // useEffect(() => {
    // console.log(wQues);
    // console.log(choose);
    // console.log(selectedAnswer)
  // }, [choose]);

  // Next Page
  const next = () => {
    setPageNumber(pageNumber + 1);
  };

  // Back Page
  const back = () => {
    setPageNumber(pageNumber - 1);
  };

  // Result page
  const [showResult, setshowResult] = useState(false);
  const result = () => {
    return setshowResult(true);
  };

  // Total Marks [reduce method]
  const totalMarks = arrayOfObjects.reduce(
    (prevM, currM) => prevM + currM.marks,
    0
  );

  // Render all questions [slice and map] 
  const [users] = useState(arrayOfObjects.slice(0, arrayOfObjects.length));
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
                        style={{ border: "3px solid", margin: "5px" }}
                        size="small"
                        variant="outlined"
                        color={
                          selectedAnswer.includes(user.qNo) && item.isCorrect
                            ? "success"
                            : selectedAnswer.includes(user.qNo) &&
                              item.isCorrect === false
                            ? "error"
                            : "secondary"
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
                                  user.marks,
                                  user.negative,
                                  item.answer
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

  return (
    <ThemeProvider theme={theme}>
      <Box mb={5}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Typography
              variant="h6"
              onClick={() => window.location.reload()}
              component="div"
              style={{ flexGrow: 1 }}
            >
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

        {showResult ? (
          <Result
            totalNoQuestion={arrayOfObjects.length}
            score={score}
            totalMarks={totalMarks}
            right={right}
            wrong={wrong}
            negative={nega}
            positive={posi}
          />
        ) : (
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
                {pageNumber < arrayOfObjects.length / userPerPage - 1 ? (
                  <Button
                    variant="contained"
                    disabled={selectedAnswer.length < 5 * (pageNumber + 1)}
                    size="large"
                    onClick={next}
                    color="secondary"
                  >
                    Next
                  </Button>
                ) : pageNumber < arrayOfObjects.length / userPerPage ? (
                  <Button
                    variant="contained"
                    disabled={selectedAnswer.length < 5 * (pageNumber + 1)}
                    size="large"
                    onClick={result}
                    color="secondary"
                  >
                    Result
                  </Button>
                ) : null}
              </Box>
            </Paper>
          </Container>
        )}
      </Box>
    </ThemeProvider>
  );
}
