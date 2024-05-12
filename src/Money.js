import React, { useState } from "react";
import { initialCashSet } from "./App";

function Money({ value, label, summe }) {
  const [count, setCount] = useState();
  const [newSum, setNewSum] = useState(initialCashSet);


  function handleChange(calculatedValue) {
    const updatedCashSet = initialCashSet.map(element => {
      if (element.value === value) {
        return { ...element, sum: calculatedValue }; // Update sum only for the current denomination
      }
      return element;
    });
    setNewSum(updatedCashSet);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let calculatedValue;
    if (value === 'Wert dem Suldschein entnehmen') {
      calculatedValue = count;
    } else {
      calculatedValue = count * value;
    }
    handleChange(calculatedValue);
  }

  return (
    <form onSubmit={handleSubmit} className="geld-in-der-kasse">
      <div className="container">
        <h3 className="scheine">{value}{label !== 'schuldschein' ? "'er" : ''}</h3>
        <input
          type="number"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))} />
        <h2 className="scheine">= {newSum.map(e => e.sum)}€</h2>
      </div>
    </form>
  );
}
