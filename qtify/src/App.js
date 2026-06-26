import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import Card from "./components/Card/Card";
import Songs from "./components/Songs/Songs";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [searchData, setSearchData] = useState([]);

  // Top Albums
  const fetchTopAlbums = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend.labs.crio.do/albums/top"
      );

      setTopAlbums(response.data);
      setSearchData(response.data);
    } catch (err) {
      console.log("Top Albums Error:", err);
    }
  };

  // New Albums
  const fetchNewAlbums = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend.labs.crio.do/albums/new"
      );

      setNewAlbums(response.data);
    } catch (err) {
      console.log("New Albums Error:", err);
    }
  };

  // Songs
  const fetchSongs = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend.labs.crio.do/songs"
      );

      setSongs(response.data);
    } catch (err) {
      console.log("Songs Error:", err);
    }
  };

  // Genres
  const fetchGenres = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend.labs.crio.do/genres"
      );

      console.log("Genres API:", response.data);

      // Handle both possible response formats
      if (Array.isArray(response.data)) {
        setGenres(response.data);
      } else if (Array.isArray(response.data.data)) {
        setGenres(response.data.data);
      } else {
        setGenres([]);
      }
    } catch (err) {
      console.log("Genres Error:", err);
    }
  };

  useEffect(() => {
    fetchTopAlbums();
    fetchNewAlbums();
    fetchSongs();
    fetchGenres();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar searchData={searchData} />

        <Hero />

        <Section
          title="Top Albums"
          data={topAlbums}
          renderComponent={(album) => (
            <Card
              key={album.id}
              image={album.image}
              follows={album.follows}
              title={album.title}
            />
          )}
        />

        <Section
          title="New Albums"
          data={newAlbums}
          renderComponent={(album) => (
            <Card
              key={album.id}
              image={album.image}
              follows={album.follows}
              title={album.title}
            />
          )}
        />

        <Songs songs={songs} genres={genres} />
      </header>
    </div>
  );
}

export default App;