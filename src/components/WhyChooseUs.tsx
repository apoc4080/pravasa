// components/WhyChooseUs.tsx
import { Container, Typography, Grid, Box } from '@mui/material';
import { LocalActivity, NaturePeople, SupportAgent, Tour } from '@mui/icons-material';
import SectionHeading from './SectionHeading';

export default function WhyChooseUs() {
  const features = [
    { 
      icon: <LocalActivity fontSize="large" />,
      text: "Tailored Experiences designed with your dreams in mind"
    },
    {
      icon: <NaturePeople fontSize="large" />,
      text: "Authentic cultural connections with people and nature"
    },
    {
      icon: <Tour fontSize="large" />,
      text: "Seamless Planning with every detail handled"
    },
    {
      icon: <SupportAgent fontSize="large" />,
      text: "24/7 Support for worry-free journeys"
    }
  ];

  return (
    <Container sx={{ py: 8, bgcolor: 'background.paper' }}>
       <SectionHeading title="Why Choose Us?" variant="secondary" />
      
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Box 
              sx={{ 
                p: 3,
                borderRadius: 2,
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                bgcolor: 'background.default'
              }}
            >
              <Box sx={{ color: 'primary.main', mr: 3 }}>
                {feature.icon}
              </Box>
              <Typography variant="h6" fontWeight={500}>
                {feature.text}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}