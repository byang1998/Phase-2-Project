import {useEffect, useState} from "react";
import PlayerContainer from "./PlayerContainer";
import Header from "./Header";
import NewPlayerForm from "./NewPlayerForm";
import NavBar from "./NavBar";

function App() {
  const [players, setPlayers] = useState([]);

  useEffect (() => {
    fetch("http://localhost:3001/players")
    .then((response) => response.json())
    .then((players) => setPlayers(players));
  },[]);

  const [playerForm, setPlayerForm] = useState(true);

  return (
    <div className="app">
      <Header />
      <PlayerContainer players={players} />
    </div>
  );
}

export default App;
