import { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { LocationOn, CalendarMonth, AttachMoney } from '@mui/icons-material';
import { Trip } from '../interfaces/types';
import BookingDialog from './BookingDialog';

interface TripCardProps {
  trip: Trip;
}

export default function TripCard({ trip }: TripCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <Card sx={{ 
      height: '100%',
      transition: 'transform 0.3s',
      '&:hover': { transform: 'translateY(-5px)' }
    }}>
      <CardMedia
        component="img"
        height="240"
        image={trip.image}
        alt={trip.destination}
        sx={{ objectPosition: 'center' }}
      />
      
      <CardContent>
        <Box display="flex" alignItems="center" mb={2}>
          <LocationOn color="primary" sx={{ mr: 1 }} />
          <Typography variant="h6" fontWeight={600}>
            {trip.destination}
          </Typography>
        </Box>

        <Box display="flex" gap={3} mb={2}>
          <Box display="flex" alignItems="center">
            <CalendarMonth sx={{ mr: 1, color: 'text.secondary' }} />
            <Typography variant="body2">{trip.dates}</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <AttachMoney sx={{ mr: 1, color: 'text.secondary' }} />
            <Typography variant="body2">{trip.price}</Typography>
          </Box>
        </Box>

        <Button 
          fullWidth 
          variant="contained"
          onClick={() => setOpen(true)}
          sx={{ 
            mt: 2,
            py: 1.5,
            fontWeight: 600,
            '&:hover': { backgroundColor: 'primary.dark' }
          }}
        >
          Book Now
        </Button>
      </CardContent>

      {/* Booking Dialog Component */}
      <BookingDialog open={open} onClose={() => setOpen(false)} destination={trip.destination} />
    </Card>
  );
}
