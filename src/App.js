import React, { useState } from "react";
import MainButton from "./component/MainButton";
import MainHader from "./component/MainHeader";
import Footer from "./component/Footer";
import "./App.css";


const App = () => {
  const [count, setCount] = useState(0);

  const handleButtonMinus = () => {
    if (count <= -2) return;
    setCount(count - 1);
  };

  const handleButtonPlus = () => {
    if (count >= 10) return;
    setCount(count + 1);
  };

  const handleButtonReset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <MainHader headerCounting={count} />
      <MainButton
        buttonMinus={handleButtonMinus}
        buttonPlus={handleButtonPlus}
        buttonReset={handleButtonReset}
        counting={count}
      />
      <Footer />
    </div>
  );
};

export default App;
