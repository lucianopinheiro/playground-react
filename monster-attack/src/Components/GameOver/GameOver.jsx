const GameOver = function (props) {
  const winner = () => {
    if (props.winner === "hero") {
      return "Winner: Hero!";
    } else if (props.winner === "monster") {
      return "Winner: Monster";
    } else {
      return "It's a draw!";
    }
  };
  return (
    props.winner && (
      <div className="gameRow">
        <div className="tile tile--full">
          <h2>Game over!</h2>
          <p>{winner()}</p>
          <button onClick={props.reset}>Restart game</button>
        </div>
      </div>
    )
  );
};

export default GameOver;
