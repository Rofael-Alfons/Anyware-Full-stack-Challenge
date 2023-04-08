import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Store/Store";
import { useDispatch, useSelector } from "react-redux";

const SignIn = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.id);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  //   useState(() => {}, [id]);
  function SignInHandler(e) {
    e.preventDefault();
    dispatch(
      login({
        email,
        password,
      })
    );
    navigate(`/main`);
  }
  const setEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const setPasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={SignInHandler}>
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={setEmailHandler}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          onChange={setPasswordHandler}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="submit">Log In</button>
      </form>
      <Link to={"/signUp"}>
        <button className="link-btn">
          Don't have an account? Register here.
        </button>
      </Link>
    </div>
  );
};

export default SignIn;
