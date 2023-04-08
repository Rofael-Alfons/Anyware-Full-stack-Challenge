import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../Store/Store";
import { Link } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function SignUpHandler(e) {
    e.preventDefault();
    dispatch(signUp({ email, password }));
  }
  const setEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const setPasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onClick={SignUpHandler}>
        <label htmlFor="email">email</label>
        <input
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
      <Link to={"/signIn"}>
        <button className="link-btn">
          Already have an account? Login here.
        </button>
      </Link>
    </div>
  );
};

export default SignUp;
