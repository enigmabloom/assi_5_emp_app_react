import { AppBar, Box, Button, Card, CardContent, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid2';

const Home = () => {
  const [employees, setEmployees] = useState([]);


  useEffect(() => {
    const fetchEmployees = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setEmployees(data);
    };
    
    fetchEmployees();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align="left">
            Employee Dashboard
          </Typography>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="/form" style={{ color: 'white', textDecoration: 'none' }}>
          <Button color="inherit">Employee form</Button></Link>
        </Toolbar>
      </AppBar>

      <Box sx={{ marginTop: '64px' }} />
      
      
      <Grid container spacing={3} sx={{ padding: '20px' }}>
        {employees.map((employee) => (
          <Grid item xs={12} sm={6} md={4} key={employee.id}>
            <Card>
              <CardContent>
                <Typography variant="h4">{employee.name}</Typography>
                <Typography variant="body2">{employee.email}</Typography>
                <Typography variant="h6">{employee.username}</Typography>
            
                <Typography variant="body2">Street: {employee.address.street}</Typography>
                <Typography variant="body2">City: {employee.address.city}</Typography>
                <Typography variant="body2">Zipcode: {employee.address.zipcode}</Typography>
                <Typography variant="h6">PH NO:{employee.phone}</Typography>
                <Typography variant="h6">{employee.website}</Typography>
                <Typography variant="body2">Company: {employee.company.name}</Typography>
                <Typography variant="body2">CatchPhrase: {employee.company.catchPhrase}</Typography>
                <Typography variant="body2">BS: {employee.company.bs}</Typography>
  
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
