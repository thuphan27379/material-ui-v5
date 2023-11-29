import React from "react";
import books from "../books.json";
import { useParams } from "react-router-dom";
import { Container, Typography } from "@mui/material";
import Box from "@mui/material";
import QuiltedImageList from "../components/QuiltedImageList";
import PersonIcon from "@mui/icons-material/Person";
import PublicIcon from "@mui/icons-material/Public";

function DetailPage() {
  const params = useParams();
  const bookId = params.id;
  const book = books.find((book) => book.id === bookId);

  if (!book) {
    return (
      <Typography variant="h3" marginTop={3}>
        No book found
      </Typography>
    );
  }

  return (
    <Container sx={{ width: 900 }}>
      <Typography variant="h3" marginTop={3}>
        {book.title}
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
        <img src={book.imageLink} alt="" />
        <QuiltedImageList></QuiltedImageList>
      </Box>
      <Box marginTop={3} alignItems="center" sx={{ display: "flex" }}>
        <PersonIcon /> {book.author}
      </Box>
      <Box marginTop={3} alignItems="center" sx={{ display: "flex" }}>
        <PublicIcon /> {book.country}
      </Box>
    </Container>
  );
}

export default DetailPage;
