import { Navigate, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Main from "./Pages/Main";
import Navbar from "./Components/Navbar";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
  const loggedIn = useSelector((state) => state.user.loggedIn);

  return (
    <div className="App">
      {loggedIn && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={loggedIn ? <Navigate to={"/main"} /> : <SignIn />}
        />
        <Route
          path="/signUp"
          element={loggedIn ? <Navigate to={"/main"} /> : <SignUp />}
        />
        <Route
          path="/main"
          element={loggedIn ? <Main /> : <Navigate to={"/"} />}
        />
      </Routes>
    </div>
  );
}

export default App;
