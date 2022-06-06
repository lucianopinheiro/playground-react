import Box from "@mui/material/Box";

import "./PlayerCommands.css";

const PlayerCommands = function (props) {
  const handleAttack = () => {
    props.round("attack");
  };

  const handleHeal = () => {
    props.round("heal");
  };

  return (
    <Box className="tile">
      <h2>Player Commands</h2>
      <button onClick={handleAttack} disabled={props.winner}>
        Attack
      </button>
      <button onClick={handleHeal} disabled={props.winner}>
        Heal
      </button>
    </Box>
  );
};

export default PlayerCommands;
