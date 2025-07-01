import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface Props {
  img: string;
  title: string;
  paragraph: string;
}

export default function MediaCard({ img, title, paragraph }: Props) {
  return (
    <Card
      sx={{
        width: 260,
        height: 300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <CardMedia sx={{ height: 120 }} image={img} title={title} />
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            fontWeight: 600,
            fontSize: "1.1rem",
            mb: 1,
            whiteSpace: "normal",
            wordBreak: "break-word",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            whiteSpace: "normal",
            wordBreak: "break-word",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {paragraph}
        </Typography>
      </CardContent>
    </Card>
  );
}
