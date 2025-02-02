// components/AboutUs.tsx
import { Container, Typography, Box, Grid, useTheme } from '@mui/material';
import { Favorite, Public, SelfImprovement } from '@mui/icons-material';
import SectionHeading from './SectionHeading';

export default function AboutUs() {
  const theme = useTheme();

  return (
    <Container sx={{ 
      py: 8,
      bgcolor: 'background.paper',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Section Header */}
      <SectionHeading title="Why Happy Pravasa?" variant="primary" />

      {/* Core Philosophy */}
      <Typography 
        variant="h5" 
        align="center" 
        sx={{
          maxWidth: '800px',
          margin: '0 auto 4rem',
          fontStyle: 'italic',
          color: theme.palette.text.secondary
        }}
      >
        "Who wants to be sad at the end of any Pravasa? That's why Happy Pravasa!"
      </Typography>

      <Grid container spacing={6}>
        {/* About Us Section */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', mb: 3 }}>
            <Public color="primary" sx={{ fontSize: '2.5rem', mr: 2 }} />
            <div>
              <Typography variant="h4" gutterBottom>
                About Us
              </Typography>
              <Typography variant="body1" paragraph>
                Welcome to Happy Pravasa! We believe travel is more than visiting places - 
                it's about creating memories that stay with you forever. Our mission is to 
                deliver lifelong, heartfelt experiences that enrich your soul.
              </Typography>
            </div>
          </Box>
        </Grid>

        {/* Our Purpose Section */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', mb: 3 }}>
            <SelfImprovement color="primary" sx={{ fontSize: '2.5rem', mr: 2 }} />
            <div>
              <Typography variant="h4" gutterBottom>
                Our Purpose
              </Typography>
              <Typography variant="body1" paragraph>
                Founded to inspire wanderlust and joy, we create unique journeys that become 
                personal chapters in your travel story. Whether it's your first trip or another 
                adventure, we make it unforgettable.
              </Typography>
            </div>
          </Box>
        </Grid>
      </Grid>

      {/* Decorative Element */}
      <Favorite 
        color="secondary" 
        sx={{
          position: 'absolute',
          right: '-50px',
          top: '20%',
          fontSize: '200px',
          opacity: 0.1,
          transform: 'rotate(25deg)'
        }} 
      />
    </Container>
  );
}