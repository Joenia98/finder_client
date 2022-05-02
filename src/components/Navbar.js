import { AppBar, Box, Container, Toolbar, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import AccountMenu from "./Usermenu"

export default function Employeesmod() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
        <Container>
          <Toolbar>
          <Grid container spacing={1}>
          <Grid item xs={3}>
            <Typography mt={.5} variant="h6" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: "none" }}>
                Employee Lists Project
              </Link>
            </Typography>
            </Grid>
            <Grid item xs={7}></Grid>
            <Grid item xs={1} mt={1}>
                <AccountMenu/>
            </Grid>
            <Grid item xs={1}></Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
