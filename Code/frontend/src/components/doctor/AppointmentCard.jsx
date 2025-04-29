import React from 'react';
import { Card, CardContent, Typography, Button, Stack, Chip } from '@mui/material';
import { format } from 'date-fns';

const AppointmentCard = ({ appointment, onAccept, onReject }) => {
  return (
    <Card sx={{ mb: 2, borderRadius: 2 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {appointment.user.firstName} {appointment.user.lastName}
        </Typography>
        <Typography color="text.secondary" gutterBottom>
          {format(new Date(appointment.scheduledTime), 'PPpp')}
        </Typography>
        <Typography paragraph>
          Symptoms: {appointment.notes}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
          <Chip
            label={appointment.status}
            color={
              appointment.status === 'CONFIRMED' ? 'success' :
              appointment.status === 'PENDING' ? 'warning' : 'error'
            }
          />
        </Stack>
        {appointment.status === 'PENDING' && (
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              color="success"
              onClick={() => onAccept(appointment.id)}
            >
              Accept
            </Button>
            <Button
              variant="outlined"
              color="error"
              onClick={() => onReject(appointment.id)}
            >
              Reject
            </Button>
          </Stack>
        )}
      </CardContent>
    </Card>
  );
};

export default AppointmentCard;