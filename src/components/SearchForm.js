import React, { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";

export default function SearchForm({character}) {
  
  const searchData = character;
  const [search, setSearch] = useState();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = searchData.filter(e =>
      e.name.toLowerCase().includes(search)
    );
    setSearchResults(results);
  }, [search]);

  const handleChange = event => {
    console.log(event.target.value)
    setSearch(event.target.value);
    if (event.target.value="") {
      setSearchResults([])
    }
  };

  return (
    <div className="App">
      <form>
        <label for="name">Search:</label>
 <input id="name"type="text" name="textfield" placeholder="Search" value={search} onChange={handleChange}/>
      </form>
    <section className="character-list">
     {searchResults.map(e => (
      <CharacterCard key={e.id} name={e.name} species={e.species} status={e.status} image={e.image} />
    ))}
    </section>
    </div>
  );
}