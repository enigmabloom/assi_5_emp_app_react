import { Box, TextField, Typography, Button } from '@mui/material';
import React from 'react';

import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid2';

const Emp_form = () => {
  return (
    <Box sx={{ flexGrow: 1, marginTop: '1%', marginLeft: '20%', width: '30%' }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align="left">
            EmployeeForm
          </Typography>
      <Grid container spacing={2}>
  
        <Grid item xs={12} sm={6}>
          <TextField fullWidth variant="outlined" label="Name" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth variant="outlined" label="Designation" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth variant="outlined" label="Location" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField fullWidth variant="outlined" label="Salary" />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained">Submit</Button>
        </Grid>
        <Grid item xs={12}>
          
        </Grid>
      </Grid>
      <Typography style={{ color: "darkblue" }}>
            <Link to="/" style={{ color: 'darkblue', textDecoration: 'none' }}>Back to Home</Link>
          </Typography>
    </Box>
  );
};

export default Emp_form;
