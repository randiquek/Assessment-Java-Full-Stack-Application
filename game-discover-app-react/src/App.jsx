import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import ViewGames from './components/ViewGames';
import GameDetails from "./components/GameDetails";
import UserProfile from "./components/UserProfile";
import './App.css'

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/view-games" element={<ViewGames />} />
        <Route path="/game-details/:gameId" element={<GameDetails />} />
        <Route path="/user-profile/:username" element={<UserProfile />} />
      </Routes>
      </Router>  
    </>
  )
}

export default App
