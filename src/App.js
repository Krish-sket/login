import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    // Convert age to a number and check if it's greater than or equal to 18
    if (parseInt(age) >= 17) {
      setIsLoggedIn(true);
      setErrorMessage(""); // Clear error message on successful login
    } else {
      setErrorMessage("You must be 17 or older to log in.");
      setIsLoggedIn(false);
    }
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <div>
            <label>Name: </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Age: </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
        </form>
      ) : (
        <div>
          <h2>Welcome, {name}!</h2>
          <p>You're successfully logged in.</p>
        </div>
      )}
    </div>
  );
}

export default App;
