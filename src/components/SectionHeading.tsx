// components/SectionHeading.tsx
import { Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';

interface SectionHeadingProps {
  title: string;
  variant?: 'primary' | 'secondary';
}

export default function SectionHeading({ title, variant = 'primary' }: SectionHeadingProps) {
  return (
    <ThemeProvider theme={theme}>
      {variant === 'primary' ? (
        <Typography variant="h1" align="center">
          {title}
        </Typography>
      ) : (
        <Typography variant="h2" align="center" sx={{ 
          color: variant === 'secondary' ? theme.palette.text.primary : undefined,
          '&:before': {
            backgroundColor: variant === 'secondary' ? theme.palette.primary.main : undefined
          }
        }}>
          {title}
        </Typography>
      )}
    </ThemeProvider>
  );
}