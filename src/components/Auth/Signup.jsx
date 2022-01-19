import React from "react";
import "./Signup.css";
export const Signup = () => {
  const [form, setForm] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitForm = (e) => {
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
      let formsubmit = {
        email: form.email,
        number: form.number,
        password: form.password,
      };
      fetch("https://bikeapis.herokuapp.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formsubmit),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    }
  };
  return (
    <form onSubmit={submitForm}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />
      <input
        type="number"
        name="phone"
        placeholder="Phone"
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

      <input type="submit" value="SignUP" />
    </form>
  );
};
// "email":"kapish@gmail.com",
// "number": "9999999965",
// "password": "123456"
/*
const handleSubmit = (e) => {
    if (form.password !== form.confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    const sendForm = {
      email: form.email,
      number: form.number,
      password: form.password,
    };
    fetch("https://bikeapis.herokuapp.com/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendForm),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "email": "kapish@gmail.com",
  "number": "9999999965",
  "password": "123456"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:2345/register", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));



*/
