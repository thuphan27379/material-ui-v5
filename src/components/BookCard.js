import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function BookCard({ book }) {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/book/${book.id}`)}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={book.imageLink}
          alt={book.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {book.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {book.author} - {book.year}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
