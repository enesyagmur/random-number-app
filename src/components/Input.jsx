import React from "react";

const Input = ({ setMin, setMax, setGuess }) => {
  const sendMin = (value) => {
    setMin(value);
  };

  const sendMax = (value) => {
    setMax(value);
  };

  return (
    <div>
      <input
        onChange={(e) => sendMin(+e.target.value)} // başına + koymamyınca sayı olduğunu anlamıyor
        type="text"
        placeholder="Min değer giriniz"
        className="m-1 p-1 border border-light rounded-1"
      />
      <input
        onChange={(e) => sendMax(+e.target.value)}
        type="text"
        placeholder="Max değer giriniz"
        className="m-1 p-1 border border-light rounded-1"
      />
    </div>
  );
};

export default Input;
