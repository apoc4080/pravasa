import { Box, Typography, Button, Container } from '@mui/material';
import { AirplanemodeActive, TravelExplore } from '@mui/icons-material';
import hero from "../assets/heroBg.jpg";
import { scrollToTrips } from '../utility/navigation';

export default function Hero() {
  return (
    <Box sx={{
      width: '100vw',
      background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${hero})`,
      height: '90vh',
      backgroundSize: 'cover',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      justifyContent: { xs: 'center', sm: 'flex-start' },
      textAlign: { xs: 'center', sm: 'left' },
    }}>
      <Container>
        <AirplanemodeActive sx={{ 
          fontSize: { xs: '3rem', sm: '4rem' },
          color: 'white', 
          mb: 3,
          animation: 'float 3s ease-in-out infinite'
        }} />
        
        <Typography 
          variant="h2" 
          color="white" 
          gutterBottom 
          sx={{ 
            fontWeight: 700, 
            fontSize: { xs: '2.5rem', sm: '3.5rem' }
          }}
        >
          Crafting Unforgettable Journeys
        </Typography>
        
        <Button 
          variant="contained" 
          size="large" 
          startIcon={<TravelExplore />}
          sx={{ 
            mt: 3,
            px: 5,
            py: 1.5,
            fontSize: { xs: '1rem', sm: '1.2rem' },
            '&:hover': { transform: 'scale(1.05)' }
          }}
          onClick={scrollToTrips}
        >
          Explore Adventures
        </Button>
      </Container>
    </Box>
  );
}