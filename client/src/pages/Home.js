import React from 'react';
import { Typography, Button, Box, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Box sx={{ textAlign: 'center', mt: 8 }}>
      <Paper 
        elevation={3} 
        sx={{ 
          p: 6, 
          maxWidth: 600, 
          mx: 'auto',
          background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
          border: '1px solid rgba(26, 35, 126, 0.1)'
        }}
      >
        <Typography 
          variant="h3" 
          component="h1" 
          gutterBottom
          sx={{ 
            color: 'primary.main',
            fontWeight: 'bold',
            mb: 3
          }}
        >
          Welcome to SSM Team Management
        </Typography>
        <Typography 
          variant="h5" 
          component="h2" 
          gutterBottom 
          color="text.secondary"
          sx={{ mb: 4 }}
        >
          Manage your team members efficiently
        </Typography>
        <Box sx={{ mt: 4, display: 'flex', gap: 3, justifyContent: 'center' }}>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/add"
            size="large"
            sx={{ 
              px: 4,
              py: 1.5,
              fontSize: '1.1rem'
            }}
          >
            Add New Member
          </Button>
          <Button
            variant="outlined"
            color="primary"
            component={Link}
            to="/members"
            size="large"
            sx={{ 
              px: 4,
              py: 1.5,
              fontSize: '1.1rem',
              borderWidth: 2,
              '&:hover': {
                borderWidth: 2
              }
            }}
          >
            View Team Members
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default Home; 