import { Trip } from "../interfaces/types";
import udaipur from "../assets/udaipur.jpeg";
import jodhpur from "../assets/jodhpur.jpg";
import andaman from "../assets/andaman.jpg";

export const trips: Trip[] = [
    {
      id: 1,
      destination: "Summer Getaway in Udaipur, India",
      duration: "5 Nights / 6 Days",
      dates: "1 Jul - 6 Jul",
      price: "75,000",
      image: udaipur,
    },
    {
      id: 2,
      destination: "Monsoon Escape in Jodhpur, India",
      duration: "4 Nights / 5 Days",
      dates: "1 Aug - 5 Aug",
      price: "65,000",
      image: jodhpur,
    },
    {
      id: 3,
      destination: "Beach Retreat in Andaman & Nicobar Islands",
      duration: "6 Nights / 7 Days",
      dates: "10 Aug - 16 Aug",
      price: "1,20,000",
      image: andaman,
    }
];