import React from "react";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage'
import {Route, Link } from 'react-router-dom'

export default function App() {
  return (
    <main data-testid='app'>
      <Header />
      <Route exact path="/" component={WelcomePage}/>
      <Route path="/chars-list" component={CharacterList}/>
    </main>
  );
}