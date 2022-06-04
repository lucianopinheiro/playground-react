import Box from "@mui/material/Box";

const History = function (props) {
  return (
    <Box className="tile">
      <h2>History</h2>
      <ul>
        {props.log.map((item, index) => (
          <li key={item + index}>{item}</li>
        ))}
      </ul>
    </Box>
  );
};

export default History;
