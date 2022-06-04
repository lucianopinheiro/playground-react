import "./App.css";
import Score from "./Components/Score/Score";
import History from "./Components/History/History";
import PlayerCommands from "./Components/PlayerCommands/PlayerCommands";
import React, { useState } from "react";

function App() {
  const [heroLife, setHeroLife] = useState(100);
  const [monsterLife, setMonsterLife] = useState(100);
  const [history, setHistory] = useState([]);
  //const [currentRound, setCurrentRound] = useState([])

  const handleHeroLife = () => {
    const damage = Math.floor(Math.random() * 9 + 1);
    const newLife = heroLife - damage > 0 ? heroLife - damage : 0;
    handleHistory("heroLife: " + heroLife + "-" + damage + "=" + newLife);
    setHeroLife(newLife);
  };

  const handleMonsterLife = () => {
    const damage = Math.floor(Math.random() * 9 + 1);
    const newLife = monsterLife - damage > 0 ? monsterLife - damage : 0;
    handleHistory("monsterLife: " + monsterLife + "-" + damage + "=" + newLife);
    setMonsterLife(newLife);
  };

  const heal = () => {
    const value = Math.floor(Math.random() * 9 + 1);
    const newLife = heroLife + value < 100 ? heroLife + value : 100;
    handleHistory("heal: " + heroLife + "+" + value + "=" + newLife);
    setHeroLife(newLife);
  };

  const handleHistory = (newItem) => {
    const newHistory = [...history];
    newHistory.push(newItem);
    console.log(history);
    console.log(newHistory);
    setHistory(newHistory);
  };

  return (
    <div id="content">
      <header>
        <h1>Monster Slayer</h1>
      </header>
      <main>
        <div className="gameRow">
          <Score name="Hero" life={heroLife} />
          <Score name="Monster" life={monsterLife} />
        </div>
        <div className="gameRow">
          <PlayerCommands command={{ attackHero: handleHeroLife, attackMonster: handleMonsterLife, heal: heal }} />
          <History log={history} />
        </div>
      </main>
    </div>
  );
}

export default App;
