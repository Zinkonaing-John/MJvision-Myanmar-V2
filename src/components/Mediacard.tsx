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
        width: 180,
        height: 180,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <CardMedia sx={{ height: 60 }} image={img} title={title} />
      <CardContent
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          p: 1,
        }}
      >
        <Typography
          gutterBottom
          variant="subtitle2"
          component="div"
          sx={{
            fontWeight: 600,
            fontSize: "0.9rem",
            mb: 0.5,
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
            fontSize: "0.75rem",
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
