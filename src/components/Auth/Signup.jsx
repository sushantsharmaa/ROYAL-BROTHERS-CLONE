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
  const handleSubmit = (e) => {
    // if password don't match alert
    // if password is less than 8 characters alert
    // if password is more than 20 characters alert
    // if email is not valid alert
    if (form.password !== form.confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    // /register
    /*https://bikeapis.herokuapp.com/regeister
    {
    "email":"kapish@gmail.com",
    "number": "9999999965",
    "password": "123456"
}
    */
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
  return (
    <form>
      {/* gmail */}
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
      {/* password */}
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
      />
      {/* confirm password */}
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        onChange={handleChange}
      />
      {/* submit */}
      <button onClick={handleSubmit}>Signup</button>
    </form>
  );
};
// "email":"kapish@gmail.com",
// "number": "9999999965",
// "password": "123456"
