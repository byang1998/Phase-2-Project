import React from 'react'
import {useEffect, useState} from "react";
import PlayerContainer from "./PlayerContainer";
import Header from "./Header";
import NavBar from "./NavBar";
import Guard from "./Guard";
import Wing from "./Wing";
import Big from "./Big";
import Home from "./Home";
import { Route, Switch} from "react-router-dom";

function App() {
  const [players, setPlayers] = useState([]);
  const [searchPlayer, setSearchPlayer] = useState("")

  useEffect (() => {
    fetch("http://localhost:3001/players")
    .then((response) => response.json())
    .then((players) => setPlayers(players));
  },[]);

  const addNewPlayer = (newPlayerObj) => {
    setPlayers((prevPlayer) => [newPlayerObj,...prevPlayer])
  }

  const filteredPlayers = players.filter((playerObj) => playerObj.name.includes(searchPlayer))

 

  return (
    <div className="app">
      <Header />
      <NavBar addNewPlayer={addNewPlayer} setSearchPlayer={setSearchPlayer} />
      
      <Switch>
        <Route path="/Guard">
          <Guard />
          </Route> 
          <Route path="/Wing">
          <Wing />
          </Route> 
          <Route path="/Big">
          <Big />
          </Route>
          <Route path="/">
            <Home  />
            <PlayerContainer players={filteredPlayers} filteredPlayers={filteredPlayers} />
            </Route>   
      </Switch>
      
    </div>
  );
}

export default App;
