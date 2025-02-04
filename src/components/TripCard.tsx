import { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { LocationOn, CalendarMonth, CurrencyRupee } from "@mui/icons-material";
import { Trip } from "../interfaces/types";
import BookingDialog from "./BookingDialog";

interface TripCardProps {
  trip: Trip;
}

export default function TripCard({ trip }: TripCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s",
        "&:hover": { transform: "translateY(-5px)" },
      }}
    >
      <CardMedia
        component="img"
        height="240"
        image={trip.image}
        alt={trip.destination}
        sx={{ objectPosition: "center" }}
      />

      <CardContent
        sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
      >
        {/* Destination Title with Fixed Height */}
        <Box display="flex" alignItems="center" mb={2} sx={{ minHeight: 50 }}>
          <LocationOn color="primary" sx={{ mr: 1 }} />
          <Typography
            variant="subtitle1"
            fontWeight={600}
            sx={{ lineHeight: 1.3 }}
          >
            {trip.destination}
          </Typography>
        </Box>

        {/* Dates and Prices in One Line */}
        <Box
          display="flex"
          justifyContent="space-between"
          mb={2}
          sx={{ minHeight: 40 }}
        >
          <Box display="flex" alignItems="center">
            <CalendarMonth sx={{ mr: 1, color: "text.secondary" }} />
            <Typography variant="body2">{trip.dates}</Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <CurrencyRupee
              sx={{ mr: 0.5, fontSize: 16, color: "text.secondary" }}
            />
            <Typography variant="body2">{trip.price}</Typography>
          </Box>
        </Box>

        {/* "Book Now" Button Pushed to Bottom */}
        <Box mt="auto">
          <Button
            fullWidth
            variant="contained"
            onClick={() => setOpen(true)}
            sx={{
              py: 1.5,
              fontWeight: 600,
              "&:hover": { backgroundColor: "primary.dark" },
            }}
          >
            Book Now
          </Button>
        </Box>
      </CardContent>

      {/* Booking Dialog Component */}
      <BookingDialog
        open={open}
        onClose={() => setOpen(false)}
        destination={trip.destination}
        dates={trip.dates}
      />
    </Card>
  );
}
