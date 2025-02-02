// theme.ts
import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: { main: '#2E7D32' },
    secondary: { main: '#FFC107' },
    text: {
      primary: '#1A237E',
      secondary: '#424242'
    }
  },
  typography: {
    fontFamily: 'Poppins, Arial sans-serif',
    h1: {
      fontSize: '2.8rem',
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#2E7D32',
      position: 'relative',
      '&:after': {
        content: '""',
        display: 'block',
        width: '80px',
        height: '4px',
        backgroundColor: '#FFC107',
        margin: '1.5rem auto 2rem'
      }
    },
    h2: {
      fontSize: '2.2rem',
      fontWeight: 600,
      color: '#1A237E',
      marginBottom: '3rem',
      position: 'relative',
      '&:before': {
        content: '""',
        position: 'absolute',
        bottom: '-1rem',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '40px',
        height: '3px',
        backgroundColor: '#2E7D32'
      }
    },
    sectionHeading: {
      background: 'linear-gradient(45deg, #2E7D32 30%, #81C784 90%)',
      color: 'white',
      padding: '1rem 2rem',
      borderRadius: '8px',
      display: 'inline-block',
      boxShadow: '0 3px 5px 2px rgba(46, 125, 50, .2)'
    }
  }
});