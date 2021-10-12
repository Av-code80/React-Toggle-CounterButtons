import React, {useState} from 'react';
import Button from './component/Button';
import MainHader from './component/MainHeader';
import Footer from './component/Footer';
import "./App.css";

const App = () => {
const [ count, setCount ] = useState(0)

  const handleButtonMinus = () => {

    setCount(count - 1)  
  }

  const handleButtonPlus = () => {
    
    setCount(count + 1)
  }

  const handleButtonReset = () => {
   
    setCount(0)
  }

  return (
    <div className="App">
      <MainHader headerCounting={count}
      />
      <Button buttonMinus={handleButtonMinus}
       buttonPlus={handleButtonPlus}
       buttonReset={handleButtonReset}
       counting={count}
       />
       <Footer />
    </div>
  );
}

export default App;
