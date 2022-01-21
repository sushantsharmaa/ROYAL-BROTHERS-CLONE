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
          setToken("Bearer " + data.token);
          alert("You have successfully loggedin");
          console.log(data);
        });

      // end call
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
          <div className="signup">LOGIN</div>
          <div className="login">SIGN UP</div>
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
