import "./index.css";
import React from "react";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [yourRating, setYourRating] = useState(0);
  const [friendRating, setFriendRating] = useState(0);
  return (
    <div className="App">
      <Bill bill={bill} setBill={setBill} />
      <Rating rating={yourRating} setRating={setYourRating}>
        How did you like the service?
      </Rating>
      <Rating rating={friendRating} setRating={setFriendRating}>
        How did your friend like the service?
      </Rating>
      <CalculateTip
        bill={bill}
        yourRating={yourRating}
        friendRating={friendRating}
      />
      {bill !== "" || yourRating !== 0 || friendRating !== 0 ? (
        <Reset
          setBill={setBill}
          setYourRating={setYourRating}
          setFriendRating={setFriendRating}
        />
      ) : null}
    </div>
  );
}
function Bill({ bill, setBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="number"
        min="0"
        placeholder="Bill amount"
        value={bill}
        onChange={(e) => {
          const value = e.target.value;
          if (value === "" || Number(value) >= 0) {
            setBill(value);
          }
        }}
      />
    </div>
  );
}
function Rating({ rating, setRating, children }) {
  return (
    <div>
      <label>
        {children}
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        >
          <option value={0}>Dissatisfied(0%)</option>
          <option value={5}>It was okay(5%)</option>
          <option value={10}>It was good(10%)</option>
          <option value={20}>Absolutely amazing!(20%)</option>
        </select>
      </label>
    </div>
  );
}

function CalculateTip({ bill, yourRating, friendRating }) {
  // Implementation for calculating tip

  const tipPercentage =
    (parseFloat(yourRating) + parseFloat(friendRating)) / 2 / 100;
  const tip = bill * tipPercentage || 0;
  const total = parseFloat(bill) + tip;
  return (
    <div>
      {total > 0 && (
        <h2>
          You pay ${total.toFixed(2)}(${bill} + ${tip.toFixed(2)} tip)
        </h2>
      )}
    </div>
  );
}

function Reset({ setBill, setYourRating, setFriendRating }) {
  function handleReset() {
    setBill("");
    setYourRating(0);
    setFriendRating(0);
  }
  return (
    <div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
