import React from "react";
import "./Signup.css";
export const Signup = () => {
  const [form, setForm] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  // const handleChange = (e) => {
  //   setForm({
  //     ...form,
  //     [e.target.name]: e.target.value,
  //   });
  //   console.log(form);
  // };
  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
    console.log(form);
  };

  const submitForm = () => {
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
        number: 9856589568,
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
          console.log(data);
        });

      // end call
    }
  };
  return (
    <div>
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
      <button onClick={submitForm}>Signup</button>
      {/* <input onSubmit={submitForm} type="submit" value="Sign Up" /> */}
    </div>
  );
};
// "email":"kapish@gmail.com",
// "number": "9999999965",
// "password": "123456"
