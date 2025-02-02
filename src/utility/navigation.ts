export const scrollToTrips = () => {
    const tripsSection = document.getElementById('trips');
    if (tripsSection) {
        tripsSection.scrollIntoView({ behavior: 'smooth' });
    }
}