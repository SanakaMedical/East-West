import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CarouselComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  // Static data for slides
  const slides = [
    {
      id: 1,
      image:
        "https://eastwestedu.org/wp-content/uploads/2023/06/Building-Image.webp",
      title: "Apply for a better career & bright future!",
      description:
        "MBBS Admissions for the 2024 Session Now Open! Apply today to secure your spot in leading medical college.",
      buttonText: "Apply Now",
    },
  ];
  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isHovered]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index:any) => {
    setCurrentSlide(index);
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        height: { xs: "300px", sm: "400px", md: "500px" },
        overflow: "hidden",
        borderRadius: 2,
        "&:hover .MuiIconButton-root": {
          opacity: 1,
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides Container */}
      <Box
        sx={{
          display: "flex",
          height: "100%",
          transition: "transform 500ms ease-in-out",
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <Box
            key={slide.id}
            sx={{
              minWidth: "100%",
              position: "relative",
              height: "100%",
            }}
          >
            <Box
              component="img"
              src={slide.image}
              alt={slide.title}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
            {/* Content Overlay */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background:
                  "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6))",
                padding: theme.spacing(2),
                color: "white",
              }}
            >
              <Typography
                variant={isMobile ? "h5" : "h3"}
                component="h2"
                align="center"
                sx={{
                  mb: 2,
                  textShadow: "2px 2px 4px rgba(0,0,0,0.4)",
                  fontWeight: "bold",
                }}
              >
                {slide.title}
              </Typography>
              <Typography
                variant={isMobile ? "body2" : "body1"}
                align="center"
                sx={{
                  mb: 3,
                  maxWidth: "600px",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.4)",
                }}
              >
                {slide.description}
              </Typography>
              <Button
                variant="contained"
                size={isMobile ? "medium" : "large"}
                onClick={() => navigate("/apply-and-enroll")}
                sx={{
                  backgroundColor: "primary.main",
                  "&:hover": {
                    backgroundColor: "primary.dark",
                  },
                  px: { xs: 3, md: 4 },
                  py: { xs: 1, md: 1.5 },
                }}
              >
                {slide.buttonText}
              </Button>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Navigation Arrows */}
      <IconButton
        onClick={prevSlide}
        sx={{
          position: "absolute",
          left: theme.spacing(2),
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          opacity: { xs: 1, md: 0 },
          transition: "all 0.3s",
          "&:hover": {
            backgroundColor: "white",
          },
          size: { xs: "small", md: "medium" },
        }}
      >
        <ChevronLeft />
      </IconButton>
      <IconButton
        onClick={nextSlide}
        sx={{
          position: "absolute",
          right: theme.spacing(2),
          top: "50%",
          transform: "translateY(-50%)",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          opacity: { xs: 1, md: 0 },
          transition: "all 0.3s",
          "&:hover": {
            backgroundColor: "white",
          },
          size: { xs: "small", md: "medium" },
        }}
      >
        <ChevronRight />
      </IconButton>

      {/* Dots Navigation */}
      <Box
        sx={{
          position: "absolute",
          bottom: theme.spacing(2),
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 1,
          zIndex: 2,
        }}
      >
        {slides.map((_, index) => (
          <Box
            key={index}
            onClick={() => goToSlide(index)}
            sx={{
              width: { xs: 8, md: 12 },
              height: { xs: 8, md: 12 },
              borderRadius: "50%",
              backgroundColor:
                currentSlide === index ? "white" : "rgba(255, 255, 255, 0.5)",
              cursor: "pointer",
              transition: "all 0.3s",
              "&:hover": {
                backgroundColor: "white",
                transform: "scale(1.2)",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default CarouselComponent;
