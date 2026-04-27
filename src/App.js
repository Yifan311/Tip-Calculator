import "./index.css";
import React from "react";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState(null);
  const [yourRating, setYourRating] = useState("");
  const [friendRating, setFriendRating] = useState("");
  return (
    <div className="App">
      <Bill bill={bill} setBill={setBill} />
      <YourRating yourRating={yourRating} setYourRating={setYourRating} />
      <FriendRating
        friendRating={friendRating}
        setFriendRating={setFriendRating}
      />
      <CalculateTip
        bill={bill}
        yourRating={yourRating}
        friendRating={friendRating}
      />
      {bill > 0 && yourRating !== "" && friendRating !== "" && (
        <Reset
          setBill={setBill}
          setYourRating={setYourRating}
          setFriendRating={setFriendRating}
        />
      )}
    </div>
  );
}
function Bill({ bill, setBill }) {
  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="text"
        placeholder="Bill amount"
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
    </div>
  );
}
function YourRating({ yourRating, setYourRating }) {
  return (
    <div>
      <span>How did you like the service?</span>
      <select
        value={yourRating}
        onChange={(e) => setYourRating(e.target.value)}
      >
        <option value={0}>Dissatisfied(0%)</option>
        <option value={5}>It was okay(5%)</option>
        <option value={10}>It was good(10%)</option>
        <option value={20}>Absolutely amazing!(20%)</option>
      </select>
    </div>
  );
}

function FriendRating({ friendRating, setFriendRating }) {
  return (
    <div>
      <span>How did your friend like the service?</span>
      <select
        value={friendRating}
        onChange={(e) => setFriendRating(e.target.value)}
      >
        <option value={0}>Dissatisfied(0%)</option>
        <option value={5}>It was okay(5%)</option>
        <option value={10}>It was good(10%)</option>
        <option value={20}>Absolutely amazing!(20%)</option>
      </select>
    </div>
  );
}

function CalculateTip({ bill, yourRating, friendRating }) {
  // Implementation for calculating tip
  const tip =
    (bill * (parseFloat(yourRating) + parseFloat(friendRating))) / 2 / 100 || 0;
  const total = parseFloat(bill) + tip;
  return (
    <div>
      {total > 0 && (
        <p>
          You pay ${total.toFixed(2)}(${bill} + ${tip.toFixed(2)} tip)
        </p>
      )}
    </div>
  );
}

function Reset({ setBill, setYourRating, setFriendRating }) {
  function handleReset() {
    setBill(0);
    setYourRating("");
    setFriendRating("");
  }
  return (
    <div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
