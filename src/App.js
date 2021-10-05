import React, { useState} from "react";
import PlayerContainer from "./PlayerContainer";
import Header from "./Header";

function App() {
  return (
    <div className="app">
      <Header />
      <PlayerContainer />
    </div>
  );
}

export default App;
