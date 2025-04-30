import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Button,
  CircularProgress,
  Alert
} from '@mui/material';
import axios from 'axios';

function MemberDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [member, setMember] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchMemberDetails();
  }, [id]);

  const fetchMemberDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/members/${id}`);
      setMember(response.data);
      setLoading(false);
    } catch (err) {
      setError('Error fetching member details');
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ mt: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  if (!member) {
    return (
      <Box sx={{ mt: 4 }}>
        <Alert severity="warning">Member not found</Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <img
              src={member.image ? `http://localhost:5000/uploads/${member.image}` : 'https://via.placeholder.com/300'}
              alt={member.name}
              style={{ width: '100%', borderRadius: '8px' }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" component="h1" gutterBottom>
              {member.name}
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              {member.role}
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Typography variant="body1" paragraph>
                <strong>Email:</strong> {member.email}
              </Typography>
              <Typography variant="body1" paragraph>
                <strong>Contact:</strong> {member.contact}
              </Typography>
            </Box>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate('/members')}
              sx={{ mt: 2 }}
            >
              Back to Members List
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}

export default MemberDetails; 