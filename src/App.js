/** @format */

import React, { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import TextField from "./TextField";

const App = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    setEmail("");
  };
  return (
    <>
      <Header />
      <div className="container">
        <div>
          <Hero />
        </div>
        <form onSubmit={handleSubmit}>
          <TextField
            value={email}
            type="email "
            name="email"
            label="Email"
            placeHolder="Please Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default App;
