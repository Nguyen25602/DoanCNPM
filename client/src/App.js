import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NotFoundPage from "./pages/404pages/404pages";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Messenger from "./pages/messenger/Messenger";
import ChangeProfile from "./pages/ChangeProfile/ChangeProfile"
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import "./app.css";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='*'
            element={<NotFoundPage />}
          />
          <Route path="/"
            element={user ? <Home /> : <Register />}
          />
          <Route path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route path="/changeprofile"
            element={!user ? <Navigate to="/" /> : <ChangeProfile />}
          />
          <Route path="/register"
            element={user ? <Navigate to="/" /> : <Register />}
          />
          <Route path="/messenger"
            element={!user ? <Navigate to="/" /> : <Messenger />}
          />
          <Route path="/profile/:username"
            element={<Profile />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;