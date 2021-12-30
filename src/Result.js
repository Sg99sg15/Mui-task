import {
  Table,
  Paper,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Container,
} from "@mui/material";
import React from "react";

function Result(props) {
  return (
    <>
      <Container sx={{ marginTop: "5%", padding: '2%' }} variant="outlined"  component={Paper}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Total Number of Questions</TableCell>
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
                <TableCell align="center">{props.totalNoQuestion}</TableCell>
                <TableCell align="center">{props.right}</TableCell>
                <TableCell align="center">{props.wrong}</TableCell>
                <TableCell align="center">{props.positive}</TableCell>
                <TableCell align="center">{props.negative}</TableCell>
                <TableCell align="center">{props.score}</TableCell>
                <TableCell align="center">{props.totalMarks}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
      <Container sx={{ marginTop: "2%", padding: '2%' }} variant="outlined"  component={Paper}>
      </Container>
    </>
  );
}

export default Result;
