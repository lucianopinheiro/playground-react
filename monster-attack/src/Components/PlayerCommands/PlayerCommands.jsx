import "./PlayerCommands.css";

const PlayerCommands = function (props) {
  const handleAttack = () => {
    props.setLifes[1]();
    props.setLifes[0]();
  };

  return (
    <div class="playerCommands">
      <h2>Player Commands</h2>
      <button onClick={handleAttack}>Attack</button>
      <button>Heal</button>
    </div>
  );
};

export default PlayerCommands;
