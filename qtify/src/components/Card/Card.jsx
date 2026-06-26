import { Card, CardContent, CardMedia, Chip } from "@mui/material";
import styles from "./Card.module.css";

function AlbumCard({
  image,
  follows,
  title,
  chipLabel = "Follows",
}) {
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
          label={`${follows} ${chipLabel}`}
          size="small"
          className={styles.chip}
        />

        <p>{title}</p>
      </CardContent>
    </Card>
  );
}

export default AlbumCard;