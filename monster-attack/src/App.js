import "./App.css";
import Box from "@mui/material/Box";
import Score from "./Components/Score/Score";

function App() {
  return (
    <>
      <header>
        <h1>Monster Slayer</h1>
      </header>
      <main>
        <Box sx={{ display: "flex" }}>
          <Score name="Player" />
          <Score name="Monster" />
        </Box>
      </main>
    </>
  );
}

export default App;
