import React from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Container, 
  Grid, 
  Button, 
  Paper,
  Theme
} from '@mui/material';
import { 
  School, 
  CalendarMonth, 
  MenuBook, 
  Stars,
  // SvgIconComponent
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

// TypeScript interfaces
interface HighlightItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgcolor: string;
}

interface HighlightCardProps {
  bgcolor: string;
  theme?: Theme;
}

// Styled components with TypeScript
const HighlightCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'bgcolor'
})<HighlightCardProps>(({bgcolor }) => ({
  backgroundColor: bgcolor,
  color: '#fff',
  height: '100%',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const ApplyBanner = styled(Paper)(({ theme }) => ({
  backgroundColor: '#1976d2',
  color: '#fff',
  padding: theme.spacing(3),
  marginTop: theme.spacing(4),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    gap: theme.spacing(2),
    textAlign: 'center',
  },
}));

const HighlightsSection: React.FC = () => {
  const highlights: HighlightItem[] = [
    {
      icon: <Stars sx={{ fontSize: 48 }} />,
      title: "6+",
      description: "Affiliated to all relevant departments",
      bgcolor: "#dc3545"
    },
    {
      icon: <MenuBook sx={{ fontSize: 48 }} />,
      title: "11",
      description: "Courses that makes career",
      bgcolor: "#1976d2"
    },
    {
      icon: <CalendarMonth sx={{ fontSize: 48 }} />,
      title: "10+",
      description: "years of experience in running educational institutes",
      bgcolor: "#ffc107"
    },
    {
      icon: <School sx={{ fontSize: 48 }} />,
      title: "11K+",
      description: "happy students over the years",
      bgcolor: "#28a745"
    }
  ];

  const handleApplyClick = (): void => {
    window.location.href = '/apply-and-enroll';
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', color: '#444' }}>
          Our <Box component="span" sx={{ color: '#1976d2' }}>Highlights</Box>
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {highlights.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <HighlightCard bgcolor={item.bgcolor}>
              <CardContent sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                textAlign: 'center',
                p: 3 
              }}>
                {item.icon}
                <Typography variant="h3" sx={{ mt: 2, mb: 1, fontWeight: 'bold' }}>
                  {item.title}
                </Typography>
                <Typography variant="body2">
                  {item.description}
                </Typography>
              </CardContent>
            </HighlightCard>
          </Grid>
        ))}
      </Grid>

      <ApplyBanner elevation={0}>
        <Typography variant="h6" component="h3" sx={{ fontWeight: 'medium' }}>
          Apply for a better career & bright future!
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          size="large"
          onClick={handleApplyClick}
          sx={{ 
            bgcolor: 'rgba(255, 255, 255, 0.1)',
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.2)',
            }
          }}
        >
          Apply Now
        </Button>
      </ApplyBanner>
    </Container>
  );
};

export default HighlightsSection;