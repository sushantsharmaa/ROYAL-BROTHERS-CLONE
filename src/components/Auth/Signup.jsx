import React from "react";
import "./Signup.css";

export const Signup = () => {
  const [token, setToken] = React.useState("");
  const [form, setForm] = React.useState({});

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
    // console.log(form);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
    } else if (
      form.email === "" ||
      form.password === "" ||
      form.confirmPassword === "" ||
      form.number === ""
    ) {
      alert("Please fill in all fields");
    } else {
      // https://bikeapis.herokuapp.com/register
      // now let's send this to the server
      var sendForm = {
        email: form.email,
        number: Number(form.number),
        password: form.password,
      };
      console.log(sendForm);
      fetch("https://bikeapis.herokuapp.com/register", {
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
          alert("You have successfully registered");
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
          <div className="login">LOGIN</div>
          <div className="signup">SIGN UP</div>
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
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
        />
        <input
          type="number"
          name="number"
          placeholder="Phone Number"
          onChange={handleChange}
        />
        <button className="signin__button" onClick={submitForm}>
          Sign Up
        </button>
      </form>
    </div>
  );
};
// "email":"kapish@gmail.com",
// "number": "9999999965",
// "password": "123456"
