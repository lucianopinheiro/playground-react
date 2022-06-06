import "./App.css";
import Score from "./Components/Score/Score";
import History from "./Components/History/History";
import PlayerCommands from "./Components/PlayerCommands/PlayerCommands";
import GameOver from "./Components/GameOver/GameOver";
import React, { useEffect, useState } from "react";

function App() {
  const [heroLife, setHeroLife] = useState(100);
  const [monsterLife, setMonsterLife] = useState(100);
  const [history, setHistory] = useState([]);
  const [winner, setWinner] = useState("");

  const round = (typeOfRound) => {
    const roundHistory = {
      hero: {
        what: "",
        howmuch: 0,
      },
      monster: {
        what: "attack",
        howmuch: 0,
      },
    };
    let values = "";
    if (typeOfRound === "attack") {
      values = attackMonster(monsterLife);
    } else {
      values = heal(heroLife);
    }
    roundHistory.hero.howmuch = values[1];
    roundHistory.hero.what = typeOfRound;

    const life = typeOfRound === "attack" ? heroLife : values[0];
    values = attackHero(life);
    roundHistory.monster.howmuch = values[1];

    handleHistory(roundHistory);
  };

  const checkGameOver = () => {
    console.log("hero", heroLife, "monster", monsterLife);
    if (heroLife === 0 && monsterLife === 0) {
      setWinner("draw");
    } else if (heroLife === 0) {
      setWinner("monster");
    } else if (monsterLife === 0) {
      setWinner("hero");
    }
  };

  useEffect(() => {
    checkGameOver();
  }, [history]);

  const resetGame = () => {
    setHeroLife(100);
    setMonsterLife(100);
    setHistory([]);
    setWinner("");
  };

  const attackHero = (life) => {
    const damage = Math.floor(Math.random() * 15 + 1);
    const newLife = life - damage > 0 ? life - damage : 0;
    setHeroLife(newLife);
    return [newLife, damage];
  };

  const attackMonster = (life) => {
    const damage = Math.floor(Math.random() * 15 + 1);
    const newLife = life - damage > 0 ? life - damage : 0;
    setMonsterLife(newLife);
    return [newLife, damage];
  };

  const heal = (life) => {
    const value = Math.floor(Math.random() * 20 + 1);
    const newLife = life + value < 100 ? life + value : 100;
    setHeroLife(newLife);
    return [newLife, value];
  };

  const handleHistory = (newItems) => {
    const newHistory = [...history];
    newHistory.unshift(newItems);
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

        <GameOver winner={winner} reset={resetGame} />

        <div className="gameRow">
          <PlayerCommands round={round} winner={winner} />
          <History log={history} />
        </div>
      </main>
    </div>
  );
}

export default App;
