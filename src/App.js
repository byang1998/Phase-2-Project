import {useEffect, useState} from "react";
import PlayerContainer from "./PlayerContainer";
import Header from "./Header";
import NavBar from "./NavBar";

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
      <PlayerContainer players={filteredPlayers} filteredPlayers={filteredPlayers} />
      
    </div>
  );
}

export default App;
