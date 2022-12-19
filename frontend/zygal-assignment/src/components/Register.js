import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(email);
    try {
      const res =  await axios({
        url: "http://localhost:5000/registerUser",
        method: "post",
        data: {
          userName: email,
          password: pass,
        }
       
      });
      alert(res.data.message);
      navigate("/");
      setEmail("");
      setPass("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="auth-form-container">
      <form className="register-form" onSubmit={submitHandler}>
        <h2>Register</h2>
        <label htmlFor="email">userName</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        /><br/>
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="password"
          id="password"
          name="password"
        /><br/>
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
};

export default Register;
