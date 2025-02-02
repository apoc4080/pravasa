// components/Services.tsx
import { 
    Container, 
    Typography, 
    Grid, 
    Card, 
    CardContent, 
    List, 
    ListItem, 
    ListItemText,
    Box,
    useTheme
  } from '@mui/material';
  import { CheckCircle } from '@mui/icons-material';
import SectionHeading from './SectionHeading';
  
  export default function Services() {
    const theme = useTheme();
  
    const services = [
      {
        title: "Pre-Designed Package Trips",
        items: [
          "Curated destinations with perfect mix of adventure, relaxation, and culture",
          "Fixed capacity groups with everything planned from accommodation to sightseeing"
        ]
      },
      {
        title: "Personalized Travel Packages",
        items: [
          "Choose your destination and budget",
          "Flexible group sizes with customized itineraries"
        ]
      }
    ];
  
    return (
      <Container sx={{ py: 8 }}>
        <SectionHeading title="Our Services" variant="secondary" />
  
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {services.map((service) => (
            <Grid item xs={12} md={6} key={service.title}>
              <Card elevation={3} sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom sx={{ 
                    color: theme.palette.primary.main,
                    fontWeight: 600
                  }}>
                    {service.title}
                  </Typography>
                  
                  <List dense disablePadding>
                    {service.items.map((item) => (
                      <ListItem key={item} disableGutters>
                        <Box display="flex" alignItems="flex-start">
                          <CheckCircle 
                            color="primary" 
                            sx={{ 
                              fontSize: '1.2rem', 
                              mt: '4px', 
                              mr: 1.5 
                            }} 
                          />
                          <ListItemText 
                            primary={item}
                            primaryTypographyProps={{ variant: 'body1' }}
                          />
                        </Box>
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }