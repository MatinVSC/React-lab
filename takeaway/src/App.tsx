import CardInput from "./components/CardInput";
import "./app.css";
import Slider from "./components/CardSlider";
import { useState } from "react";

const DATA = [
  {
    number: '6219861935405133',
    name: 'saman'
  },
]

function App() {
  const [inputChar, setInputChar] = useState(DATA);
  
  return (
    <div className="container">
      <CardInput onSetInputChar={setInputChar} inputChar={inputChar} />
      <hr />
      <Slider inputChar={inputChar} />
    </div>
  );
}

export default App;
