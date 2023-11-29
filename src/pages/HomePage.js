import React from "react";
import Container from "@mui/material";
import Grid from "@mui/material";
import BookCard from "../components/BookCard";
import books from "../books.json";

function HomePage() {
  return (
    <Container>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        {books.slice(0, 4).map((book) => (
          <Grid key={book.id} item xs={6} md={4} lg={3}>
            <BookCard book={book} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default HomePage;
