import { Link, json, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { getHistory, userActions } from "../Store/Store";
import { useState } from "react";
const Navbar = () => {
  // const [showHistory, setShowHistory] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useSelector((state) => state.user.email);

  console.log(email);

  const historyHandler = () => {
    const data = dispatch(getHistory());
    console.log(data);
    // setShowHistory(true);
  };

  const logOutHandler = () => {
    dispatch(userActions.logOut());
    navigate("/");
  };

  return (
    <div className="nav">
      <div className="buttonContainer">
        <button onClick={historyHandler}>History</button>
        <button onClick={logOutHandler}>Logout</button>
      </div>
      <h3>Welcome back {email}</h3>
    </div>
  );
};

export default Navbar;
