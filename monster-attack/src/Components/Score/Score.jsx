import Box from "@mui/material/Box";
import "./Score.css";

const Score = function (props) {
  return (
    <Box className="player tile">
      <h2>{props.name}</h2>
      <div className="lifeContainer">
        <p id={"life" + props.name} className="lifeValue" style={{ width: props.life + "%" }}>
          {props.life}
        </p>
      </div>
    </Box>
  );
};

export default Score;
