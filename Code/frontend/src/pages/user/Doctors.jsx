import React, { useState, useEffect } from 'react';
import { Box, Typography, TextField, MenuItem } from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';
import { getDoctors, getRecommendedDoctors } from '../../services/doctor.service';
import DoctorCard from '../../components/user/DoctorCard';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [specialization, setSpecialization] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await getDoctors();
        setDoctors(data);
      } catch (error) {
        console.error('Failed to fetch doctors:', error);
      }
    };
    fetchDoctors();
  }, []);

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = `${doctor.user.firstName} ${doctor.user.lastName} ${doctor.specialization}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    
    const matchesSpecialization = !specialization || 
      doctor.specialization === specialization;
    
    return matchesSearch && matchesSpecialization;
  });

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Find Doctors
      </Typography>
      
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <TextField
          label="Search Doctors"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <TextField
          select
          label="Specialization"
          variant="outlined"
          sx={{ minWidth: 200 }}
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
        >
          <MenuItem value="">All Specializations</MenuItem>
          <MenuItem value="Cardiologist">Cardiologist</MenuItem>
          <MenuItem value="Dermatologist">Dermatologist</MenuItem>
          <MenuItem value="Neurologist">Neurologist</MenuItem>
          <MenuItem value="Pediatrician">Pediatrician</MenuItem>
        </TextField>
      </Box>
      
      {filteredDoctors.map(doctor => (
        <DoctorCard 
          key={doctor.id} 
          doctor={doctor}
          onBookAppointment={() => console.log('Book appointment:', doctor.id)}
        />
      ))}
    </Box>
  );
};

export default Doctors;