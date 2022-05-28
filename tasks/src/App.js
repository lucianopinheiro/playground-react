import "./App.css";

import { Tasklist } from "./components/Tasklist";

function App() {
  return (
    <div className="App">
      <header className="App-header">Tasks</header>
      <Tasklist />
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
