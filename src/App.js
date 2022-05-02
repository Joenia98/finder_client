import React, { useState } from "react";
import { BrowserRouter as BWR, Routes, Route} from "react-router-dom";

import EmployeesList from "./components/EmployeeLists";
import Employeesmod from "./components/ModifieEmployees";
//import EployeeFinder from "./components/finder"
import Menu from "./components/Navbar";

import { Container,  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select, Grid } from "@mui/material";


function App() {
  const [filter, setfilter] = useState("");
  const [search, setSearch] = useState("");
  const [find, setFind] = useState({filter:"",search:""});

  const handleChange = (event) => {
    setfilter(event.target.value);
  };
  
  const handleSearch = (event)=>{
    setSearch(event.target.value);
    console.log(search);
    if(search !=="" && filter !==""){
        find.filter=filter;
        find.search=search;
        setFind(find);
        //return <Route exact path="/finder" element={<EployeeFinder value={find}/>}/>
      }
  }
  return (
    <BWR>
      <Menu/>
      <Container component="div" sx={{whiteSpace: 'normal',my: 2,p: 1}}>
      <Grid container spacing={2}>
      <Grid item xs={2}></Grid>
      <Grid item xs={3}>
        <TextField fullWidth 
          id="standard-basic"
          label="Search"
          variant="standard"
          sx={{ m: 1}}
          onChange ={handleSearch}
        />
        </Grid>
        <Grid item xs={3}>
        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-autowidth-label">by</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={filter}
            onChange={handleChange}
            autoWidth
            label="Filter by"
          >
            <MenuItem value={0}>Name</MenuItem>
            <MenuItem value={1}>Last Name</MenuItem>
            <MenuItem value={2}>E-mail</MenuItem>
            <MenuItem value={3}>Phone Number</MenuItem>
            <MenuItem value={4}>Nationality</MenuItem>
          </Select>
        </FormControl>
        </Grid>
        </Grid>
        <Routes>
          <Route exact path="/" element={<EmployeesList/>} />
          <Route exact path="/modifie" element={<Employeesmod />} />
        </Routes>
      </Container>
    </BWR>
  );
}

export default App;
