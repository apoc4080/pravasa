import { Box, Typography, Link } from '@mui/material';

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
          ಹ್ಯಾಪಿ Pravasa
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
          Made by
          {' '}
          <Link href="https://subodh-jajee.netlify.app/" color="inherit" target="_blank" rel="noopener noreferrer">
            Subodh
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}