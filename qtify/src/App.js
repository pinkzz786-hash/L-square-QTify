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
  try {
    const response = await axios.get(
      "https://qtify-backend.labs.crio.do/albums/top"
    );
    console.log("Top Albums:", response.data);
    setTopAlbums(response.data);
  } catch (err) {
    console.log("Top Albums Error:", err);
  }
};

const fetchSearchData = async () => {
  try {
    const response = await axios.get(
      "https://qtify-backend.labs.crio.do/albums"
    );
    console.log("Search Data:", response.data);
    setSearchData(response.data);
  } catch (err) {
    console.log("Search Error:", err);
  }
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