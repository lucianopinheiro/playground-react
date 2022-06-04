import "./App.css";
import Box from "@mui/material/Box";
import Score from "./Components/Score/Score";
import PlayerCommands from "./Components/PlayerCommands/PlayerCommands";
import React, { useState } from "react";

function App() {
  const [heroLife, setHeroLife] = useState(100);
  const [monsterLife, setMonsterLife] = useState(100);

  const handleHeroLife = () => {
    const damage = Math.floor(Math.random() * 9 + 1);
    setHeroLife(heroLife - damage);
  };

  const handleMonsterLife = () => {
    const damage = Math.floor(Math.random() * 9 + 1);
    setMonsterLife(monsterLife - damage);
  };

  return (
    <div id="content">
      <header>
        <h1>Monster Slayer</h1>
      </header>
      <main>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <Score name="Hero" life={heroLife} />
          <Score name="Monster" life={monsterLife} />
        </Box>
        <Box sx={{ display: "flex", gap: "10px" }}>
          <PlayerCommands setLifes={[handleHeroLife, handleMonsterLife]} />
          <div>Last</div>
        </Box>
      </main>
    </div>
  );
}

export default App;
