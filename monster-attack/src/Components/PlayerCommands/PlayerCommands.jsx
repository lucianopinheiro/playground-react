import Box from "@mui/material/Box";

import "./PlayerCommands.css";

const PlayerCommands = function (props) {
  const handleAttack = () => {
    props.command.attackMonster();
    props.command.attackHero();
  };

  const handleHeal = () => {
    props.command.heal();
  };

  return (
    <Box className="tile">
      <h2>Player Commands</h2>
      <button onClick={handleAttack}>Attack</button>
      <button onClick={handleHeal}>Heal</button>
    </Box>
  );
};

export default PlayerCommands;
