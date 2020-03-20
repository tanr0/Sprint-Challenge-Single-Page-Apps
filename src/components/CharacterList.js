import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm"

export default function CharacterList() {
 const [character, setCharacter] = useState([]);

  useEffect(() => {
 axios
    .get('https://rickandmortyapi.com/api/character/')
    .then (chars => {
      const newCharacter = chars.data.results
      console.log(chars.data.results);
      setCharacter(newCharacter);
    })
    .catch(error => {
      console.log('It Seems Master Obi-Wan Has a planet Padawans', error);
    });
  }, []);

  return (
  <div>
    <SearchForm character={character}/>
    <section className="character-list">
        {character.map (e => {
          return <CharacterCard key={e.id} name={e.name} species={e.species} status={e.status} image={e.image} />
        })}
    </section>
  </div>
  );
}
