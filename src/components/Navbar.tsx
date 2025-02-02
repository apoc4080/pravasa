// components/Navbar.tsx
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import { Menu, TravelExplore } from '@mui/icons-material';
import { scrollToTrips } from '../utility/navigation';

export default function Navbar() {
  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Toolbar>
        <Box display="flex" alignItems="center" flexGrow={1}>
          <TravelExplore color="primary" sx={{ mr: 1, fontSize: '2rem' }} />
          <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>
            ಹ್ಯಾಪಿ Pravasa
          </Typography>
        </Box>
        
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
          <Button 
            color="inherit" 
            startIcon={<TravelExplore />}
            sx={{ '&:hover': { color: 'primary.main' } }}
            onClick={scrollToTrips}
          >
            Trips
          </Button>
          <Button 
            color="inherit"
            startIcon={<Menu />}
            sx={{ '&:hover': { color: 'primary.main' } }}
          >
            Menu
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}