import React, { useState, useEffect } from 'react';
import { Box, Typography, Tabs, Tab } from '@mui/material';
import { useAuth } from '../../contexts/AuthContext';
import { getAppointments } from '../../services/appointment.service';
import AppointmentCard from '../../components/user/AppointmentCard';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [tabValue, setTabValue] = useState(0);
  const { user } = useAuth();

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const data = await getAppointments(user.id);
        setAppointments(data);
      } catch (error) {
        console.error('Failed to fetch appointments:', error);
      }
    };
    fetchAppointments();
  }, [user.id]);

  const filteredAppointments = appointments.filter(appt => {
    if (tabValue === 0) return true; // All
    if (tabValue === 1) return appt.status === 'UPCOMING';
    if (tabValue === 2) return appt.status === 'COMPLETED';
    return false;
  });

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        My Appointments
      </Typography>
      
      <Tabs value={tabValue} onChange={(e, newValue) => setTabValue(newValue)} sx={{ mb: 3 }}>
        <Tab label="All" />
        <Tab label="Upcoming" />
        <Tab label="Completed" />
      </Tabs>
      
      {filteredAppointments.length === 0 ? (
        <Typography>No appointments found</Typography>
      ) : (
        filteredAppointments.map(appointment => (
          <AppointmentCard 
            key={appointment.id} 
            appointment={appointment} 
          />
        ))
      )}
    </Box>
  );
};

export default Appointments;