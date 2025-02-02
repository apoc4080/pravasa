// components/Footer.tsx
import { Box, Typography, Link } from '@mui/material';
import { Favorite } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: 'primary.main', 
        color: 'white',
        py: 6,
        position: 'relative'
      }}
    >
      <Box textAlign="center">
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
          Happy Pravasa
        </Typography>
        
        <Typography variant="body1" paragraph>
          Creating unforgettable travel experiences since 2023
        </Typography>

        <Box display="flex" justifyContent="center" gap={3} mt={2}>
          <Link href="#" color="inherit">Terms</Link>
          <Link href="#" color="inherit">Privacy</Link>
          <Link href="#" color="inherit">Careers</Link>
        </Box>

        <Typography variant="body2" sx={{ mt: 4 }}>
          Made with <Favorite fontSize="small" /> in India
        </Typography>
      </Box>
    </Box>
  );
}