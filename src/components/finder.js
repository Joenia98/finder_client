import React from "react";
import { gql, useLazyQuery } from "@apollo/client";
import Employeesmod  from "./ModifieEmployees";
import {
  Box,
  CircularProgress,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function EployeeFinder(employee,find) {

    
    switch (find) {
        case 1:
            
            break;
    
        default:
            break;
    }
  
    return (
      <Grid container spacing={2} justifyContent="center">
       
        <Grid item xs={10}>
          {
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 900 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Name</TableCell>
                    <TableCell align="center">Last Name</TableCell>
                    <TableCell align="center">E-mail</TableCell>
                    <TableCell align="center">Phone Number</TableCell>
                    <TableCell align="center">Nationality</TableCell>
                    <TableCell align="center">More</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data &&
                    data.getAllEmployees.map((employee) => (
                      <TableRow
                        key={employee.id}
                        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      >
                        <TableCell component="th" scope="row" align="center">
                          {employee.first_name}
                        </TableCell>
                        <TableCell align="center">
                          {employee.last_name}
                        </TableCell>
                        <TableCell align="center">
                          {employee.email}
                        </TableCell>
                        <TableCell align="center">
                          {employee.phone}
                        </TableCell>
                        <TableCell align="center">
                          {employee.nationality}
                        </TableCell>
                        <TableCell align="center">
                          <Employeesmod value={employee}/>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          }
        </Grid>
      </Grid>
    );
  }
  
  export default EployeeFinder;