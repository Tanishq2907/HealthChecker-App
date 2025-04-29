import React from 'react';
import { Card, CardContent, Typography, Button, Stack, Rating, Chip } from '@mui/material';

const DoctorCard = ({ doctor, onBookAppointment }) => {
  return (
    <Card sx={{ mb: 3, borderRadius: 3 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          Dr. {doctor.user.firstName} {doctor.user.lastName}
        </Typography>
        <Typography color="primary" gutterBottom>
          {doctor.specialization}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
          <Rating value={4.5} precision={0.5} readOnly />
          <Typography>(24 reviews)</Typography>
        </Stack>
        <Typography paragraph>
          {doctor.bio}
        </Typography>
        <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
          <Chip label={`${doctor.experience} years experience`} />
          <Chip label={`$${doctor.consultationFee}/consultation`} />
        </Stack>
        <Button
          variant="contained"
          fullWidth
          onClick={() => onBookAppointment(doctor)}
        >
          Book Appointment
        </Button>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;