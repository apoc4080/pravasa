import { useState } from 'react';
import { 
  Dialog, DialogTitle, DialogContent, IconButton, TextField, 
  Button, Box, Typography 
} from '@mui/material';
import { Close, Person, Email, Phone } from '@mui/icons-material';

interface BookingDialogProps {
  open: boolean;
  onClose: () => void;
  destination: string;
}

export default function BookingDialog({ open, onClose, destination }: BookingDialogProps) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Dialog open={open} onClose={onClose} sx={{ '& .MuiPaper-root': { borderRadius: 3, p: 2 } }}>
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h6" fontWeight={700}>Book Your Trip to {destination}</Typography>
        <IconButton onClick={onClose} color="error">
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box display="flex" alignItems="center" gap={1}>
            <Person color="primary" />
            <TextField 
              fullWidth 
              label="Full Name" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              required 
            />
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <Email color="primary" />
            <TextField 
              fullWidth 
              label="Email" 
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </Box>

          <Box display="flex" alignItems="center" gap={1}>
            <Phone color="primary" />
            <TextField 
              fullWidth 
              label="Phone" 
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required 
            />
          </Box>

          <Button 
            type="submit" 
            variant="contained" 
            size="large" 
            sx={{ mt: 2, fontWeight: 600 }}
          >
            Confirm Booking
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
