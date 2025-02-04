import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import { Menu, TravelExplore } from '@mui/icons-material';
import { scrollToTrips } from '../utility/navigation';

export default function Navbar() {
  return (
    <AppBar position="fixed" color="default" elevation={1} sx={{ px: { xs: 2, md: 4 } }}>
      <Toolbar>
        {/* Logo & Title */}
        <Box display="flex" alignItems="center" flexGrow={1}>
          <TravelExplore color="primary" sx={{ mr: 1, fontSize: { xs: '1.8rem', md: '2rem' } }} />
          <Typography variant="h6" color="primary" sx={{ fontWeight: 700, fontSize: { xs: '1rem', md: '1.2rem' } }}>
            ಹ್ಯಾಪಿ Pravasa
          </Typography>
        </Box>
        
        {/* Desktop Menu */}
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

        {/* Mobile Menu Button */}
        <IconButton sx={{ display: { xs: 'block', md: 'none' } }}>
          <Menu />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
