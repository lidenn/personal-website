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

function App() {
  return (
    <div>
      {/* Header */}
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Blog
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Blog Post Container */}
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Card>
          {/* Blog Image */}
          <CardMedia
            component="img"
            height="300"
            image="https://source.unsplash.com/random?technology"
            alt="Blog Post Image"
          />

          {/* Blog Content */}
          <CardContent>
            <Typography variant="h4" gutterBottom>
              Blog Post Title
            </Typography>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              Published on September 26, 2024
            </Typography>
            <Typography variant="body1" paragraph>
              This is an example blog post page created using Material UI. You
              can include content here to showcase your blog posts. Material UI
              makes it simple to style components and create visually appealing
              layouts without much custom CSS.
            </Typography>
            <Typography variant="body1" paragraph>
              Add as many paragraphs as you'd like to provide detailed
              information in your blog post. Using components like `Typography`,
              you can style text with various font sizes and weights.
            </Typography>
          </CardContent>

          {/* Blog Actions */}
          <CardActions>
            <Button size="large" variant="contained" color="primary">
              Read More
            </Button>
            <Button size="large" variant="outlined" color="secondary">
              Share
            </Button>
          </CardActions>
        </Card>
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
        <Typography variant="body2">
          © {new Date().getFullYear()} My Blog. All rights reserved.
        </Typography>
      </Box>
    </div>
  );
}

export default App;
