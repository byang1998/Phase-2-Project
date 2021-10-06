import {useEffect, useState} from "react";
import PlayerContainer from "./PlayerContainer";
import Header from "./Header";
import NavBar from "./NavBar";

function App() {
  const [players, setPlayers] = useState([]);

  useEffect (() => {
    fetch("http://localhost:3001/players")
    .then((response) => response.json())
    .then((players) => setPlayers(players));
  },[]);

  const addNewPlayer = (newPlayerObj) => {
    setPlayers((prevPlayer) => [newPlayerObj,...prevPlayer])
  }

  

  return (
    <div className="app">
      <Header />
      <NavBar addNewPlayer={addNewPlayer} />
      <PlayerContainer players={players} />
      
    </div>
  );
}

export default App;
