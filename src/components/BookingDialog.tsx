import { useState } from 'react';
import { 
  Dialog, DialogTitle, DialogContent, IconButton, TextField, 
  Button, Box, Typography, CircularProgress 
} from '@mui/material';
import { Close, Person, Email, Phone } from '@mui/icons-material';
import emailjs from 'emailjs-com';

interface BookingDialogProps {
  open: boolean;
  onClose: () => void;
  destination: string;
  dates: string;
}

export default function BookingDialog({ open, onClose, destination, dates }: BookingDialogProps) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({ name: '', email: '', phone: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = { name: '', email: '', phone: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      valid = false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      valid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    const bookingData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      destination,
      dates,
      booking_date: new Date().toLocaleString(),
    };
    try {
      // Send email via EmailJS
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      bookingData,
      import.meta.env.VITE_EMAILJS_USER_ID
    );

    // Send data to Google Sheets
    await fetch(import.meta.env.VITE_GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingData),
    });
      onClose();
      alert('Booking confirmed! You will receive a confirmation email.');
      setFormData({ name: '', email: '', phone: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      alert('There was an error while sending the data. Please try again.');
    }
    setLoading(false);
  };

  return (
    <Dialog open={open} onClose={onClose} sx={{ '& .MuiPaper-root': { borderRadius: 3, p: 2, maxWidth: { xs: '100%', sm: '400px', lg: '90vh' } } }}>
      <DialogTitle sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Typography variant="h6" fontWeight={700} sx={{ fontSize: { xs: '1.2rem', sm: '1.5rem' } }}>
          Book Your Trip to {destination}
        </Typography>
        <IconButton onClick={onClose} color="error" disabled={loading}>
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent>
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }} onSubmit={handleSubmit}>
          <Box display="flex" alignItems="center" gap={1}>
            <Person color="primary" />
            <TextField 
              fullWidth 
              label="Full Name" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
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
              error={!!errors.email}
              helperText={errors.email}
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
              error={!!errors.phone}
              helperText={errors.phone}
              required 
            />
          </Box>

          <Button 
            type="submit" 
            variant="contained" 
            size="large" 
            sx={{ mt: 2, fontWeight: 600, py: 1.5, fontSize: { xs: '0.875rem', sm: '1rem' } }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Confirm Booking'}
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
