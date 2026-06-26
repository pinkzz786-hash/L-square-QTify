import { Card, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import styles from "./Card.module.css";

function AlbumCard({ image, follows, title }) {
  return (
    <Card className={styles.card}>
      <CardMedia
        component="img"
        image={image}
        height="170"
        alt={title}
      />

      <CardContent className={styles.content}>
        <Chip
          label={`${follows} Follows`}
          size="small"
          className={styles.chip}
        />

        <Typography variant="body2">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AlbumCard;