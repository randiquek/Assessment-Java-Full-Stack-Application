import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage'
import ViewGames from './components/ViewGames'
import GameDetails from "./components/GameDetails";
import './App.css'

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/view-games" element={<ViewGames />} />
        <Route path="/game-details/:gameId" element={<GameDetails />} />
      </Routes>
      </Router>  
    </>
  )
}

export default App
