import React from 'react';
import { Box, Typography } from '@mui/material';
import AvailabilityCalendar from '../../components/doctor/AvailabilityCalendar';

const Calendar = () => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        My Availability Calendar
      </Typography>
      <Typography paragraph color="text.secondary">
        Set your available time slots for appointments
      </Typography>
      <AvailabilityCalendar />
    </Box>
  );
};

export default Calendar;