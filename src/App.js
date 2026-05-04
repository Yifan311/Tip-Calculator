import "./index.css";
import React from "react";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState("");
  const [yourRating, setYourRating] = useState(0);
  const [friendRating, setFriendRating] = useState(0);
  const hasInput = bill !== "" || yourRating !== 0 || friendRating !== 0;
  const hasBill = Number(bill) > 0;

  function handleBillChange(e) {
    const value = e.target.value;
    if (value === "") {
      setBill("");
      return;
    }

    if (Number(value) >= 0) {
      setBill(value);
    }
  }

  function handleReset() {
    setBill("");
    setYourRating(0);
    setFriendRating(0);
  }

  return (
    <div className="App">
      <Bill bill={bill} onBillChange={handleBillChange} />
      <Rating rating={yourRating} setRating={setYourRating}>
        How did you like the service?
      </Rating>
      <Rating rating={friendRating} setRating={setFriendRating}>
        How did your friend like the service?
      </Rating>
      {hasBill && (
        <CalculateTip
          bill={bill}
          yourRating={yourRating}
          friendRating={friendRating}
        />
      )}
      {hasInput && <Reset onReset={handleReset} />}
    </div>
  );
}
function Bill({ bill, onBillChange }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="number"
        min="0"
        placeholder="Bill amount"
        value={bill}
        onChange={onBillChange}
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
  const billAmount = Number(bill);
  const tipPercentage = (yourRating + friendRating) / 2 / 100;
  const tip = billAmount * tipPercentage;
  const total = billAmount + tip;
  return (
    <div>
      {total > 0 && (
        <h2>
          You pay ${total.toFixed(2)}(${billAmount.toFixed(2)} + $
          {tip.toFixed(2)} tip)
        </h2>
      )}
    </div>
  );
}

function Reset({ onReset }) {
  return (
    <div>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default App;
