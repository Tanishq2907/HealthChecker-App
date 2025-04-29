import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';

const locales = {
  'en-US': require('date-fns/locale/en-US'),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const AvailabilityCalendar = () => {
  const [events, setEvents] = useState([]);
  const [open, setOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: 'Available',
    start: new Date(),
    end: new Date(),
  });

  const handleSelectSlot = (slotInfo) => {
    setNewEvent({
      title: 'Available',
      start: slotInfo.start,
      end: slotInfo.end,
    });
    setOpen(true);
  };

  const handleSave = () => {
    setEvents([...events, newEvent]);
    setOpen(false);
  };

  return (
    <div style={{ height: 600 }}>
      <Button
        startIcon={<AddIcon />}
        variant="contained"
        onClick={() => setOpen(true)}
        sx={{ mb: 2 }}
      >
        Add Availability
      </Button>
      
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        selectable
        onSelectSlot={handleSelectSlot}
        defaultView="week"
        min={new Date(0, 0, 0, 8, 0, 0)}
        max={new Date(0, 0, 0, 20, 0, 0)}
      />

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add Availability Slot</DialogTitle>
        <DialogContent>
          <p>
            {format(newEvent.start, 'PPpp')} - {format(newEvent.end, 'PPpp')}
          </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={handleSave} color="primary">Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AvailabilityCalendar;