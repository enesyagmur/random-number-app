import React from "react";

const Input = ({ setMin, setMax }) => {
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
      />
      <input
        onChange={(e) => sendMax(+e.target.value)}
        type="text"
        placeholder="Max değer giriniz"
      />
    </div>
  );
};

export default Input;
