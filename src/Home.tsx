import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Grid,
  Button,
  Card,
  CardContent,
  Avatar,
} from "@mui/material";
import logo from "./assets/images/dev-logo.png"; // Assuming the logo is imported
import profileImage from "./assets/images/profile-photo.jpeg";
const HomePage = () => {
  return (
    <div>
      {/* Header with Logo */}
      <AppBar position="sticky" sx={{ backgroundColor: "#ff5a5f" }}>
        <Toolbar>
          <img
            src={logo}
            alt="Developer Logo"
            style={{ height: "40px", marginRight: "16px" }}
          />
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Developer Portfolio
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        {/* Introduction Section */}
        <Box sx={{ mb: 4, textAlign: "center" }}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
            Hello, I'm Dennis
          </Typography>
          <Typography variant="h5" color="textSecondary" paragraph>
            I'm a passionate Full Stack Developer focused on building modern,
            responsive websites and web applications.
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Get in Touch
          </Button>
        </Box>

        {/* Profile Image Section */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <Avatar
            alt="Your Name"
            src={profileImage}
            sx={{ width: 120, height: 120, border: "3px solid #ff5a5f" }}
          />
        </Box>

        {/* Skills Section */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            My Skills
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Front-End Development
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    I specialize in HTML, CSS, JavaScript, React, and Vue.js to
                    build beautiful, responsive user interfaces.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Back-End Development
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    I work with Node.js, Express, and databases like MongoDB and
                    PostgreSQL to build the back-end of applications.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Web Design
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    I design visually appealing websites with user-friendly
                    interfaces, making sure they look great on all devices.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{ boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    DevOps & Cloud
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    I have experience deploying applications using AWS, Azure,
                    Docker, and CI/CD pipelines to ensure smooth operations.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>

        {/* About Section */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            About Me
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: "#555" }}>
            I am a Full Stack Developer with a passion for creating dynamic,
            responsive websites and applications. I specialize in both front-end
            and back-end technologies, allowing me to build complete solutions
            from start to finish. My goal is to create websites that not only
            look great but also provide seamless user experiences.
          </Typography>
          <Typography variant="body1" paragraph sx={{ color: "#555" }}>
            I am constantly learning new technologies and keeping up with
            industry trends to stay at the forefront of web development. I love
            working with clients to bring their ideas to life, whether it's
            building a personal website, e-commerce platform, or a custom web
            application.
          </Typography>
        </Box>

        {/* Call to Action Section */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
            Interested in working with me?
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Contact Me
          </Button>
        </Box>

        {/* Link to Blog */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h6" gutterBottom>
            Check out my blog for development insights:
          </Typography>
          <a href="/BlogPage.tsx" style={{ textDecoration: "none" }}>
            <Button variant="outlined" color="secondary" size="large">
              Go to Blog
            </Button>
          </a>
        </Box>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 2,
          mt: 4,
          backgroundColor: "#f0f0f0",
          textAlign: "center",
        }}
      >
        <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} [Your Name]. All rights reserved.
        </Typography>
      </Box>
    </div>
  );
};

export default HomePage;
