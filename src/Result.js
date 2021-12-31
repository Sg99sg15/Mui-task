// import {
//   Table,
//   Paper,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TableBody,
//   TableCell,
//   Container,
//   Radio,
//   Button,
//   RadioGroup,
//   Box,
//   Typography,
//   AccordionDetails,
//   AccordionSummary,
//   FormControlLabel,
//   Accordion,
// } from "@mui/material";
// import { GridExpandMoreIcon } from "@mui/x-data-grid";
// import React from "react";










// function Result(props) {
  
// const ans = props.choose
// .filter((data) => (data.qn === props.choose))
// .map((user, index) => (
//   <>
//     <Accordion
//       expanded={props.expanded === index}
//       onChange={props.handleChange(index)}
//       key={index}
//     >
//       <AccordionSummary
//         expandIcon={<GridExpandMoreIcon />}
//         aria-controls="panel1a-content"
//         id="panel1a-header"
//       >
//         <Typography>Question {user.qNo}:</Typography>
//       </AccordionSummary>
//       <AccordionDetails>
//         <Typography>{user.ques}</Typography>
//         <Box
//           maxWidth="lg"
//           mt={5}
//           display="flex"
//           justifyContent="space-around"
//         >
//           <RadioGroup name="same">
//             {user.options.map((item, index) => {
//               return (
//                 <Button
//                   style={{ border: "3px solid", margin: "5px" }}
//                   size="small"
//                   variant="outlined"
//                   color={
//                     props.selectedAnswer.includes(user.qNo) && item.isCorrect
//                       ? "success"
//                       : props.selectedAnswer.includes(user.qNo) &&
//                         item.isCorrect === false
//                       ? "error"
//                       : "secondary"
//                   }
//                   key={index}
//                 >
//                   <FormControlLabel
//                     value={item.answer}
//                     control={
//                       <Radio
//                         disabled={props.selectedAnswer.includes(user.qNo)}
//                         onClick={() =>
//                           props.handleAnswerOptionClick(
//                             item.isCorrect,
//                             user.qNo,
//                             user.marks,
//                             user.negative,
//                             item.answer
//                           )
//                         }
//                         color="secondary"
//                       />
//                     }
//                     label={item.answer}
//                   />
//                 </Button>
//               );
//             })}
//           </RadioGroup>
//         </Box>
//       </AccordionDetails>
//     </Accordion>
//   </>
// ));
//   return (
//     <>
//       <Container sx={{ marginTop: "5%", padding: '2%' }} variant="outlined"  component={Paper}>
//         <TableContainer component={Paper}>
//           <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
//             <TableHead>
//               <TableRow>
//                 <TableCell align="center">Total Number of Questions</TableCell>
//                 <TableCell align="center">Right Answer</TableCell>
//                 <TableCell align="center">Wrong Answer</TableCell>
//                 <TableCell align="center">Postive Marks</TableCell>
//                 <TableCell align="center">Negative Marks</TableCell>
//                 <TableCell align="center">Marks Obtained</TableCell>
//                 <TableCell align="center">Total Marks</TableCell>
//               </TableRow>
//             </TableHead>    
//             <TableBody>
//               <TableRow>
//                 <TableCell align="center">{props.totalNoQuestion}</TableCell>
//                 <TableCell align="center">{props.right}</TableCell>
//                 <TableCell align="center">{props.wrong}</TableCell>
//                 <TableCell align="center">{props.positive}</TableCell>
//                 <TableCell align="center">{props.negative}</TableCell>
//                 <TableCell align="center">{props.score}</TableCell>
//                 <TableCell align="center">{props.totalMarks}</TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Container>
//       <Container sx={{ marginTop: "2%", padding: '2%' }} variant="outlined"  component={Paper}>
//       {ans}
//       </Container>
//     </>
//   );
// }

// export default Result;








//  <Result
 //   totalNoQuestion={arrayOfObjects.length}
 //   score={score}
 //   totalMarks={totalMarks}
 //   right={right}
 //   wrong={wrong}
 //   negative={nega}
 //   positive={posi}
 //   handleAnswerOptionClick = {handleAnswerOptionClick}
 //   selectedAnswer = {selectedAnswer}
 //   handleChange= {handleChange}
 // expanded = {expanded}
 // choose = {choose}
 // /> 