import Box from "@mui/material/Box";
import "./Score.css";

const Score = function (props) {
  return (
    <Box className="player">
      <h2>{props.name}</h2>
      <div className="lifeContainer">
        <p className={"lifeValue  life" + props.name}>{props.life}</p>
      </div>
    </Box>
  );
};

export default Score;
