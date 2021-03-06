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
  TableCell,
  TableRow,
  TableHead,
  Table,
  TableContainer,
  TableBody,
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
import { GridExpandMoreIcon } from "@mui/x-data-grid";

export default function App() {
  const [expanded, setExpanded] = useState(false);
  const [showResult, setshowResult] = useState(false);
  const [choose, setChoose] = useState([]);
  const [right, setRight] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [posi, setPosi] = useState(0);
  const [nega, setNega] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState([]);

  // Accordian expand
  const handleChange = (open) => (event, isExpanded) => {
    setExpanded(isExpanded ? open : false);
  };

  // click to show Answer
  const handleAnswerOptionClick = (isCorrect, id, answer, all) => {
    if (isCorrect) {
      setScore(score + all.marks);
      setRight(right + 1);
      setPosi(posi + all.marks);
    } 
    else {
      setScore(score - all.negative);
      setWrong(wrong + 1);
      setNega(nega + all.negative);
  
      let rAns = all.options.filter(function (element) {
        return (element.isCorrect == true);
    }).map(function(el) {
    return el.answer;
    })
      setChoose([
        ...choose,
        { qn: id, question: all.ques, ans: answer, right: rAns}
      ]);
    }
    setSelectedAnswer([...selectedAnswer, id]);
  };
  const ans = choose.map((user, index) => (
    <>
      <Accordion
        expanded={expanded === index}
        onChange={handleChange(index)}
        key={index}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="pan1a-content"
          id="pan1a-header"
        >
          <Typography>Question {user.qn}:</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{user.question}</Typography>
          <Box
            maxWidth="lg"
            mt={5}
            display="flex"
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Typography>Your selected answer :</Typography>
            <RadioGroup name="same">
              <Button
                style={{ border: "3px solid", margin: "5px" }}
                size="small"
                variant="outlined"
                color="error"
                key={index}
              >
                <FormControlLabel
                  value={user.ans}
                  control={<Radio disabled color="secondary" />}
                  label={user.ans}
                />
              </Button>
            </RadioGroup>
            <Typography>Right answer is:</Typography>
            <RadioGroup name="same">
              <Button
                style={{ border: "3px solid", margin: "5px" }}
                size="small"
                variant="outlined"
                color="success"
                key={index}
              >
                <FormControlLabel
                  value={user.right}
                  control={<Radio disabled color="secondary" />}
                  label={user.right}
                />
              </Button>
            </RadioGroup>
          </Box>
        </AccordionDetails>
      </Accordion>
    </>
  ));

 
  // Next Page
  const next = () => {
    setPageNumber(pageNumber + 1);
  };

  // Back Page
  const back = () => {
    setPageNumber(pageNumber - 1);
  };

  // Result page
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
                                  item.answer,
                                  user
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
          <>
            <Container
              sx={{ marginTop: "5%", padding: "2%" }}
              variant="outlined"
              component={Paper}
            >
              <TableContainer component={Paper}>
                <Table
                  sx={{ minWidth: 650 }}
                  size="small"
                  aria-label="a dense table"
                >
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">
                        Total Number of Questions
                      </TableCell>
                      <TableCell align="center">Right Answer</TableCell>
                      <TableCell align="center">Wrong Answer</TableCell>
                      <TableCell align="center">Postive Marks</TableCell>
                      <TableCell align="center">Negative Marks</TableCell>
                      <TableCell align="center">Marks Obtained</TableCell>
                      <TableCell align="center">Total Marks</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell align="center">
                        {arrayOfObjects.length}
                      </TableCell>
                      <TableCell align="center">{right}</TableCell>
                      <TableCell align="center">{wrong}</TableCell>
                      <TableCell align="center">{posi}</TableCell>
                      <TableCell align="center">{nega}</TableCell>
                      <TableCell align="center">{score}</TableCell>
                      <TableCell align="center">{totalMarks}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Container>
            <Container
              sx={{ marginTop: "2%", padding: "2%" }}
              variant="outlined"
              component={Paper}
            >
              {ans}
            </Container>
          </>
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
