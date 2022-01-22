import { Link } from "react-router-dom";
import React from "react";

import "./Signup.css";

export const Login = () => {
  const [token, setToken] = React.useState("");
  const [form, setForm] = React.useState({});

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (form.email === "" || form.password === "") {
      alert("Please fill  all fields");
    } else {
      var sendForm = {
        name: form.name,
        email: form.email,
        password: form.password,
      };
      console.log(sendForm);
      fetch("https://bikeapis.herokuapp.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sendForm),
      })
        .then((res) => res.json())
        .then((data) => {
          // setToken
          if (data.status === "failed") {
            alert("Invalid credentials");
          } else if (data.token) {
            setToken("Bearer " + data.token);
            localStorage.setItem("Royal_id", data.user._id);
            localStorage.setItem("Royal_user", data.user.firstName);
            alert("You have successfully loggedin");
          } else {
            alert("You are not registered");
          }
        });
    }
  };
  React.useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    }
  }, [token]);

  return (
    <div className="sigin">
      <h1 className="signin__headder">Rent . Ride . Explore</h1>
      <div className="signin__card">
        <div className="upper">
          <div className="signup">
            <Link to="/signin">LOGIN</Link>
          </div>

          <div className="login">
            <Link to="/signin">SIGNUP</Link>
          </div>
        </div>
      </div>
      <form className="signin__form">
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button className="signin__button" onClick={submitForm}>
          Login
        </button>
      </form>
    </div>
  );
};
// "email":"kapish@gmail.com",
// "number": "9999999965",
// "password": "123456"
