export interface Trip {
    id: number;
    destination: string;
    duration: string;
    dates: string;
    price: string;
    image: string;
}
  
export interface TripCardProps {
    trip: Trip;
}