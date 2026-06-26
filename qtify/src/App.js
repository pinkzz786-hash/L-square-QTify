import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import Card from "./components/Card/Card";

function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [searchData, setSearchData] = useState([]);

  const fetchTopAlbums = async () => {
    const response = await axios.get(
      "https://qtify-backend.labs.crio.do/albums/top"
    );

    setTopAlbums(response.data);
  };

  const fetchSearchData = async () => {
    const response = await axios.get(
      "https://qtify-backend.labs.crio.do/albums"
    );

    setSearchData(response.data);
  };

  useEffect(() => {
    fetchTopAlbums();
    fetchSearchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar searchData={searchData} />
        <Hero />

        <Section title="Top Albums">
          {topAlbums.map((album) => (
            <Card
              key={album.id}
              image={album.image}
              follows={album.follows}
              title={album.title}
            />
          ))}
        </Section>
      </header>
    </div>
  );
}

export default App;