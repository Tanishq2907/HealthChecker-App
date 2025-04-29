import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField } from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';
import { getPatientHistory } from '../../services/doctor.service';

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const data = await getPatientHistory(user.id);
        setPatients(data);
      } catch (error) {
        console.error('Failed to fetch patients:', error);
      }
    };
    fetchPatients();
  }, [user.id]);

  const filteredPatients = patients.filter(patient =>
    `${patient.firstName} ${patient.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Patient History
      </Typography>
      
      <TextField
        label="Search Patients"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      {filteredPatients.map((patient) => (
        <Box key={patient.id} sx={{ mb: 3, p: 2, border: '1px solid #eee', borderRadius: 2 }}>
          <Typography variant="h6">
            {patient.firstName} {patient.lastName}
          </Typography>
          <Typography color="text.secondary">
            Last visit: {patient.lastAppointmentDate}
          </Typography>
          <Typography paragraph sx={{ mt: 1 }}>
            {patient.medicalHistory}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Patients;