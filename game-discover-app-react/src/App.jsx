import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import ViewGames from './components/ViewGames';
import GameDetails from "./components/GameDetails";
import UserProfile from "./components/UserProfile";
import AdminPage from "./components/AdminPage";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import SecuredRoute from "./components/SecuredRoute";
import { UserProvider } from "./contexts/UserContext";
import './App.css'


function App() {
  

  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/view-games" element={<SecuredRoute component={<ViewGames />} authority="ADMIN, USER" ></SecuredRoute>} />
          <Route path="/game-details/:gameId" element={<GameDetails />} />
          <Route path="/user-profile/:username" element={<UserProfile />} />
          <Route path="/admin" element={<SecuredRoute component={<AdminPage />} authority="ADMIN" ></SecuredRoute>} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        </Router>  
    </UserProvider>
  )
}

export default App
