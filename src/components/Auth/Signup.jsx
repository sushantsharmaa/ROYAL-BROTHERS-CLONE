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
    <div className="sigin">
      <h1 className="signin__headder">Rent . Ride . Explore</h1>
      <div className="signin__card">
        <div className="upper">
          <div className="login">LOGIN</div>
          <div className="signup">SIGN UP</div>
        </div>
      </div>
      <form className="signin__form">
        <input type="text" name="" placeholder="ts" id="" />
      </form>
    </div>
  );
};
// "email":"kapish@gmail.com",
// "number": "9999999965",
// "password": "123456"
