import AllPlayers from "./components/AllPlayers";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlayerDetails from "./components/PlayerDetails";
import NewPlayerForm from "./components/NewPlayerForm";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/:playerId" element={<PlayerDetails />} />
          <Route path="/new" element={<NewPlayerForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
