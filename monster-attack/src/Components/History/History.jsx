import Box from "@mui/material/Box";
import "./History.css";
import { GiBroadsword } from "react-icons/gi";
import { MdOutlineHealthAndSafety } from "react-icons/md";

const History = function (props) {
  return (
    <Box className="tile">
      <h2>History</h2>
      <ul className="historyUl">
        {props.log.map((round, index) => (
          <li key={round + index} className="historyBox">
            <p>
              <span>Hero:</span>
              {round.hero.what === "attack" ? <GiBroadsword /> : <MdOutlineHealthAndSafety />} {round.hero.howmuch}
            </p>
            <p>
              <span>Monster:</span>
              <GiBroadsword /> {round.monster.howmuch}{" "}
            </p>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default History;
