import { Container, Grid } from '@mui/material';
import TripCard from './TripCard';
import { trips } from '../data/trips';
import SectionHeading from './SectionHeading';

export default function Trips() {
  return (
    <Container id="trips" sx={{ py: 8 }}>
      <SectionHeading title="Upcoming Trips" variant="secondary" />
      <Grid container spacing={4}>
        {trips.map((trip) => (
          <Grid item key={trip.id} xs={12} sm={6} md={4}>
            <TripCard trip={trip} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
