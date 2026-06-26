import { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import Section from "../Section/Section";
import Card from "../Card/Card";

function Songs({ songs, genres }) {
  const [selectedGenre, setSelectedGenre] = useState("all");

  const handleChange = (event, newValue) => {
    setSelectedGenre(newValue);
  };

  const filteredSongs =
    selectedGenre === "all"
      ? songs
      : songs.filter((song) => song.genre.key === selectedGenre);

  return (
    <>
      <Tabs
        value={selectedGenre}
        onChange={handleChange}
        textColor="inherit"
        indicatorColor="secondary"
        sx={{
          marginTop: "32px",
          marginBottom: "24px",
        }}
      >
        <Tab label="All" value="all" />

        {genres.map((genre) => (
          <Tab
            key={genre.key}
            label={genre.label}
            value={genre.key}
          />
        ))}
      </Tabs>

      <Section
        title="Songs"
        data={filteredSongs}
        renderComponent={(song) => (
          <Card
            key={song.id}
            image={song.image}
            follows={song.likes}
            title={song.title}
            chipLabel="Likes"
          />
        )}
      />
    </>
  );
}

export default Songs;