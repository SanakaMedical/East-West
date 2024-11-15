import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { motion } from "framer-motion";
import { BlackLogo, Bonapart, HeroBannerA, Tapan } from "../../../assets";

const AboutUs: React.FC = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sri TAPAN Kr. POBI",
      position: "Founder Trustee",
      description:
        "Sri TAPAN Kr. POBI is the founder trustee, dedicated to establishing and guiding our institution.",
      image: Tapan,
    },
    {
      id: 2,
      name: "Dr. BONAPART",
      position: "Chief Executive Officer",
      description:
        "Dr. BONAPART CHOWDHURY leads the institution with a vision for excellence",
      image: Bonapart,
    },
  ];

  return (
    <Container maxWidth="md">
      <Box mt={4} mb={4} textAlign="center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={BlackLogo}
            alt="Company Logo"
            style={{ width: "150px", marginBottom: "20px" }}
          />
        </motion.div>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          style={{ color: "#3f51b5", marginBottom: "20px" }}
        >
          About Us
        </Typography>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={HeroBannerA}
            alt="Hero"
            style={{
              width: "100%", // Full width for smaller screens
              maxWidth: "100%", // Ensure it doesn't exceed its container width
              height: "auto", // Auto height to maintain aspect ratio
              marginBottom: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            }}
          />
        </motion.div>
        <Typography
          paragraph
          variant="h4"
          component="h1"
          gutterBottom
          style={{ color: "#3f51b5", marginBottom: "20px" }}
        >
          East West Education Institute
        </Typography>
        <Typography
          variant="body1"
          paragraph
          style={{ color: "#757575", fontSize: "1.1rem", lineHeight: "1.6" }}
        >
          East West Education Institute, is an altruistic initiative of East
          West Model School Education Society which has already made a
          significant contribution in the health care system of Burdwan and its
          adjoining areas. The expansion of health care facilities, growing
          complexity and advancement of medical technology have substantially
          enhanced the requirement of nurses. It is worth mentionable here that
          expansion of medical facilities through privatization has created a
          great demand for GNM and B.Sc Nursing courses through which medical
          care can be supported in a better way. So certainly, the venture of
          this Nursing College and School will expand the scope of women for
          joining a noble profession of nursing. The Nursing College and School
          has commenced its first session from August/September 2020. The
          paramedical College was established in the year 2021 and waiting for
          its beginning. The B.Ed was instituted in the year 2013 and running
          successfully with its full intake.
        </Typography>
        <Grid container spacing={4} mt={4} justifyContent="center">
          {teamMembers.map((member) => (
            <Grid
              item
              xs={12}
              sm={4}
              key={member.id}
              style={{
                display: "flex",
                justifyContent: "center", // Center all items on small screens
                alignItems: "center",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Card style={{ backgroundColor: "#ffffff", maxWidth: "300px" }}>
                  <CardMedia
                    component="img"
                    style={{
                      height: "auto",
                      width: "auto",
                      objectFit: "cover",
                    }}
                    image={member.image}
                    alt={member.name}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      style={{ color: "#3f51b5" }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                      style={{
                        color: "#e91e63", // Highlight color
                        fontWeight: "bold", // Bold text
                      }}
                    >
                      {member.position}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{ color: "#757575" }}
                    >
                      {member.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutUs;
