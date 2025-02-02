// components/Contact.tsx
import { Container, Typography, Grid, IconButton } from '@mui/material';
import { Phone, Instagram, YouTube } from '@mui/icons-material';
import SectionHeading from './SectionHeading';

export default function Contact() {
  return (
    <Container sx={{ py: 8 }}>
      <SectionHeading title="Let's Connect" variant="secondary" />
      <Grid container spacing={4} justifyContent="center">
        {/* YouTube */}
        <Grid item xs={12} md={3} textAlign="center">
          <IconButton href="https://www.youtube.com/@Yatrafilmskannada" target="_blank">
            <YouTube fontSize="large" />
          </IconButton>
          <Typography variant="h6" mt={2}>
            Our YouTube Channel
          </Typography>
        </Grid>
        {/* Instagram */}
        <Grid item xs={12} md={3} textAlign="center">
          <IconButton href="https://www.instagram.com/yatrafilmskannada/" target="_blank">
            <Instagram fontSize="large" />
          </IconButton>
          <Typography variant="h6" mt={2}>
            Follow us on Instagram
          </Typography>
        </Grid>
        {/* Phone */}
        <Grid item xs={12} md={3} textAlign="center">
          <IconButton href="https://wa.me/+919845680774" target="_blank">
            <Phone fontSize="large" />
          </IconButton>
          <Typography variant="h6" mt={2}>
            +91 9845680774
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}