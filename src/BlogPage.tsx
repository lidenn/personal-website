import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Box,
} from "@mui/material";
import logo from "./assets/images/dev-logo.png";

const App = () => {
  return (
    <div>
      {/* Header */}

      <AppBar position="sticky">
        <Toolbar>
          {/* Logo */}
          <img
            src={logo}
            alt="Developer Logo"
            style={{ height: "40px", marginRight: "16px" }} // Styling for logo size and spacing
          />
          <div style={{ margin: "0 10px 0 10px" }}>
            <Typography variant="h6">Home</Typography>
          </div>
          <div style={{ margin: "0 10px 0 10px" }}>
            <Typography variant="h6" sx={{ margin: "0,10,0,10" }}>
              My Blog
            </Typography>
          </div>
        </Toolbar>
      </AppBar>

      {/* Blog Post Container */}
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Card
          sx={{
            borderRadius: "12px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
            },
          }}
        >
          {/* Blog Image */}
          <CardMedia
            component="img"
            height="300"
            image="https://source.unsplash.com/random?technology"
            alt="Blog Post Image"
            sx={{ borderRadius: "12px 12px 0 0" }}
          />

          {/* Blog Content */}
          <CardContent>
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: 700, color: "#222222" }}
            >
              Blog Post Title
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              Published on September 26, 2024
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ color: "#555555", lineHeight: 1.8 }}
            >
              This is an example blog post page created using Material UI. You
              can include content here to showcase your blog posts. Material UI
              makes it simple to style components and create visually appealing
              layouts without much custom CSS.
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ color: "#555555", lineHeight: 1.8 }}
            >
              Add as many paragraphs as you'd like to provide detailed
              information in your blog post. Using components like `Typography`,
              you can style text with various font sizes and weights.
            </Typography>
          </CardContent>

          {/* Blog Actions */}
          <CardActions>
            <Button
              size="large"
              variant="contained"
              sx={{
                backgroundColor: "#FF385C",
                color: "#ffffff",
                borderRadius: "8px",
                textTransform: "none",
                "&:hover": { backgroundColor: "#e0314d" },
              }}
            >
              Read More
            </Button>
            <Button
              size="large"
              variant="outlined"
              sx={{
                borderColor: "#FF385C",
                color: "#FF385C",
                borderRadius: "8px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "rgba(255, 56, 92, 0.1)",
                  borderColor: "#FF385C",
                },
              }}
            >
              Share
            </Button>
          </CardActions>
        </Card>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          py: 3,
          mt: 4,
          backgroundColor: "#f7f7f7",
          textAlign: "center",
          borderTop: "1px solid #e0e0e0",
        }}
      >
        <Typography variant="body2" sx={{ color: "#717171" }}>
          © {new Date().getFullYear()} My Blog. All rights reserved.
        </Typography>
      </Box>
    </div>
  );
};

export default App;
